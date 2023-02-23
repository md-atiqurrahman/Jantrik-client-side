import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    

    const makeAdmin = () => {
        fetch(`https://jantrik-server-side.up.railway.app/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to make an admin')
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin')
                }
            })
    }
    return (
        <tr className='overflow-hidden'>
            <td data-label={'SL no.'}>{index + 1}</td>
            <td data-label={'Email'}>{email}</td>
            <td data-label={'Make admin'}>{role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs">Make admin</button> : <span className='text-success'>Admin</span>}</td>
        </tr>
    );
};

export default UserRow;