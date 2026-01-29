import { useParams, Link, useNavigate } from 'react-router-dom';
import { topics, getTopicById, getLessonById, getNextLesson, getPreviousLesson } from '../data/lessons';
import LessonContent from '../components/LessonContent';
import ProgressBar from '../components/ProgressBar';
import { useProgress } from '../hooks/useProgress';

function Learning() {
  const { topicId, lessonId } = useParams();
  const navigate = useNavigate();
  const { isLessonComplete, markLessonComplete, getTopicProgress } = useProgress();

  const topic = topicId ? getTopicById(topicId) : null;
  const lesson = topicId && lessonId ? getLessonById(topicId, lessonId) : null;

  const handleCompleteLesson = () => {
    markLessonComplete(topicId, lessonId);
    const next = getNextLesson(topicId, lessonId);
    if (next) {
      navigate(`/learning/${topicId}/${next.id}`);
    } else {
      navigate(`/learning/${topicId}`);
    }
  };

  // Show topic list if no topic selected
  if (!topicId) {
    return (
      <div className="learning">
        <h1>Learning Modules</h1>
        <p className="page-intro">
          Choose a topic to begin your journey into responsible AI use.
        </p>

        <div className="topics-grid">
          {topics.map((t) => {
            const progress = getTopicProgress(t.id);
            return (
              <Link key={t.id} to={`/learning/${t.id}`} className="topic-card">
                <div className="topic-icon">{t.icon}</div>
                <h3>{t.title}</h3>
                <p>{t.description}</p>
                <div className="topic-meta">
                  <span className="lesson-count">{t.lessons.length} lessons</span>
                  {progress > 0 && (
                    <span className="progress-badge">{progress}% complete</span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  // Show lessons list for selected topic
  if (topicId && !lessonId && topic) {
    const progress = getTopicProgress(topicId);
    return (
      <div className="learning">
        <Link to="/learning" className="back-link">
          ← All Topics
        </Link>

        <div className="topic-header">
          <span className="topic-icon-large">{topic.icon}</span>
          <div>
            <h1>{topic.title}</h1>
            <p className="topic-description">{topic.description}</p>
          </div>
        </div>

        <ProgressBar value={progress} label={`${progress}% complete`} />

        <div className="lessons-list">
          {topic.lessons.map((l, index) => {
            const complete = isLessonComplete(topicId, l.id);
            return (
              <Link
                key={l.id}
                to={`/learning/${topicId}/${l.id}`}
                className={`lesson-card ${complete ? 'complete' : ''}`}
              >
                <div className="lesson-number">{index + 1}</div>
                <div className="lesson-info">
                  <h3>{l.title}</h3>
                  <span className="lesson-duration">{l.duration}</span>
                </div>
                {complete && <span className="complete-check">✓</span>}
              </Link>
            );
          })}
        </div>

        <div className="topic-actions">
          <Link to="/quiz" className="btn-secondary">
            Test Your Knowledge →
          </Link>
        </div>
      </div>
    );
  }

  // Show lesson content
  if (lesson) {
    const prevLesson = getPreviousLesson(topicId, lessonId);
    const nextLesson = getNextLesson(topicId, lessonId);
    const isComplete = isLessonComplete(topicId, lessonId);

    return (
      <div className="learning lesson-view">
        <Link to={`/learning/${topicId}`} className="back-link">
          ← Back to {topic?.title}
        </Link>

        <article className="lesson-article">
          <header className="lesson-header">
            <span className="lesson-topic">{topic?.title}</span>
            <h1>{lesson.title}</h1>
            <span className="lesson-duration">{lesson.duration} read</span>
          </header>

          <LessonContent content={lesson.content} />

          <footer className="lesson-footer">
            <div className="lesson-nav">
              {prevLesson ? (
                <Link
                  to={`/learning/${topicId}/${prevLesson.id}`}
                  className="btn-secondary"
                >
                  ← {prevLesson.title}
                </Link>
              ) : (
                <div />
              )}

              {!isComplete ? (
                <button onClick={handleCompleteLesson} className="btn-primary">
                  {nextLesson ? 'Complete & Continue →' : 'Complete Lesson ✓'}
                </button>
              ) : nextLesson ? (
                <Link
                  to={`/learning/${topicId}/${nextLesson.id}`}
                  className="btn-primary"
                >
                  Next Lesson →
                </Link>
              ) : (
                <Link to={`/quiz/${topicId}`} className="btn-primary">
                  Take the Quiz →
                </Link>
              )}
            </div>
          </footer>
        </article>
      </div>
    );
  }

  // Fallback for invalid routes
  return (
    <div className="learning">
      <h1>Topic Not Found</h1>
      <p>The requested topic or lesson could not be found.</p>
      <Link to="/learning" className="btn-primary">
        Browse All Topics
      </Link>
    </div>
  );
}

export default Learning;
