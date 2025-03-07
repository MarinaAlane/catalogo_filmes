import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/LoginPage';
import Register from './Pages/RegisterPage/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        {/* <Route path="/" element={<FormLogin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
