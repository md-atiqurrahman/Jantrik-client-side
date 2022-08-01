import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import CancelOrderRequestModal from './CancelOrderRequestModal';

const ManageAllOrders = () => {
    const [user] = useAuthState(auth);
    const [confirm, setConfirm] = useState(null);
    const { data: allOrders, isLoading, refetch } = useQuery(['allOders', user], () => fetch('https://vast-cove-21670.herokuapp.com/allOrders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const changeDeliveryStatus = (id) => {
        fetch(`https://vast-cove-21670.herokuapp.com/allOrders/${id}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    refetch();
                }
            })
    }

    const handleCancel = (id) =>{
        fetch(`https://vast-cove-21670.herokuapp.com/allOrders/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(output => {
                 if(output.deletedCount > 0){
                    refetch();
                 }
            })
    }

    return (
        <section>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL no.</th>
                            <th>User Name</th>
                            <th>Ordered Tool Name</th>
                            <th>Paid Status</th>
                            <th>Cancel Order</th>
                            <th>Delivery Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders?.map((o, index) => <tr key={o._id} className='hover'>
                                <th>{index + 1}</th>
                                <td>{o.userName}</td>
                                <td>{o.toolName}</td>
                                <td>{o?.paid ? <span className='text-success'>Paid</span> : <span className='text-red-500'>Unpaid</span>}</td>
                                <td>{!o?.paid && <label htmlFor="cancel-modal" onClick={() => setConfirm(o)} className='btn btn-xs btn-ghost'>Cancel</label>}</td>
                                <td>{(o?.paid && !o?.deliveryStatus) && <div className='flex'>
                                    <button className='flex items-center btn-xs rounded-lg  text-[#363f4d] bg-success mr-[5px]'>
                                        <div className='w-3 h-3 mr-2 border-b-2 border-[#363f4d] animate-spin rounded-full'></div>
                                        <span className='font-medium'>Pending...</span>
                                    </button>
                                    <button onClick={() => changeDeliveryStatus(o._id)} className='btn btn-xs btn-success font font-medium'>Deliver</button>
                                </div>
                                }
                                    {o?.deliveryStatus && <span className='text-success'>Shipped</span>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                confirm && <CancelOrderRequestModal confirm={confirm} handleCancel={handleCancel}></CancelOrderRequestModal>
            }
        </section>
    );
};

export default ManageAllOrders;