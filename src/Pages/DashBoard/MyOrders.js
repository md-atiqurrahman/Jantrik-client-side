import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import CancelModal from './CancelModal';
import useAdmin from '../../hooks/useAdmin';
import './MyOrders.css';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [confirm, setConfirm] = useState(null);
    const navigate = useNavigate();

    const { data: orders, isLoading, refetch } = useQuery(['orders', user], () => fetch(`https://vast-cove-21670.herokuapp.com/orders?email=${user?.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }

    const handleCancel = (id) => {
        const url = `https://vast-cove-21670.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    refetch();
                }
            })
    }

    return admin ?
        (
            navigate('/dashboard/profile')
        )
        :
        (
            <section>
                <table className="my-table">
                    <thead>
                        <tr>
                            <th>SL no.</th>
                            <th>Tool Name</th>
                            <th>Price Per Unit</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th>TransactionId</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((o, index) => <tr key={o._id} className='hover'>
                                <td data-label={'SL no.'}>{index + 1}</td>
                                <td data-label={'Tool Name'}>{o.toolName}</td>
                                <td data-label={'Price Per Unit'}>${o.price}</td>
                                <td data-label={'Quantity'}>{o?.quantity}</td>
                                <td data-label={'Payment'}>
                                    {(o.totalPrice && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(o.totalPrice && o.paid) && <span className='text-success uppercase'>Paid</span>}
                                </td>
                                <td data-label={'TransactionId'}>
                                    {
                                        (o?.totalPrice && o.paid) && <span
                                            className='text-[#330000]'>{o.transactionId}</span>
                                    }
                                </td>
                                <td data-label={'Cancel Order'}>{(o.totalPrice && !o.paid) && <label htmlFor="cancel-modal" onClick={() => setConfirm(o)} className='btn btn-xs btn-ghost'>Cancel</label>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {
                    confirm && <CancelModal confirm={confirm} handleCancel={handleCancel}></CancelModal>
                }
            </section>
        );
};

export default MyOrders;