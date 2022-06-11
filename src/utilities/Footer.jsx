import React from 'react'

const style = {
    backgroundColor: "#e3f2fd",
    // position: "absolute",
    // bottom: "0",
    // width: "100%",
    paddingBoottom: "0 !important",
}

const Footer = () => {
    return (

            <div className="container-fluid" style={style}>
                <footer className="pt-5" style={style}>
                    <div className="row">
                        <div className="col-2">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>

                        <div className="col-2">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>

                        <div className="col-2">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                            </ul>
                        </div>

                        <div className="col-4 offset-1">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div className="d-flex w-100 gap-2">
                                    <label className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between py-4 border-top">
                        <p>© 2022 E-commerce, All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
                            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                        </ul>
                    </div>
                </footer>
            </div>

    )
}

export default Footer