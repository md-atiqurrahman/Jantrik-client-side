import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl text-purple-500 font-bold  mb-[15px]'>Welcome to my Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side sticky">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto max-w-sm bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' >My Orders</Link></li>
                    <li><Link to='/dashboard/review'>Add A Review</Link></li>
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;