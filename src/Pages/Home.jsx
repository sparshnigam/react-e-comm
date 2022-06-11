import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from '../Components/Carousel';
import Main from '../Components/Main';
import Footer from '../utilities/Footer';
import Header from '../utilities/Header';
import { fetchTrendingProducts } from '../Components/reducers/trendingProductsSlice';
import { fetchCategories } from '../Components/reducers/categoriesSlice';
import { fetchMensShoes } from '../Components/reducers/mensShoesSlice';
import { fetchFurnitures } from '../Components/reducers/furnitureSlice';
import { fetchGroceries } from '../Components/reducers/grocerySlice';

const Home = () => {

    const dispatch = useDispatch();
    
    const status = useSelector((state)=>state);
    
    useEffect(()=>{
        dispatch(fetchTrendingProducts());
        dispatch(fetchMensShoes());
        dispatch(fetchFurnitures());
        dispatch(fetchGroceries());
    },[]);

    // console.log(status);

    const RenderMain = ()=>{
        if(status.trendingProducts.loading || status.categories.loading || status.furnitures.loading || status.groceries.loading || status.mensShoes.loading){
            return <p>Loading...</p>;
        }else{
            return (
                <React.Fragment>
                    <Header />
                    <Carousel />
                    <Main />
                    <Footer />
                </React.Fragment>
            );
        }
    };
    
  return (
    <div>
        <RenderMain />
    </div>
  )
}

export default Home;