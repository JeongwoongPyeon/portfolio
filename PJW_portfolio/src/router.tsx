import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ProjectDetail from './component/Project/ProejctDetail';
import Review from './Contact/Review';

export const BrowserRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:projectName" element={<ProjectDetail />} />
        <Route path="/reviews" element={<Review />} />
      </Routes>
    </Router>
  );
};

