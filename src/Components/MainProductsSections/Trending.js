import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductDetailsContext } from '../../context/ProductDetailsContext';
import { TrendingProductsContext } from '../../context/TrendingProductsContext';

const Trending = () => {
	const products = useContext(TrendingProductsContext);
	const [productId, setProductId] = useContext(ProductDetailsContext);
	const PR1 = products.slice(0, 4).map((e) => {
		return (
			<div key={e.id} className="col-sm-3" onClick={() => setProductId(e.id)}>
				<div className="thumb-wrapper">
					<Link to='/products/details'>
						<div className="img-box">
							<img src={e.images[0]} className="img-fluid" alt="" />
						</div>
					</Link>
					<div className="thumb-content">
						<h4>{e.title.charAt(0) + e.title.slice(1).toLowerCase()}</h4>
						<p className="item-price">{e.price} $</p>
						<div className="star-rating">
							<ul className="list-inline">
								<li className="list-inline-item"><i className="fa fa-star"></i></li>
								<li className="list-inline-item"><i className="fa fa-star"></i></li>
								<li className="list-inline-item"><i className="fa fa-star"></i></li>
								<li className="list-inline-item"><i className="fa fa-star"></i></li>
								<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
							</ul>
						</div>
						<a href="#" className="btn btn-primary">Add to Cart</a>
					</div>
				</div>
			</div>
		)
	});
	const PR2 = products.slice(4, 8).map((e) => {
		return (
			<div key={e.id} className="col-sm-3" onClick={() => setProductId(e.id)}>
				<div className="thumb-wrapper">
					<Link to='/products/details'>
						<div className="img-box">
							<img src={e.images[0]} className="img-fluid" alt="" />
						</div>
					</Link>
					<div className="thumb-content">
						<h4>{e.title.charAt(0) + e.title.slice(1).toLowerCase()}</h4>
						<p className="item-price">{e.price} $</p>
						<div className="star-rating">
							<ul className="list-inline">
								<li className="list-inline-item"><i className="fa fa-star"></i></li>
								<li className="list-inline-item"><i className="fa fa-star"></i></li>
								<li className="list-inline-item"><i className="fa fa-star"></i></li>
								<li className="list-inline-item"><i className="fa fa-star"></i></li>
								<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
							</ul>
						</div>
						<a href="#" className="btn btn-primary">Add to Cart</a>
					</div>
				</div>
			</div>
		)
	});
	const PR3 = products.slice(8, 12).map((e) => {
		return (
			<div key={e.id} className="col-sm-3" onClick={() => setProductId(e.id)}>
				<div className="thumb-wrapper">
					<Link to='/products/details'>
						<div className="img-box">
							<img src={e.images[0]} className="img-fluid" alt="" />
						</div>
					</Link>
					<div className="thumb-content">
						<h4>{e.title.charAt(0) + e.title.slice(1).toLowerCase()}</h4>
						<p className="item-price">{e.price} $</p>
						<div className="star-rating">
							<ul className="list-inline">
								<li className="list-inline-item"><i className="fa fa-star"></i></li>
								<li className="list-inline-item"><i className="fa fa-star"></i></li>
								<li className="list-inline-item"><i className="fa fa-star"></i></li>
								<li className="list-inline-item"><i className="fa fa-star"></i></li>
								<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
							</ul>
						</div>
						<a href="#" className="btn btn-primary">Add to Cart</a>
					</div>
				</div>
			</div>
		)
	});
	// console.log(PR1);
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h2>Trending <b>Products</b></h2>
					<div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
						{/* <!-- Carousel indicators --> */}

						{/* <!-- Wrapper for carousel items --> */}
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="row">
									{PR1}
								</div>
							</div>
							<div className="carousel-item">
								<div className="row">
									{PR2}
								</div>
							</div>
							<div className="carousel-item">
								<div className="row">
									{PR3}
								</div>
							</div>
						</div>
						{/* <!-- Carousel controls --> */}
						<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
							<i className="fa fa-angle-left"></i>
						</a>
						<a className="carousel-control-next" href="#myCarousel" data-slide="next">
							<i className="fa fa-angle-right"></i>
						</a>
						{/* <ol className="carousel-indicators trending-slider">
				<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
			</ol>    */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Trending;