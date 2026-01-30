import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";

const categories = [
  "All",
  "Brand Films",
  "Commercial",
  "Events",
  "Portraits & Fashion",
  "Creative Films",
];

const works = [
  {
    id: 1,
    title: "Project 1",
    category: "Brand Films",
    description: "Project description text goes here.",
    client: "Client Name",
    year: "2024",
  },
  {
    id: 2,
    title: "Project 2",
    category: "Commercial",
    description: "Project description text goes here.",
    client: "Client Name",
    year: "2024",
  },
  {
    id: 3,
    title: "Project 3",
    category: "Events",
    description: "Project description text goes here.",
    client: "Client Name",
    year: "2024",
  },
  {
    id: 4,
    title: "Project 4",
    category: "Creative Films",
    description: "Project description text goes here.",
    client: "Client Name",
    year: "2023",
  },
  {
    id: 5,
    title: "Project 5",
    category: "Portraits & Fashion",
    description: "Project description text goes here.",
    client: "Client Name",
    year: "2023",
  },
  {
    id: 6,
    title: "Project 6",
    category: "Events",
    description: "Project description text goes here.",
    client: "Client Name",
    year: "2023",
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

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
              OUR WORK
            </p>
            <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
              Our Projects & Visual
              <span className="text-primary"> Stories</span>
            </h1>
            <p className="text-muted-foreground text-base">
              A curated selection of our photography, cinematography, and
              creative projects. From brand campaigns to event coverage and
              cinematic storytelling, each project reflects our approach,
              attention to detail, and passion for visual excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Portfolio */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          {/* Category Filter */}
          <AnimatedSection className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_hsl(42_65%_50%_/_0.25)]"
                    : "bg-background text-muted-foreground border-border hover:text-foreground hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </AnimatedSection>

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[4/3] mb-4 image-placeholder border border-border group-hover:border-primary/50 transition-all duration-300">
                    <span>Image</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-primary text-sm font-medium tracking-wide">
                      {work.category}
                    </p>
                    <p className="text-muted-foreground text-sm">{work.year}</p>
                  </div>
                  <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {work.client}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
