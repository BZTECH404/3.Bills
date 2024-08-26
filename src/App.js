import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import ProtectedRoute from './protectedRoute'; // Your protected route wrapper
import Collecting from './Component/Collecting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/collecting" 
          element={
            <ProtectedRoute>
              <Collecting/>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
