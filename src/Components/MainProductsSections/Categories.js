import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductByCategoryContext } from '../../context/ProductByCategoryContext';
// import { categoriesSelector } from '../reducers/reducerSlice';
import { categoriesSelector } from '../reducers/categoriesSlice';

const Categories = () => {
    
    const [productCategory,setProductCategory] = useContext(ProductByCategoryContext);
    const productsCategories = useSelector((state) => categoriesSelector.selectAll(state));
    const cat = productsCategories.map((e)=>{
        return(
            <div key={e} className="col-md-3"  onClick={() => setProductCategory(e)}>
                <Link to='/category'>
                    <div className="card p-1">
                        <div className="d-flex justify-content-between align-items-center p-2">
                            <div className="flex-column lh-1 imagename"> <span>{e.charAt(0).toUpperCase() + e.slice(1)}</span> </div>
                            <div> <img src="https://source.unsplash.com/user/nikhilmitra/OiUDGKHHuN0" height="100" width="100" /> </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return (
        <div className="container">
            <h2 className='mt-5'>Our <b>Categories</b></h2>
            {/* <div className="d-flex justify-content-center mt-3"> <span className="text text-center">Finding Best Products Now<br /> in Your Fingertips</span>
            </div> */}
            <div className="row mt-2 g-4 mb-5">
                {cat}
            </div>
        </div>
    )
}

export default Categories;