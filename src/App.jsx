import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Quiz from './pages/Quiz';
import LearnMore from './pages/LearnMore';
import './styles/main.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/learning/:topicId" element={<Learning />} />
        <Route path="/learning/:topicId/:lessonId" element={<Learning />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/:topicId" element={<Quiz />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </Layout>
  );
}

export default App;
