import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    const [user] = useAuthState(auth);

    const { data: users, isLoading ,refetch } = useQuery(['users',user], () => fetch('https://jantrik-client-side.vercel.app/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className="text-2xl text-primary text-center">All Users</h1>
            <table className="my-table">
                    <thead>
                        <tr>
                            <th>SL no.</th>
                            <th>Email</th>
                            <th>Make admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                            key={user._id}
                            user = {user}
                            index = {index}
                            refetch = {refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default Users;