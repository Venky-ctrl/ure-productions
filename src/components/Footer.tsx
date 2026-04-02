import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";

const footerLinks = {
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/work" },
    { name: "Join URE", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Photography Services", path: "/services" },
    { name: "Videography Services", path: "/services" },
    { name: "Production & Creative Services", path: "/services" },
    { name: "Event & Corporate Services", path: "/services" },
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ure_productions/",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ureentertainments7167",
    icon: FaYoutube,
  },
  { name: "LinkedIn", href: "#", icon: FaLinkedin },
  { name: "Facebook", href: "#", icon: FaFacebook },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="https://res.cloudinary.com/dudrjp5cn/image/upload/v1769871254/Gemini_Generated_Image_kkinq5kkinq5kkin_2_w0uisv.png"
                alt="logo"
                className="w-20"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              URE Productions is a creative visual production house crafting
              cinematic stories through photography, cinematography, and
              collaborative storytelling.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-medium text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-medium text-primary mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-medium text-primary mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-foreground text-sm font-medium">
                  Address
                </span>
                <p className="text-muted-foreground text-sm mt-1">
                  Street Address Line 1<br />
                  City, State 00000
                </p>
              </li>
              <li>
                <span className="text-foreground text-sm font-medium">
                  Phone
                </span>
                <p className="mt-1">
                  <a
                    href="tel:+91 87901 10798"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    +91 87901 10798
                  </a>
                </p>
              </li>
              <li>
                <span className="text-foreground text-sm font-medium">
                  Email
                </span>
                <p className="mt-1">
                  <a
                    href="mailto:unitedproductions.info@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    unitedproductions.info@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-4">
            <div className="w-full h-[250px] rounded-md overflow-hidden border border-border hover:border-primary/50 transition">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.660268498081!2d78.47099903389439!3d17.49971250307892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910345abaab3%3A0x7d7f2b7e9cfca1ce!2sURE%20Productions!5e1!3m2!1sen!2sin!4v1775147627120!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} URE Productions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
