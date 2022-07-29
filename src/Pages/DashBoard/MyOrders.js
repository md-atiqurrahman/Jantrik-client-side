import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import CancelModal from './CancelModal';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [confirm, setConfirm] = useState(null);

    const { data: orders, isLoading, refetch } = useQuery(['orders', user], () => fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }

    const handleCancel = (id) => {
        const url = `http://localhost:5000/orders/${id}`;
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
                                <td><label htmlFor="cancel-modal" onClick={ () => setConfirm(o)} className='btn btn-xs btn-ghost'>Cancel</label></td>
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