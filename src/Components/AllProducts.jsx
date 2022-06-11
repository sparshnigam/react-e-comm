import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductDetailsContext } from '../context/ProductDetailsContext';
import { allProductsSelector } from './reducers/allProductsSlice';

const AllProducts = () => {

  const [productId,setProductId] = useContext(ProductDetailsContext);



  const products = useSelector((state) => allProductsSelector.selectAll(state));
  //   console.log(products);

  const storeProducts = products.map((e) => {
    return (
      <div key={e.id} className="col-lg-3 col-md-6 mb-4 mb-lg-0" onClick={() => setProductId(e.id)}>

        <div className="rounded shadow-sm border-0"></div>
        <div className="card-body p-4">
          <Link to='/products/details'>
            <div className='img-container'>
              <img src={e.images[0]} alt="" className="img-fluid d-block mx-auto mb-3" />
            </div>

            <h5 className="text-dark">{e.title}</h5>
          </Link>
          <p className="small text-muted font-italic">{e.description}</p>
          {/* <ul className="list-inline small">
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
          </ul> */}
        </div>

      </div>
    );
  });
  // console.log(productId);
  return (
    <div className='container'>
      <h2>From the <b>Store</b></h2>
      {/* <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p> */}

      <div className="row pb-5 mb-4">
        {storeProducts}
      </div>
    </div>
  )
}

export default AllProducts;