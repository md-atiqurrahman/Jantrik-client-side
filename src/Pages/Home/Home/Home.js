import React from 'react';
import useLoading from '../../../hooks/useLoading';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';

const Home = () => {
    const [loading] = useLoading();

    return loading ? 
    (
     <Loading></Loading>
    )
    :
    (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;