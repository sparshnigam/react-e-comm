import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductDetailsContext } from '../context/ProductDetailsContext';
import { allProductsSelector } from './reducers/allProductsSlice';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { productByCategorySelector } from './reducers/productByCategorySlice';
import { Link } from 'react-router-dom';
import './assets/style.css';
import { fetchCart } from './reducers/cartSlice';

const ProductDetails = () => {

  const dispatch = useDispatch();

  const [productId, setProductId] = useContext(ProductDetailsContext);

  const selectProductDetails = useSelector((state) => allProductsSelector.selectById(state, productId));

  const [quantity, setQuantity] = useState(1);
  const handleClick = (e) => {
    // console.log(e, quantity);
    dispatch(fetchCart([1,e,quantity]));
  }


  const productDetails = useSelector((state) => productByCategorySelector.selectAll(state));
  const similarproducts = productDetails.map((element) => {
    return (<div className="card border p-1" style={{ width: "9rem", marginRight: "3px", }} key={element.id} onClick={() => setProductId(element.id)}>
      <Link to='/products/details'>
        <img src={element.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title">${element.price}</h6>
        </div>
      </Link>
    </div>);
  })

  return (
    <React.Fragment>

      <div className="container-fluid mt-2 mb-3">
        <div className="row no-gutters">
          <div className="col-md-5 pr-2">
            <div className="card">
              <div className="demo">
                <Carousel interval="1000" transitionTime="500" showArrows={false} showStatus={false} showIndicators={false}>

                  {selectProductDetails.images.map((e) => {
                    return (
                      <div key={e}>
                        <img src={e} />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
            <div className="card mt-2">
              <h6>Reviews</h6>
              <div className="d-flex flex-row">
                <span className="ml-1 font-weight-bold">{selectProductDetails.rating}</span><div className="stars"> <i className="fa fa-star"></i>   </div>
              </div>
              <hr />
              <div className="badges"> <span className="badge bg-dark ">All (230)</span> <span className="badge bg-dark "> <i className="fa fa-image"></i> 23 </span> <span className="badge bg-dark "> <i className="fa fa-comments-o"></i> 23 </span> <span className="badge bg-warning"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <span className="ml-1">2,123</span> </span> </div>
              <hr />
              <div className="comment-section">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/o5uMfKo.jpg" className="rounded-circle profile-image" />
                    <div className="d-flex flex-column ml-1 comment-profile">
                      <div className="comment-ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="username">Lori Benneth</span>
                    </div>
                  </div>
                  <div className="date"> <span className="text-muted">2 May</span> </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/tmdHXOY.jpg" className="rounded-circle profile-image" />
                    <div className="d-flex flex-column ml-1 comment-profile">
                      <div className="comment-ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="username">Timona Simaung</span>
                    </div>
                  </div>
                  <div className="date"> <span className="text-muted">12 May</span> </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card">
              <div className="d-flex flex-row align-items-center">

                <div className="about">
                  <p className="text-muted m-0">{selectProductDetails.brand}</p>
                  <h3 className="font-weight-bold">{selectProductDetails.title}</h3>
                  <h4 className="font-weight-bold">${selectProductDetails.price}</h4>
                  <div className="p-ratings">
                    <span className="ml-1">{selectProductDetails.rating}</span> <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              {/* <div><span className="font-weight-bold">Color:</span><span> blue</span></div>
              <div className="my-color">
                <label className="radio">
                  <input type="radio" name="gender" value="Red" onClick={(e) => handleClick(e)} />
                  <span className="red"></span>
                </label>
                <label className="radio">
                  <input type="radio" name="gender" value="Blue" onClick={(e) => handleClick(e)} />
                  <span className="blue"></span>
                </label>
                <label className="radio">
                  <input type="radio" name="gender" value="Green" onClick={(e) => handleClick(e)} />
                  <span className="green"></span>
                </label>
                <label className="radio">
                  <input type="radio" name="gender" value="Orange" onClick={(e) => handleClick(e)} />
                  <span className="orange"></span>
                </label>
              </div> */}
              <div>
                <span><strong>Quantity: </strong></span>
                {quantity<2?<i className="bi bi-dash-square-fill subtract"></i> : <i className="bi bi-dash-square-fill add" onClick={()=>setQuantity(quantity-1)}></i>}<span className='count'>{quantity}</span><i className="bi bi-plus-square-fill add" onClick={()=>setQuantity(quantity+1)}></i>
              </div>
              <div className="buttons"> <button className="btn btn-outline-warning btn-long cart" onClick={()=> handleClick(selectProductDetails.id)}>Add to Cart</button> <button className="btn btn-warning btn-long buy">Buy it Now</button> <button className="btn btn-light wishlist"> <i className="fa fa-heart"></i> </button> </div>
              <hr />
              <div className="product-description">

                <div className="d-flex flex-row align-items-center"> <i className="fa fa-calendar-check-o"></i> <span className="ml-1">Delivery from sweden, 15-45 days</span> </div>
                <div className="mt-2"> <span className="font-weight-bold">Description</span>
                  <p>{selectProductDetails.description}</p>
                  {/* <div className="bullets">
                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Best in Quality</span> </div>
                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Anti-creak joinery</span> </div>
                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Sturdy laminate surfaces</span> </div>
                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Relocation friendly design</span> </div>
                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">High gloss, high style</span> </div>
                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Easy-access hydraulic storage</span> </div>
                  </div> */}
                </div>
                {/* <div className="mt-2"> <span className="font-weight-bold">Store</span> </div>
                <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/N2fYgvD.png" className="rounded-circle store-image" />
                  <div className="d-flex flex-column ml-1 comment-profile">
                    <div className="comment-ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="username">Rare Boutique</span> <small className="followers">25K Followers</small>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="card mt-2"> <span>Similar items:</span>
              <div className="similar-products mt-2 d-flex flex-row">
                {similarproducts}
              </div>
            </div>
          </div>
        </div>
      </div>


    </React.Fragment >
  );
}

export default ProductDetails;