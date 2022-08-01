import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import DeleteToolsModal from './DeleteToolsModal';

const ManageProducts = () => {
    const [user] = useAuthState(auth);
    const [confirm, setConfirm] = useState(null);

    const { data: tools, isLoading, refetch } = useQuery(['tools',user], () => fetch('https://vast-cove-21670.herokuapp.com/tools').then(res => res.json()))

    
    if(isLoading){
        return <Loading></Loading>
    }

    const handleDeleteTools = (id) => {
        fetch(`https://vast-cove-21670.herokuapp.com/tool/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.deletedCount > 0) {
                    setConfirm(null);
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
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools?.map((t, index) => <tr key={t._id} className='hover'>
                                <th>{index + 1}</th>
                                <td>{t.name}</td>
                                <td><label htmlFor="cancel-modal" onClick={() => setConfirm(t)} className='btn btn-xs btn-ghost'>Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                confirm && <DeleteToolsModal confirm={confirm} handleDeleteTools={handleDeleteTools}></DeleteToolsModal>
            }
        </section>
    );
};

export default ManageProducts;