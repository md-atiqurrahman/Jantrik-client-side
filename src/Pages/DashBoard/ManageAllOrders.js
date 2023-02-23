import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import CancelOrderRequestModal from './CancelOrderRequestModal';

const ManageAllOrders = () => {
    const [user] = useAuthState(auth);
    const [confirm, setConfirm] = useState(null);
    const { data: allOrders, isLoading, refetch } = useQuery(['allOders', user], () => fetch('https://jantrik-server-side.up.railway.app/allOrders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const changeDeliveryStatus = (id) => {
        fetch(`https://jantrik-server-side.up.railway.app/allOrders/${id}`, {
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

    const handleCancel = (id) => {
        fetch(`https://jantrik-server-side.up.railway.app/allOrders/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(output => {
                if (output.deletedCount > 0) {
                    refetch();
                }
            })
    }

    return (
        <section>
            <table className="my-table">
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
                            <td data-label={'SL no.'}>{index + 1}</td>
                            <td data-label={'User Name'}>{o.userName}</td>
                            <td data-label={'Ordered Tool Name'}>{o.toolName}</td>
                            <td data-label={'Paid Status'}>{o?.paid ? <span className='text-success'>Paid</span> : <span className='text-red-500'>Unpaid</span>}</td>
                            <td data-label={'Cancel Order'}>{!o?.paid ? <label htmlFor="cancel-modal" onClick={() => setConfirm(o)} className='btn btn-xs btn-ghost'>Cancel</label>: <span className='text-success'>order request accepted</span>}</td>
                            <td data-label={'Delivery Status'}>{(o?.paid && !o?.deliveryStatus) && <div className='flex justify-end'>
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
            {
                confirm && <CancelOrderRequestModal confirm={confirm} handleCancel={handleCancel}></CancelOrderRequestModal>
            }
        </section>
    );
};

export default ManageAllOrders;