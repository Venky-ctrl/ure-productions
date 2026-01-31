import { Link } from 'react-router-dom';

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
  { name: 'Social 1', href: '#' },
  { name: 'Social 2', href: '#' },
  { name: 'Social 3', href: '#' },
  { name: 'Social 4', href: '#' },
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
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  {social.name}
                </a>
              ))}
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
                    href="tel:+0000000000"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    +0 (000) 000-000
                  </a>
                </p>
              </li>
              <li>
                <span className="text-foreground text-sm font-medium">
                  Email
                </span>
                <p className="mt-1">
                  <a
                    href="mailto:email@example.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    email@example.com
                  </a>
                </p>
              </li>
            </ul>
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
