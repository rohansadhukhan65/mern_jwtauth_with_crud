import './App.css';
import { BrowserRouter as Router ,  Routes, Route } from "react-router-dom";

// import Components/Screens ....
import Login from './Screens/Login';
import Register from './Screens/Register';
import Header from './components/Header';
import Home from './Screens/Home';
import Profile from './Screens/Profile';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
