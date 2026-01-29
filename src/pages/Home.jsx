import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Learn to Use AI Responsibly</h1>
        <p>
          An interactive guide for students navigating the world of artificial
          intelligence with ethics, integrity, and awareness.
        </p>
      </section>

      <section className="modules">
        <h2>Explore the Modules</h2>
        <div className="module-cards">
          <Link to="/learning" className="module-card">
            <div className="module-icon">📚</div>
            <h3>Learning</h3>
            <p>
              Interactive lessons on AI ethics, academic integrity, and privacy.
            </p>
          </Link>

          <Link to="/quiz" className="module-card">
            <div className="module-icon">✓</div>
            <h3>Quiz</h3>
            <p>Test your knowledge and track your understanding.</p>
          </Link>

          <Link to="/learn-more" className="module-card">
            <div className="module-icon">🔗</div>
            <h3>Learn More</h3>
            <p>Curated resources for deeper exploration.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
