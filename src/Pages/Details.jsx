import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../Components/Banner';
import ProductDetails from '../Components/ProductDetails';
import { allProductsSelector } from '../Components/reducers/allProductsSlice';
import { fetchProductByCategory, productByCategorySelector } from '../Components/reducers/productByCategorySlice';
import { ProductDetailsContext } from '../context/ProductDetailsContext';
import Footer from '../utilities/Footer';
import Header from '../utilities/Header';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}



const Details = () => {
  const [productId, setProductId] = useContext(ProductDetailsContext);
  const selectProductDetails = useSelector((state) => allProductsSelector.selectById(state, productId));
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectProductDetails.category) {
      
      dispatch(fetchProductByCategory(selectProductDetails.category));
    }
  }, [productId]);

  // const productDetails = useSelector((state) => productByCategorySelector.selectAll(state));
  // console.log(productDetails);
  const status = useSelector((state) => state);
  const RenderDetails = () => {
    if (status.productByCategory.loading) {
      return <p>Loading...</p>;
    } else {
      return (
        <React.Fragment>

          <Header />
          <Banner title="Products Details" description="Best Quality Products As Per Your Needs" />
          <ErrorBoundary>

            <ProductDetails />
          </ErrorBoundary>
          <Footer />

        </React.Fragment>
      );
    };
  };

  return (
    <RenderDetails />
  );

};

export default Details;