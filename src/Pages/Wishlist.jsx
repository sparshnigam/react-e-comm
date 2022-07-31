import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist, wishlistSelector } from '../Components/reducers/wishlistSlice';
import Footer from '../utilities/Footer';
import Header from '../utilities/Header';
import '../Components/assets/style.css';
// import { fetchCart } from '../Components/reducers/cartSlice';
import { ProductDetailsContext } from '../context/ProductDetailsContext';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const dispatch = useDispatch();
    const [productId,setProductId] = useContext(ProductDetailsContext);
    const list = useSelector((state) => wishlistSelector.selectAll(state));
    // console.log(list);
    let listProducts = null;
    if (list) {

        listProducts = list.map((element) => {
            return (
                <tr key={element.id}>
                    <th scope="row" className="border-0">
                        <div className="p-2" onClick={() => setProductId(element.id)}>
                            <Link to='/products/details'>
                                <img src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg" alt="" width="70" className="img-fluid rounded shadow-sm" />
                                <div className="ml-3 d-inline-block align-middle">
                                    <h5 className="mb-0">{element.title}</h5>
                                </div>
                            </Link>
                        </div>
                    </th>
                    <td className="text-center border-0 align-middle"><strong>${element.price}</strong></td>
                    {/* <td className="text-center border-0 align-middle"><button className='btn btn-secondary' onClick={()=>dispatch(fetchCart([1,element.id,1]))}> Add to Cart</button></td> */}
                    <td className="text-center border-0 align-middle"><a type='button' className="text-dark" onClick={()=>dispatch(removeFromWishlist(element.id))}><i className="fa fa-trash"></i></a></td>
                </tr>
            );
        })
    }

    const WishlistDetails = () => {
        return (
            <React.Fragment>
                <div className="px-4 px-lg-0 cartDetailsContainer">
                    {/* <!-- Heading --> */}
                    <div className="container text-white py-5 text-center">
                        <h1 className="display-4">Your Wishlist</h1>
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
                                                    {/* <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Cart</div>
                                                    </th> */}
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Remove</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {listProducts}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <!-- End --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
          <Header />
          <WishlistDetails />
          <Footer />
        </React.Fragment>
    );
}



export default Wishlist;