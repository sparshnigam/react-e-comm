import React from 'react'

export const Carousel = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            {/* <div className="carousel-indicators"><button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                className="active" aria-label="Slide 1" aria-current="true"></button><button type="button"
                    data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className=""></button><button
                        type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
            </div> */}
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000"><img
                    src="https://source.unsplash.com/random/1920x1080/?products=1" className="d-block w-100" alt="..."/>
                    {/* <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div> */}
                </div>
                <div className="carousel-item" data-bs-interval="2000"><img
                    src="https://source.unsplash.com/random/1920x1080/?products=2" className="d-block w-100" alt="..."/>
                    {/* <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div> */}
                </div>
                <div className="carousel-item"><img src="https://source.unsplash.com/random/1920x1080/?products=3" className="d-block w-100"
                    alt="..."/>
                    {/* <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div> */}
                </div>
            </div><button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span
                    className="visually-hidden">Previous</span></button><button className="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleDark" data-bs-slide="next"><span className="carousel-control-next-icon"
                            aria-hidden="true"></span><span className="visually-hidden">Next</span></button>
        </div>
    )
}
