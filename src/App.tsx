import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/LoginPage';
import Register from './Pages/RegisterPage/Register';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
