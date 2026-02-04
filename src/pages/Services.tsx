import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";

const services = [
  {
    title: "Photography Services",
    description:
      "Professional photography capturing emotions, fashion, events, and brand stories with creative direction and modern visual style.",
    features: [
      "Wedding & Pre-Wedding Shoots",
      "Engagement & Couple Portraits",
      "Event Photography (Private & Corporate)",
      "Fashion & Modeling Shoots",
      "Product & Brand Photography",
      "Lifestyle & Candid Photography",
      "Maternity & Baby Shoots",
    ],
    ctatext: "Lock the Frame",
  },
  {
    title: "Videography Services",
    description:
      "Cinematic videography that transforms real moments into engaging visual stories through creative filming and seamless editing.",
    features: [
      "Wedding Films & Teasers",
      "Promotional & Corporate Videos",
      "Short Films & Documentaries",
      "Music Videos",
      "Behind-The-Scenes (BTS) Shoots",
    ],
    ctatext: "Roll the Camera",
  },
  {
    title: "Production & Creative Services",
    description:
      "Creative production services including concept development, shoot execution, and visual storytelling tailored for brands, artists, and businesses.",
    features: [
      "Full Event Coverage (Photo + Video)",
      "Concept Shoots & Storyboarding",
      "Casting & Talent Management",
      "Advertising Campaign Shoots",
      "Branding & Promotional Content Creation",
      "Social Media Content Production",
    ],
    ctatext: "Direct the Vision",
  },
  {
    title: "Event & Corporate Services",
    description:
      "Event coverage capturing live experiences through photography, videography, and storytelling that preserves every important moment.",
    features: [
      "Corporate Event Coverage",
      "Conferences, Seminars & Workshops",
      "Award Functions & Launch Events",
      "Networking Events",
      "Panel Discussions & Exhibitions",
    ],
    ctatext: "Capture the Action",
  },
  {
    title: "Additional Services",
    description:
      "Service description text goes here. Brief explanation of what this service offers and its benefits.",
    features: [
      "Drone Photography & Videography",
      "Live Streaming Services",
      "Event Management Support",
      "Editing & Post-Production (Photo/Video)",
      "Album Designing & Printing",
    ],
    ctatext: "Lock the Frame",
  },
];

export default function Services() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-charcoal border-b border-border">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              OUR SERVICES
            </p>
            <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
              Creative Production & Visual
              <span className="text-primary"> Media Services</span>
            </h1>
            <p className="text-muted-foreground text-base">
              Explore our range of photography, videography, event coverage, and
              creative production services designed to help individuals, brands,
              and businesses bring their ideas and moments to life through
              impactful visual storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <div className="space-y-16">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Button variant="outline" size="default" asChild>
                      <Link to="/contact">{service.ctatext}</Link>
                    </Button>
                  </div>

                  <div
                    className={`glass-card p-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <h3 className="font-display text-lg font-medium text-primary mb-4">
                      Features List
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="text-primary">•</span>
                          <span className="text-muted-foreground text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
