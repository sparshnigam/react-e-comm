import React from 'react';

const Banner = ({ title, description }) => {
    // console.log(title);
    return (
        <React.Fragment>
            <div className='banner-container'>
                <div className='banner-overlay'></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center">
                                <h1 className="text-black">{title}</h1>
                                <p className="text-capitalize mb-0 text-lg text-black">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Banner;