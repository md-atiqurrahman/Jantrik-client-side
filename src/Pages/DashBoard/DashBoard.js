import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../Shared/CustomLink/CustomLink';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col mt-[17px]">
                {/* <!-- Page content here --> */}
                <Outlet />
            </div>
            <div className="drawer-side sticky">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto max-w-sm bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><CustomLink as={Link} to='/dashboard' >My Orders</CustomLink></li>
                    <li><CustomLink as={Link} to='/dashboard/review'>Add A Review</CustomLink></li>
                    <li><CustomLink as={Link} to='/dashboard/profile'>My Profile</CustomLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;