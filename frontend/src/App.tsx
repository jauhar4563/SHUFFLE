import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRoutes from './routes/userRoutes';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define other routes here if needed */}
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;