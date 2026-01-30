import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "@/components/AnimatedSection";
import { toast } from "sonner";

const contactInfo = [
  {
    title: "Email",
    value: "email@example.com",
    href: "mailto:email@example.com",
  },
  {
    title: "Phone",
    value: "+0 (000) 000-000",
    href: "tel:+0000000000",
  },
  {
    title: "Address",
    value: "Street Address\nCity, State 00000",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(
      "Thank you for reaching out! We'll get back to you within 24 hours.",
    );
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
              GET IN TOUCH
            </p>
            <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
              Let's Bring your vision to{" "}
              <span className="text-primary">Life</span>
            </h1>
            <p className="text-muted-foreground text-base">
              Whether you’re a brand, business, creator, or collaborator — we’d
              love to hear from you. Share your idea, requirement, or proposal,
              and our team will get back to you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-4">
              {contactInfo.map((info, index) => (
                <AnimatedSection key={info.title} delay={index * 0.1}>
                  <a
                    href={info.href}
                    className="glass-card p-5 hover-lift group block"
                  >
                    <h3 className="font-display text-base font-medium text-primary mb-1">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground text-sm whitespace-pre-line group-hover:text-foreground transition-colors duration-300">
                      {info.value}
                    </p>
                  </a>
                </AnimatedSection>
              ))}

              <AnimatedSection delay={0.3}>
                <div className="glass-card p-5">
                  <h3 className="font-display text-base font-medium text-primary mb-3">
                    Working Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Monday - Friday
                      </span>
                      <span className="text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">
                        10:00 AM - 4:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="glass-card p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold text-foreground mb-5">
                  Project Details
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-background border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="bg-background border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Company / Organization
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="bg-background border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full h-10 px-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      >
                        <option value="">Select a type</option>
                        <option value="type1">Brand / Commercial Shoot</option>
                        <option value="type2">Photography</option>
                        <option value="type3">
                          Cinematography / Videography
                        </option>
                        <option value="type4">Event Coverage</option>
                        <option value="type5">
                          Social Media / Reels Content
                        </option>
                        <option value="type6">
                          Model / Influencer Collaboration
                        </option>
                        <option value="type7">Creative Partnership</option>
                        <option value="type8">Customized package</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Tell Us About Your Project *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Share the details of your project, vision, timeline, and any other relevant information..."
                      rows={5}
                      className="bg-background border-border focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Send Message →"}
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
