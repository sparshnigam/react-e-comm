import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductDetailsContext } from '../context/ProductDetailsContext';
import './assets/style.css';
import { addToCartSelector, removeFromCart, updateCart } from './reducers/addToCartSlice';
// import { allProductsSelector } from './reducers/allProductsSlice';
// import { cartSelector } from './reducers/cartSlice';

const CartDetails = () => {

    const dispatch = useDispatch();
    const [productId,setProductId] = useContext(ProductDetailsContext);
    // const cart = useSelector((state) => state.cart.data);
    const cart = useSelector((state) => addToCartSelector.selectAll(state));
    let subTotal = 0;
    let cartProducts = null;
    if (cart.length != 0) {

        cartProducts = cart.map((element) => {
            let price = element.price * element.quantity;
            subTotal += price;
            return (
                <tr key={element.id}>
                    <th scope="row" className="border-0">
                        <div className="p-2" onClick={() => setProductId(element.id)}>
                        <Link to='/products/details'>
                            <img src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg" alt="" width="70" className="img-fluid rounded shadow-sm" />
                            <div className="ml-3 d-inline-block align-middle">
                                <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{element.title}</a></h5>
                                {/* <span className="text-muted font-weight-normal font-italic d-block">Category: Watches</span> */}
                            </div>
                        </Link>
                        </div>
                    </th>
                    <td className="text-center border-0 align-middle"><strong>${element.price}</strong></td>
                    <td className="text-center border-0 align-middle"><strong>
                    <i className="bi bi-dash-square-fill add" onClick={()=>element.quantity > 1? dispatch(updateCart({id: element.id, changes : {quantity: element.quantity-1}})) : ''}></i><span className='count'>{element.quantity}</span><i className="bi bi-plus-square-fill add" onClick={()=>dispatch(updateCart({id: element.id, changes : {quantity: element.quantity+1}}))}></i>
                    </strong></td>
                    <td className="text-center border-0 align-middle"><a href="#" className="text-dark" onClick={()=>dispatch(removeFromCart(element.id))}><i className="fa fa-trash"></i></a></td>
                </tr>
            );
        })
    }
    let discount = subTotal/10;
    return (
        <React.Fragment>
            <div className="px-4 px-lg-0 cartDetailsContainer">
                {/* <!-- Heading --> */}
                <div className="container text-white py-5 text-center">
                    <h1 className="display-4">Your Shopping Cart</h1>
                </div>
                {/* <!-- End --> */}

                <div className="pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                                {/* <!-- Shopping cart table --> */}
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="p-2 px-3 text-uppercase">Product</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Price</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Quantity</div>
                                                </th>
                                                <th scope="col" className="border-0 bg-light">
                                                    <div className="py-2 text-uppercase">Remove</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartProducts}
                                        </tbody>
                                    </table>
                                </div>
                                {/* <!-- End --> */}
                            </div>
                        </div>

                        {cartProducts && <div className="row py-5 p-4 bg-white rounded shadow-sm">
                            <div className="col-lg-6">
                                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
                                <div className="p-4">
                                    <p className="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                                    <div className="input-group mb-4 border rounded-pill p-2">
                                        <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0" />
                                        <div className="input-group-append border-0">
                                            <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2"></i>Apply coupon</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
                                <div className="p-4">
                                    <p className="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
                                    <textarea name="" cols="30" rows="2" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                                <div className="p-4">
                                    <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                                    <ul className="list-unstyled mb-4">
                                        <li className="col-sm-12 d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>${subTotal}</strong></li>

                                        <li className="col-sm-12 d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Discount</strong><strong>-${discount}</strong></li>
                                        <li className="col-sm-12 d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
                                        {/* <li className="col-sm-12 d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li> */}
                                        <li className="col-sm-12 d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Grand Total</strong>
                                            <h5 className="font-weight-bold">${(subTotal - discount) + 10}</h5>
                                        </li>
                                    </ul><a href="#" className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default CartDetails;