import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Header/Navbar/Navbar';
import PurchaseTool from './Pages/Home/PurchaseTool/PurchaseTool';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';
import Review from './Pages/DashBoard/Review';
import MyProfile from './Pages/DashBoard/MyProfile';
import Payment from './Pages/DashBoard/Payment';
import AllReviews from './Pages/AllReviews/AllReviews';
import Users from './Pages/DashBoard/Users';
import ManageAllOrders from './Pages/DashBoard/ManageAllOrders';
import AddProduct from './Pages/DashBoard/AddProduct';
import ManageProducts from './Pages/DashBoard/ManageProducts';
import RequireAdmin from './Pages/Shared/RequireAdmin/RequireAdmin';
import useScrollToTop from './hooks/useScrollToTop';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/Shared/NotFound/NotFound';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';

function App() {
  useScrollToTop();
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/allReviews' element={<AllReviews></AllReviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <PurchaseTool></PurchaseTool>
          </RequireAuth>
        }>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/dashboard' element={<RequireAuth><DashBoard/></RequireAuth>}>
          <Route path='orders' element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:orderId' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><Users/></RequireAdmin>}></Route>
          <Route path='manageAllOrders' element={<RequireAdmin><ManageAllOrders/></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
