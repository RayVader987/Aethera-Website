import "./Footer.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footerTop">

        <h2>Aethera</h2>

        <p>
          Turning Sustainability Into Habit
        </p>

      </div>

      <div className="footerMiddle">

        <div className="footerItem">

          <FaEnvelope />

          <span>contact@aethera.com</span>

        </div>

        <div className="footerItem">

          <FaLinkedin />

          <span>linkedin.com/company/aethera</span>

        </div>

      </div>

      <div className="footerBottom">

        © 2026 Aethera. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;