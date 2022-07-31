import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    const [user] = useAuthState(auth);

    const { data: users, isLoading ,refetch } = useQuery(['users',user], () => fetch('http://localhost:5000/users', {
        method: 'GET'
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className="text-2xl text-primary">All Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
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
        </div>
    );
};

export default Users;