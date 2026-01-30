import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 100, suffix: '+', label: 'Stat 1' },
  { value: 50, suffix: '+', label: 'Stat 2' },
  { value: 25, suffix: '+', label: 'Stat 3' },
  { value: 10, suffix: '', label: 'Stat 4' },
];

const team = [
  {
    name: 'Team Member 1',
    role: 'Role Title',
    bio: 'Brief bio description text goes here about this team member.',
  },
  {
    name: 'Team Member 2',
    role: 'Role Title',
    bio: 'Brief bio description text goes here about this team member.',
  },
  {
    name: 'Team Member 3',
    role: 'Role Title',
    bio: 'Brief bio description text goes here about this team member.',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 image-placeholder">
          <span className="text-lg">About Hero Image</span>
        </div>

        <div className="relative z-10 container-wide px-6 md:px-12 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-background/95 backdrop-blur-sm p-8 border border-border"
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

      {/* Story Section */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
                Section Label
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Section Heading
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                <p>
                  Paragraph 1 text goes here. Description about the company
                  history and background.
                </p>
                <p>
                  Paragraph 2 text goes here. More details about achievements
                  and mission.
                </p>
                <p>
                  Paragraph 3 text goes here. Future vision and commitment
                  statement.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="glass-card p-6 text-center hover-lift"
                  >
                    <div className="font-display text-2xl md:text-3xl font-semibold text-primary mb-2">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="text-muted-foreground text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.15}>
                <div className="glass-card p-6 text-center hover-lift group">
                  <div className="w-20 h-20 mx-auto mb-4 image-placeholder rounded-full border border-primary/30">
                    <span className="text-xs">Photo</span>
                  </div>
                  <h3 className="font-display text-lg font-medium text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
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
