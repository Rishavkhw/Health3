import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-white px-25 md:px-15 pb-6 text-sm">
      <div className="grid md:grid-cols-4 gap-10 px-10">
        {/* Company Info */}
        <div className=" text-teal-400">
          <h2 className="text-xl font-bold mb-4">Cogent</h2>
          <p>
            Creating, Innovating and Implementing tech-based solutions that are
            built for the purpose to meet the needs of independent healthcare
            practices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4  text-teal-400">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/home" className="hover:text-teal-400 transition">Meet Cogent</a></li>
            <li><a href="/home" className="hover:text-teal-400 transition">Electronic Medical Record</a></li>
            <li><a href="/contact" className="hover:text-teal-400 transition">Online Doctor Appointment</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4  text-teal-400">Stay in Touch</h3>
          <p>Corporate Office: M&S Tower, Pulchowk Road, Lalitpur, Nepal</p>
          <p className="mt-2">Office: (+977-1-5425261)</p>
          <p>Customer Support: 9802079200 / 9802079201 / +97714217474</p>
          <p className="mt-2">info@cogenthealth.com.np</p>
        </div>

        {/* Social + Credits */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-teal-400">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-teal-400"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="text-teal-400"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="text-teal-400"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          <p>© 2025 <span className="text-teal-400">Cogent Health.</span> All Rights Reserved.</p>
          <p>Privacy Policy</p>
          <p className="mt-2">Subsidiary of <span className="font-semibold">F1Soft Group</span></p>
          <p>Powered by <span className="font-semibold">Cogent Health Pvt. Ltd.</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
