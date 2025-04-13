import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from 'Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/users" element={<h2>Users</h2>} />
        <Route path="/users/:id" element={<h2>User Details</h2>} />
      </Routes>    
    </Router>
  )
}

export default App
