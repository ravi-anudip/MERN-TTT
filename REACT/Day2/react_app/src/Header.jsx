import "../public/css/style.css";
import "../public/css/bootstrap.min.css";
import "../public/css/DentalSolutions.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar main-nav fixed-top py-3 navbar-expand-lg">
        <div className="container d-flex justify-content-between align-items-center">

                    {/* <!-- Logo --> */}
          <div className="d-flex align-items-center gap-2 brand-logo">
            <i className="fa-solid fa-tooth"></i>            
            <h4 className="fw-bold m-0 Logo">Prime Dental</h4>
          </div>
                  {/* <!-- Desktop Menu (visible on large screens only) --> */}    
          <ul className="nav d-none d-lg-flex">
            <li className="nav-item"><a className="nav-link "
                            href="index.html">Home</a></li>
            <li className="nav-item"><a className="nav-link "
                            href="Whyus.html">Why Us</a></li>
            <li className="nav-item"><a className="nav-link "
                            href="service.html">Services</a></li>
            <li className="nav-item"><a className="nav-link "
                            href="team.html">Team</a></li>
            <li className="nav-item"><a className="nav-link"
                            href="Pricing.html">Pricing</a></li>
            <li className="nav-item"><a className="nav-link"
                            href="DentalSolutions.html">Solutions</a></li>
          </ul>

          <a href="#" className="btn px-4 d-none d-lg-block">Book Now </a>

                  {/* <!-- Burger Button (Mobile Only) --> */}
          <button className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobileMenu">
            <i className="bi bi-list fs-1"></i>
          </button>
        </div>
      </nav>

            {/* <!-- Offcanvas Mobile Menu --> */}
      <div className="offcanvas offcanvas-end" id="mobileMenu"
                style={{ backgroundColor: "#8a7aff" }}>

        <div className="offcanvas-header">
          <div className="d-flex align-items-center gap-2 brand-logo">
            <i className="fa-solid fa-tooth"></i>
            <h4 className="fw-bold m-0">Prime Dental</h4>
          </div>

          <button className="btn-close"
                        data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">

          <ul className="navbar-nav gap-2">

              <li><a className="nav-link" href="index.html">Home</a></li>
              <li><a className="nav-link" href="Whyus.html">Why
                      Us</a></li>
              <li><a className="nav-link"
                      href="service.html">Services</a></li>
              <li><a className="nav-link" href="team.html">Team</a></li>
              <li><a className="nav-link"
                      href="Pricing.html">Pricing</a></li>
              <li><a className="nav-link"
                      href="DentalSolutions.html">Solutions</a></li>

          </ul>

          <a className="btn w-100 mt-3">Book Now</a>

        </div>

      </div>
    </header>
  );
}