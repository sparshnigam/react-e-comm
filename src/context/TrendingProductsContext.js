import { createContext } from 'react'
import { useSelector } from 'react-redux';
import { trendingProductsSelector } from '../Components/reducers/trendingProductsSlice';

export const TrendingProductsContext = createContext();
const TrendingContext = (props) => {
    const trendingProducts = useSelector((state) => trendingProductsSelector.selectAll(state));
    return (
        <TrendingProductsContext.Provider value={trendingProducts}>
            {props.children}
        </TrendingProductsContext.Provider>
    );
}

export default TrendingContext;

// export const context = ()=>{
//     const limitProducts = useSelector((state)=>productsSelector.selectAll(state));
//     return React.createContext({
//         limitedProducts : limitProducts,
//     });
// }