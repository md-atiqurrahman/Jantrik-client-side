import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import DeleteToolsModal from './DeleteToolsModal';

const ManageProducts = () => {
    const [user] = useAuthState(auth);
    const [confirm, setConfirm] = useState(null);

    const { data: tools, isLoading, refetch } = useQuery(['tools',user], () => fetch('https://jantrik-server-side.vercel.app/tools').then(res => res.json()))

    
    if(isLoading){
        return <Loading></Loading>
    }

    const handleDeleteTools = (id) => {
        fetch(`https://jantrik-server-side.vercel.app/tool/${id}`, {
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
            <table className="my-table">
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
                                <td data-label={'SL no.'}>{index + 1}</td>
                                <td data-label={'Tool Name'}>{t.name}</td>
                                <td data-label={'Delete Product'}><label htmlFor="cancel-modal" onClick={() => setConfirm(t)} className='btn btn-xs btn-ghost'>Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            {
                confirm && <DeleteToolsModal confirm={confirm} handleDeleteTools={handleDeleteTools}></DeleteToolsModal>
            }
        </section>
    );
};

export default ManageProducts;