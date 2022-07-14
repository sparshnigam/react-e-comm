import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../utilities/Footer';
import Header from '../utilities/Header';

const SignUp = () => {

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,//spread operator 
      [name]: value
    })
  };

  const register = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/register", user, {withCredentials: true})
    .then(res=>{
      let value = res.data.token;
      // let expires = new Date(Date.now() + 60000);
      // document.cookie = "e-comm=" + value + ";expires=" + expires + "; path=/";
      // console.log(value);
      // localStorage.setItem('e-comm',value);
      if(res.data.message){
        window.location.href = '/login';
      }
    })
    .catch((AxiosError)=>{
      // let err = AxiosError.response.data.code === 11000? 'Duplicate Entery: '+AxiosError.response.data.keyPattern : '';
      console.log(AxiosError.response.data.errors);
    });

    // console.log("req send");
    // console.log(res);
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
                Looks like you're <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>new here</span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                Sign up with your mobile number or mobile number and email both to get started
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form action='#' onSubmit={register}>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    {/* <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="form3Example1">Ypur name</label>
                          <input type="text" id="form3Example1" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" />
                          <label className="form-label" htmlFor="form3Example2">Last name</label>
                        </div>
                      </div>
                    </div> */}

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1">Your name</label>
                      <input type="text" id="form3Example1" className="form-control" placeholder='First and last name' name='name' value={user.name} onChange={handleChange} required />
                    </div>

                    {/* <!-- Phone input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example2">Mobile number</label>
                      <input type="tel" id="form3Example2" className="form-control" placeholder='Mobile number' name='phone' value={user.phone} onChange={handleChange} required />
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                      <input type="email" id="form3Example3" className="form-control" placeholder='Email address' name='email' value={user.email} onChange={handleChange} required />
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                      <input type="password" id="form3Example4" className="form-control" placeholder='At least 6 characters' name='password' value={user.password} onChange={handleChange} required />
                    </div>

                    {/* <!-- Checkbox --> */}
                    <div className="form-check d-flex justify-content-start mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="true" id="form2Example33" required />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Accept <a href='#' className='btn-link'>Terms of Use</a> and <a href='#' className='btn-link'>Privacy Policy</a>.
                      </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>
                    <div className="row">
                      <p>Already have an account? <Link to='/login' className='btn-link'>Log in</Link> </p>
                    </div>
                    {/* <!-- Register buttons --> */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="bi bi-facebook"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="bi bi-google"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="bi bi-twitter"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="bi bi-github"></i>
                      </button>
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

export default SignUp;