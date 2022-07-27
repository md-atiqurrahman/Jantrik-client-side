import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Header/Navbar/Navbar';
import PurchaseTool from './Pages/Home/PurchaseTool/PurchaseTool';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={<PurchaseTool></PurchaseTool>}></Route>
      </Routes>
    </div>
  );
}

export default App;
