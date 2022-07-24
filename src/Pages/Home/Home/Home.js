import React from 'react';
import useLoading from '../../../hooks/useLoading';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import NewArrivals from '../NewArrivals/NewArrivals';
import Service from '../Service/Service';
import Tools from '../Tools/Tools';
import BestSellerProducts from './BestSellerProducts/BestSellerProducts';
import Blog from './Blog/Blog';
import Brand from './Brand/Brand';
import NewToolsBanner from './NewToolsBanner/NewToolsBanner';

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
            <NewArrivals></NewArrivals>
            <Tools></Tools>
            <NewToolsBanner></NewToolsBanner>
            <Service></Service>
            <BestSellerProducts></BestSellerProducts>
            <Blog></Blog>
            <Brand></Brand>
            <Footer></Footer>
        </div>
    );
};

export default Home;