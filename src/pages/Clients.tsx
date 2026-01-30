import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';

const clients = [
  { name: 'Client 1', industry: 'Industry' },
  { name: 'Client 2', industry: 'Industry' },
  { name: 'Client 3', industry: 'Industry' },
  { name: 'Client 4', industry: 'Industry' },
  { name: 'Client 5', industry: 'Industry' },
  { name: 'Client 6', industry: 'Industry' },
  { name: 'Client 7', industry: 'Industry' },
  { name: 'Client 8', industry: 'Industry' },
];

const testimonials = [
  {
    quote: "Testimonial quote text goes here. Client feedback about the service and experience.",
    author: 'Person Name',
    role: 'Job Title',
    company: 'Company Name',
  },
  {
    quote: "Testimonial quote text goes here. Client feedback about the service and experience.",
    author: 'Person Name',
    role: 'Job Title',
    company: 'Company Name',
  },
  {
    quote: "Testimonial quote text goes here. Client feedback about the service and experience.",
    author: 'Person Name',
    role: 'Job Title',
    company: 'Company Name',
  },
];

export default function Clients() {
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
              Page Label
            </p>
            <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
              Page Heading <span className="text-primary">Highlight</span>
            </h1>
            <p className="text-muted-foreground text-base">
              Page description text goes here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-xl md:text-2xl font-medium text-foreground">
              Section Heading
            </h2>
            <div className="gold-divider mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <AnimatedSection key={client.name} delay={index * 0.05}>
                <div className="glass-card p-6 text-center hover-lift group">
                  <div className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                    {client.name}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {client.industry}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-charcoal border-b border-border">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              Section Label
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground">
              Section Heading
            </h2>
            <div className="gold-divider mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.author} delay={index * 0.15}>
                <div className="glass-card p-6 h-full flex flex-col hover-lift">
                  <span className="text-primary text-3xl mb-3">"</span>
                  <p className="text-foreground/90 text-sm leading-relaxed flex-grow mb-4">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-display text-base font-medium text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-primary text-sm">{testimonial.role}</p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.company}
                    </p>
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
