import "../public/css/style.css";
import "../public/css/bootstrap.min.css";
import "../public/css/DentalSolutions.css";

export default function Footer() {
  return (
     <footer className="footer-section py-5 mt-5">

            <div className="container">

                <div className="row g-4">

                    {/* <!-- Newsletter --> */}
                    <div className="col-lg-4">
                        <h6 className="fw-bold">Subscribe to our
                            Newsletter</h6>
                        <p className="text-muted small">
                            Duis aute irure dolor in reprehenderit
                            in voluptate
                            velit esse cillum dolore eu fugiat
                            nulla.
                        </p>

                        <form className="newsletter-box d-flex">
                            <input type="email" className="form-control"
                                placeholder="Enter your email"/>
                            <button
                                className="btn btn-primary ms-2 px-4">Subscribe</button>
                        </form>
                    </div>

                    {/* <!-- Menu --> */}
                    <div className="col-lg-2">
                        <h6 className="fw-bold mb-3">Menu</h6>

                        <ul className="footer-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="Whyus.html">Why Us
                                    ?</a></li>
                            <li><a
                                    href="service.html">Services</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a
                                    href="Pricing.html">Pricing</a></li>
                            <li><a
                                    href="DentalSolutions.html">Dental
                                    Solutions</a></li>
                        </ul>
                    </div>

                    {/* <!-- Utility Pages --> */}
                    <div className="col-lg-3">
                        <h6 className="fw-bold mb-3">Utility Pages</h6>

                        <ul className="footer-links">
                            <li><a href="#">Styleguide</a></li>
                            <li><a href="#">Password
                                    Protected</a></li>
                            <li><a href="#">404 Not Found</a></li>
                            <li><a href="#">Start Here</a></li>
                            <li><a href="#">Licenses</a></li>
                            <li><a href="#">Changelog</a></li>
                        </ul>
                    </div>

                    {/* <!-- Contact --> */}
                    <div className="col-lg-3">
                        <h6 className="fw-bold mb-3">Contact</h6>

                        <ul className="footer-contact">

                            <li>
                                <i className="bi bi-envelope"></i>
                                contact@dentist.com
                            </li>

                            <li>
                                <i className="bi bi-telephone"></i>
                                +970 598 536 488
                            </li>

                            <li>
                                <i className="bi bi-geo-alt"></i>
                                Al-Remal — Khaled Bin Al-Waleed<br/>
                                Gaza, palestine
                            </li>

                        </ul>
                    </div>

                </div>

                <hr className="my-4"/>

                {/* <!-- Bottom Bar --> */}
                <div
                    className="d-flex justify-content-between align-items-center flex-wrap">

                    <div
                        className="d-flex align-items-center gap-2 logo">
                        <i className="fa-solid fa-tooth"></i>
                        <strong> Prime Dental</strong>
                    </div>

                    <small className="text-muted">
                        Copyright © Prime Dental — Designed by BRIX Templates —
                        Powered by Webflow
                        <br/>
                        <p className="text-center"> Developed by <a target="_blank" href="https://github.com/farahabuassi17">Farah Abuassi</a> • Distributed by <a target="_blank" href="https://themewagon.com">ThemeWagon</a></p>
                    </small>

                    <div className="social-icons d-flex gap-2">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-youtube"></i>
                        <i className="bi bi-linkedin"></i>
                    </div>

                </div>

            </div>

        </footer>
  );
}