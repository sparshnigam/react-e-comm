import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../utilities/Footer';
import Header from '../utilities/Header';

const Login = () => {

    const [user, setUser] = useState({
        phone: "",
        password: "",
        remember: false,
    });

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,//spread operator 
            [name]: value
        });
    };

    const login = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/login', user, { withCredentials: true })
            .then(
                res => {
                    if (res.data.message) {
                        e.target.reset();
                        setUser({
                            phone: "",
                            password: "",
                            remember: false,
                        })
                        console.log(res.data.message);
                    }
                }
            ).catch(
                (AxiosError) => {
                    console.log(AxiosError.response.data.errors);
                }
            )
    }

    return (
        <React.Fragment>
            <Header />
            {/* <!-- Section: Design Block --> */}
            <section className="background-radial-gradient overflow-hidden">


                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                                Login<br />
                                {/* <span style={{ color: "hsl(218, 81%, 75%)" }}>new here</span> */}
                            </h1>
                            <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                                Get access to your Orders, Wishlist and Recommendations
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form onSubmit={login.bind(this)}>
                                        {/* <!-- Phone input --> */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example2">Email or mobile number</label>
                                            <input type="text" id="form3Example2" className="form-control" placeholder='Mobile number' name='phone' value={user.phone} onChange={handleChange} required />
                                        </div>

                                        {/* <!-- Email input --> */}
                                        {/* <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3">Email address (optional)</label>
                                            <input type="email" id="form3Example3" className="form-control" placeholder='Email address' />
                                        </div> */}

                                        {/* <!-- Password input --> */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4">Password</label>
                                            <input type="password" id="form3Example4" className="form-control" name='password' placeholder='Password' value={user.password} onChange={handleChange} required />
                                        </div>

                                        {/* <!-- Checkbox --> */}
                                        <div className="form-check d-flex justify-content-start mb-4">
                                            <input className="form-check-input me-2" type="checkbox" value={!user.remember} onClick={handleChange} id="form2Example33" name='remember' />
                                            <label className="form-check-label" htmlFor="form2Example33">
                                                Keep me signed in.
                                            </label>
                                        </div>

                                        {/* <!-- Submit button --> */}
                                        <button type="submit" className="btn btn-primary btn-block mb-4">
                                            Login
                                        </button>
                                        <div className="row">
                                            <p>New Here? <Link to='/signup' className='btn-link'>Sign-up</Link> </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Design Block --> */}
            <Footer />
        </React.Fragment>
    );
}

export default Login;