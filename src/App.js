import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Header/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
