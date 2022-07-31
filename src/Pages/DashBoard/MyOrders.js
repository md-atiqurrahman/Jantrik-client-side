import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import CancelModal from './CancelModal';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [confirm, setConfirm] = useState(null);

    const { data: orders, isLoading, refetch } = useQuery(['orders', user], () => fetch(`https://vast-cove-21670.herokuapp.com/orders?email=${user?.email}`)
        .then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }

    const handleCancel = (id) => {
        const url = `https://vast-cove-21670.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
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
                            orders.map((o, index) => <tr key={index} className='hover'>
                                <th>{index + 1}</th>
                                <td>{o.toolName}</td>
                                <td>${o.price}</td>
                                <td>{o?.quantity}</td>
                                <td>
                                    {(o.totalPrice && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(o.totalPrice && o.paid) && <span className='text-success uppercase'>Paid</span>}
                                </td>
                                <td>
                                    {
                                        (o?.totalPrice && o.paid) && <span
                                            className='text-[#330000]'>{o.transactionId}</span>
                                    }
                                </td>
                                <td>{(o.totalPrice && !o.paid) && <label htmlFor="cancel-modal" onClick={() => setConfirm(o)} className='btn btn-xs btn-ghost'>Cancel</label>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                confirm && <CancelModal confirm={confirm} handleCancel={handleCancel}></CancelModal>
            }
        </section>
    );
};

export default MyOrders;