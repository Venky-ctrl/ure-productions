import { useLocation } from "react-router-dom";

const FloatingOffer = () => {
  const location = useLocation();

  if (location.pathname === "/contact") return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 pb-5 z-50">
      <a
        href="/contact"
        className="bg-primary text-primary-foreground px-6 py-3 rounded-full 
        font-semibold shadow-lg hover:scale-105 transition-all duration-300 floating-glow
        animate-pulse premium-glow"
      >
        Book a Shoot & Get 20% Off
      </a>
    </div>
  );
};

export default FloatingOffer;
