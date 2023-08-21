import Navbar from './components/Header/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderRoutes from "./components/Header/Router";



function App() {
  return (
    <Router>
      <Navbar />
        <HeaderRoutes />
    </Router>
  );
}

export default App;
