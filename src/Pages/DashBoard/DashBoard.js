import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import CustomLink from '../Shared/CustomLink/CustomLink';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col mt-[17px]">
                {/* <!-- Page content here --> */}
                <Outlet />
            </div>
            <div className="drawer-side sticky">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48  bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                       !admin && 
                        <>
                            <li><CustomLink as={Link} to='/dashboard' >My Orders</CustomLink></li>
                            <li><CustomLink as={Link} to='/dashboard/review'>Add A Review</CustomLink></li>
                        </>
                    }
                    <li><CustomLink as={Link} to='/dashboard/profile'>My Profile</CustomLink></li>
                    {
                        admin &&
                        <>
                            <li><CustomLink as={Link} to='/dashboard/users'>All Users</CustomLink></li>
                            <li><CustomLink as={Link} to='/dashboard/manageAllOrders'>Manage Orders</CustomLink></li>
                            <li><CustomLink as={Link} to='/dashboard/addProduct'>Add A Product</CustomLink></li>
                            <li><CustomLink as={Link} to='/dashboard/manageProducts'>Manage Tools</CustomLink></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;