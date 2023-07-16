import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="d-md-flex">
          <div className="clo1 w-25 me-3">
            <p>
              Book mart is a leading book shop in Bangladesh. We offer thousands
              of islamic, general and academic books at a discounted price. We
              provide good packaging with low shipping cost all over the
              Bangladesh.
            </p>
          </div>
          <div className="clo1 me-3">
            <h5>Popular</h5>
            <p>জেনারেল ও অ্যাকাডেমিক বইড.</p>
            <p> খোন্দকার আব্দুল্লাহ জাহাঙ্গীর এর বই</p>
            <p>আরিফ আজাদ এর বই</p>
          </div>

          <div className="col3">
            <p>Contact</p>
            <p>Head Office: House 310, Road 21 Mohakhali DOHS, Dhaka-1206</p>
            <p>Phone: 017-9992-5050 096-7877-1365</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
