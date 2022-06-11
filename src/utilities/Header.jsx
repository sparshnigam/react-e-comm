import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { categoriesSelector } from '../Components/reducers/categoriesSlice';
import { ProductByCategoryContext } from '../context/ProductByCategoryContext';
import { ProductDetailsContext } from '../context/ProductDetailsContext';
import './style.css';
const style = {
    backgroundColor: "#e3f2fd"
}
const Header = () => {
    const [productId,setProductId] = useContext(ProductDetailsContext);
    const [productCategory,setProductCategory] = useContext(ProductByCategoryContext);
    const [search, setSearch] = useState();
    const [record, setRecord] = useState([{ title: "" }]);

    const searchFilter = async (event) => {
        const searchWord = event.target.value;
        setSearch(searchWord);
        await axios.get(`https://dummyjson.com/products/search?q=${search}`).then((response) => {
            // setRecord(response.data.products)
            // console.log(record);
            // console.log(response.data.products);
            if (search === "") {
                setRecord([{ title: "" }]);
            } else {

                setRecord(response.data.products);
                // console.log(response.data.products)
            }
        }, (error) => {
            console.log(error);
        });

    }
    let searchResponse = [];
    if (search) {
        if (record) {
            // console.log(record);
            searchResponse = record.map((e) => {
                return <li key={e.id} className="searchItems" onClick={() => setProductId(e.id)}><Link className="dropdown-item mdb-dropdownLink-1" to='/products/details'>{e.title}</Link></li>;
            });
        } else {
            searchResponse = "";
        }
    }
    const clearsearch = () => {
        setRecord([{ title: "" }]);
        setSearch("");
    };

    const productCategories = useSelector((state) => categoriesSelector.selectAll(state));
    const categories = productCategories.map((e) => {
        return <div key={e} className='col-4' onClick={() => setProductCategory(e)}><li><Link className="dropdown-item" to='/category'>{e.charAt(0).toUpperCase() + e.slice(1)}</Link></li></div>;
    });

    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={style}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">E-Commerce</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/products" className="nav-link">Products</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: "#e3f2fd", border: "none", minWidth: "35rem" }}>
                                <div className='row'>

                                    {categories}
                                </div>
                            </ul>
                        </li>
                    </ul>
                    <div className="searchGroup me-2">
                        {search ? (
                            <i className="bi bi-x-lg searchAction" onClick={clearsearch} ></i>
                        ) : (
                            <i className="bi bi-search searchAction" ></i>
                        )}
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" value={search} onChange={searchFilter} />

                        {search && <div className="dropdown-menu dropdown-primary show searchData">
                            {searchResponse.length != 0 ? searchResponse : "No result found"}
                        </div>}

                    </div>
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-primary me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                    <div className="text-end ml-2 cartContainer">
                        <Link to='/myCart'>
                            <i className="bi bi-cart3"></i>
                            <span>Cart</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header