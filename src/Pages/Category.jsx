import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../Components/Banner';
import ProductByCategory from '../Components/ProductByCategory';
import { fetchProductByCategory } from '../Components/reducers/productByCategorySlice';
import { ProductByCategoryContext } from '../context/ProductByCategoryContext';
import Footer from '../utilities/Footer';
import Header from '../utilities/Header';

const Category = () => {
    const [productCategory,setProductCategory] = useContext(ProductByCategoryContext);
    const dispatch = useDispatch();
    const status = useSelector((state) => state);
    useEffect(()=>{
        // if(productCategory){
            dispatch(fetchProductByCategory(productCategory));
        // }
    },[productCategory]);
    if (status.productByCategory.loading) {
        return <p>Loading...</p>;
      }
  return (
    <React.Fragment>
        <Header />
        <Banner title="Category" />
        <ProductByCategory />
        <Footer />
    </React.Fragment>
  )
}

export default Category;