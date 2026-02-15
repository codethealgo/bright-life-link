import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl">MediConnect</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Modern telemedicine connecting you with trusted healthcare professionals from the comfort of your home.
            </p>
            <div className="flex items-center gap-1 text-sm opacity-60">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 fill-current text-destructive" />
              <span>for better healthcare</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">Services</h4>
            <ul className="space-y-3">
              {["Online Consultation", "Mental Health", "Prescriptions", "Specialist Care", "Remote Monitoring"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Phone className="w-4 h-4" /> (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Mail className="w-4 h-4" /> hello@mediconnect.com
              </li>
              <li className="flex items-start gap-2 text-sm opacity-70">
                <MapPin className="w-4 h-4 mt-0.5" /> 123 Health St, Medical City, MC 10001
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-50">© 2026 MediConnect. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm opacity-50 hover:opacity-80 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-sm opacity-50 hover:opacity-80 transition-opacity">Terms of Service</a>
            <a href="#" className="text-sm opacity-50 hover:opacity-80 transition-opacity">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
