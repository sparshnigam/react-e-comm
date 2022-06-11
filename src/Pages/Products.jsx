import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AllProducts from '../Components/AllProducts';
import Banner from '../Components/Banner';
import { fetchAllProducts } from '../Components/reducers/allProductsSlice';
import { cartSelector } from '../Components/reducers/cartSlice';
import ProductDetailsContextWrapper from '../context/ProductDetailsContext';
import Footer from '../utilities/Footer';
import Header from '../utilities/Header';

const Products = () => {

    const status = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);


    const RenderProducts = () => {
        if (status.allProducts.loading) {
            return <p>Loading...</p>;
        } else {
            return (
                <React.Fragment>
                    <Header />
                    <Banner title="Products" description="Best Quality Products As Per Your Needs" />
                    <AllProducts />
                    <Footer />
                </React.Fragment>
            );
        }
    }

    return (
        <RenderProducts />
    );
}

export default Products