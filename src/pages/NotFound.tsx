import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-wide px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-8xl md:text-9xl font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground mb-4">
            Scene Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            Looks like this scene didn't make the final cut. Let's get you back on set.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
