import { NavLink } from "react-router";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-content/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Ekjot Singh
            </h2>

            <p className="text-base-content/70">
              Building modern web experiences with React, Tailwind CSS, and
              DaisyUI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-base-content/70">
              <li>
                <NavLink to="/" className="hover:text-primary duration-300">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className="hover:text-primary duration-300">
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/service" className="hover:text-primary duration-300">
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className="hover:text-primary duration-300">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Contact
            </h3>

            <div className="space-y-2 text-base-content/70">
              <p>📧 ekjot@example.com</p>
              <p>📍 Punjab, India</p>
              <p>📞 +91 XXXXX XXXXX</p>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Follow Me
            </h3>

            <div className="flex gap-4 text-2xl">
              <a
                href="#"
                className="hover:text-primary duration-300 hover:-translate-y-1"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="hover:text-primary duration-300 hover:-translate-y-1"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="hover:text-primary duration-300 hover:-translate-y-1"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="hover:text-primary duration-300 hover:-translate-y-1"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-base-content/10 mt-10 pt-6 text-center text-base-content/60">
          © {new Date().getFullYear()} Ekjot Singh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;