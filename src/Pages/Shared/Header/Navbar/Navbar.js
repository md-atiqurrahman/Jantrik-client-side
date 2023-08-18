import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import logo from '../../../../images/Navbar/logo.png';
import CustomLink from '../../CustomLink/CustomLink';
import './Navbar.css';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const LogOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }

    const navbarItems = <>
        <li className='hover:text-primary'><CustomLink as={Link} to='/'>Home</CustomLink></li>
        <li className='hover:text-primary'><a>Shop</a></li>
        <li className='hover:text-primary'><CustomLink as={Link} to='/blogs'>Blogs</CustomLink></li>
        <li className='hover:text-primary'><CustomLink as={Link} to='/allReviews'>All Reviews</CustomLink></li>
        {
            user && <li className='hover:text-primary'><CustomLink as={Link} to='/dashboard'>Dashboard</CustomLink></li>
        }
        <li className='hover:text-primary'>
            {user ? <CustomLink as={Link} to='/home' onClick={LogOut}>Sign Out</CustomLink> : <CustomLink as={Link} to='/login'>Login</CustomLink>}
        </li>
    </>

    return (
        <div className='header'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn  btn-ghost mr-[5px] lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-52">
                            {navbarItems}
                            <div className="navbar-end sm:flex w-full lg:hidden ml-[15px]">
                                <p className='text-[16px] hover:text-primary pt-[8px]'>{user?.displayName}</p>
                            </div>
                        </ul>
                    </div>
                    <img className='mt-[-14px]' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 uppercase mt-[9px] text-[#333333]">
                        {navbarItems}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <p className='text-[16px] hover:text-primary pt-[8px]'>{user?.displayName}</p>
                </div>
                <div className="navbar-end flex lg:hidden">
                    <label htmlFor="dashboard-sidebar" tabIndex="1" className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;