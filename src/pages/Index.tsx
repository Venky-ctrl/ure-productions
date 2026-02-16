import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";

const services = [
  {
    title: "Photography",
    description:
      "Professional photography capturing emotions, fashion, events, and brand stories with creative direction and modern visual style.",
  },
  {
    title: "Videography",
    description:
      "Cinematic videography that transforms real moments into engaging visual stories through creative filming and seamless editing.",
  },
  {
    title: "Events",
    description:
      "Event coverage capturing live experiences through photography, videography, and storytelling that preserves every important moment.",
  },
  {
    title: "Production & Creative",
    description:
      "Creative production services including concept development, shoot execution, and visual storytelling tailored for brands, artists, and businesses.",
  },
  {
    title: "Corporate Services",
    description:
      "Corporate shoot and event coverage providing photography, videography, brand films, and marketing content that helps businesses strengthen their professional presence.",
  },
];

const featuredWorks = [
  {
    title: "Project 1",
    category: "Brand Films",
  },
  {
    title: "Project 2",
    category: "Events",
  },
  {
    title: "Project 3",
    category: "Commercial",
  },
];

export default function Index() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-border bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-editing-room.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />

        {/* Content */}
        <div className="relative z-10 container-wide px-6 md:px-12 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md p-8 md:p-12 mt-[100px] mb-[100px]"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-primary font-medium tracking-widest uppercase text-[10px] md:text-sm lg:text-sm mb-6"
            >
              CREATIVE • CINEMATIC • COLLABORATIVE
            </motion.p>

            <h1 className="font-display font-semibold text-foreground mb-6 leading-tight">
              <span className="block text-3xl md:text-4xl lg:text-5xl">
                We Don’t Just Create Visuals
                <br /> We Create Impact
              </span>
              <span className="block text-primary text-2xl md:text-3xl lg:text-4xl mt-2">
                Everything Visual. Shot, Directed,<br /> Delivered - and many more
              </span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
              From photography and cinematic videography to full-scale
              production, events, and creative execution, URE Productions
              delivers end-to-end visual services designed to capture moments,
              tell stories, and build impactful content. We work across fashion,
              brands, events, corporate, and digital platforms — handling
              everything from concept to final cut.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">Work With Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/work">Explore Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Our Services
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground">
              From Concept to Capture
            </h2>
            <div className="gold-divider mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                delay={index * 0.1}
                className="group"
              >
                <div className="glass-card p-6 h-full hover-lift cursor-pointer">
                  <h3 className="font-display text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-10">
            <Button variant="outline" size="default" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section-padding border-b border-border bg-charcoal">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Our Work
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground">
              Our Projects & Visual Stories
            </h2>
            <div className="gold-divider mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorks.map((work, index) => (
              <AnimatedSection key={work.title} delay={index * 0.15}>
                <Link to="/work" className="group block">
                  <div className="relative overflow-hidden aspect-[4/3] mb-4 image-placeholder border border-border group-hover:border-primary/50 transition-colors duration-300">
                    <span>Image</span>
                  </div>
                  <p className="text-primary text-sm font-medium tracking-wide uppercase mb-1">
                    {work.category}
                  </p>
                  <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {work.title}
                  </h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-10">
            <Button variant="outline" size="default" asChild>
              <Link to="/work">Explore Our Work</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground mb-4">
              Ready to Tell Your Story
              <span className="text-primary"> ?</span>
            </h2>
            <div className="gold-divider mt-4 mb-6" />
            <p className="text-muted-foreground text-base mb-8">
              Whether you’re a brand, business, creator, or filmmaker, we’d love
              to collaborate. Share your idea with us, or explore opportunities
              to work together at URE Productions.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
