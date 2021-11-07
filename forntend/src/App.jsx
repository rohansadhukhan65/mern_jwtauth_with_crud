import './App.css';
import { BrowserRouter as Router ,  Routes, Route } from "react-router-dom";

// import Components/Screens ....
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Header from './components/Header';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={Login} />
        <Route path="/register" element={Signup} />
      </Routes>
    </Router>
  );
}

export default App;
