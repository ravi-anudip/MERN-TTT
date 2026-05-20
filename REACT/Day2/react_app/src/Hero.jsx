import "../public/css/style.css";
import "../public/css/bootstrap.min.css";
import "../public/css/DentalSolutions.css";

export default function Hero() {
  return (
    <section className="hero-modern">
            <div className="container">
                <div className="row align-items-center">

                    {/* <!-- LEFT TEXT --> */}
                    <div className="col-md-6">

                        <h1 className="hero-title">
                            Professional & Modern Dental Care
                        </h1>

                        <p className="hero-desc">
                            High-quality dental treatments, advanced technology,
                            and a caring
                            medical team — helping you achieve a healthy,
                            confident smile.
                        </p>

                        <div className="d-flex gap-3 mt-3">
                            <a className="btn hero-btn px-4">View
                                Services</a>
                        </div>

                        {/* <!-- Rating Box --> */}
                        <div className="hero-rating mt-4">
                            <span className="rating-value">4.9★</span>
                            <span className="rating-text">Patient Satisfaction
                                Rating</span>
                        </div>

                    </div>

                    {/* <!-- RIGHT IMAGE --> */}
                    <div className="col-md-6 position-relative">

                        {/* <!-- Doctor or Smile Image --> */}
                        <img src="img/heroimg.png"
                            className="hero-img" />

                    </div>

                </div>
            </div>
        </section>
  );
}