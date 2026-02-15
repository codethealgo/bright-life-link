import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "general", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-tight text-center">
          <ScrollReveal>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contact Us</span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1]">
              We're here to <span className="text-gradient">help</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or need to book an appointment? Reach out to our friendly team — we're available 24/7.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {submitted ? (
                  <div className="bg-card rounded-2xl p-10 card-elevated text-center">
                    <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h2>
                    <p className="text-muted-foreground mb-6">We'll get back to you within 24 hours. For urgent matters, call us directly.</p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-xl">Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 card-elevated space-y-5">
                    <h2 className="text-xl font-bold text-foreground mb-2">Send us a message</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                        <input
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">Inquiry Type</label>
                        <select
                          value={form.type}
                          onChange={(e) => setForm({ ...form, type: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="appointment">Book Appointment</option>
                          <option value="support">Technical Support</option>
                          <option value="billing">Billing Question</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <Button type="submit" size="lg" className="rounded-xl px-8 gap-2 shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                      <Send className="w-4 h-4" /> Send Message
                    </Button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-card rounded-2xl p-6 card-elevated space-y-6">
                  <h3 className="font-semibold text-foreground">Get in touch</h3>
                  {[
                    { icon: Phone, label: "Phone", value: "(555) 123-4567", sub: "Available 24/7" },
                    { icon: Mail, label: "Email", value: "hello@mediconnect.com", sub: "Response within 24hrs" },
                    { icon: MapPin, label: "Office", value: "123 Health St, Medical City", sub: "MC 10001" },
                    { icon: Clock, label: "Hours", value: "24/7 Telehealth", sub: "Office: Mon–Fri, 9–5" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                        <p className="text-xs text-muted-foreground">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-card rounded-2xl p-6 card-elevated">
                  <h3 className="font-semibold text-foreground mb-4">Support Options</h3>
                  <div className="space-y-3">
                    {[
                      { icon: MessageCircle, label: "Live Chat", desc: "Chat with our team now" },
                      { icon: Phone, label: "Call Us", desc: "Speak with a representative" },
                      { icon: Mail, label: "Email Support", desc: "Get help via email" },
                    ].map((opt) => (
                      <div key={opt.label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors cursor-pointer">
                        <opt.icon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{opt.label}</p>
                          <p className="text-xs text-muted-foreground">{opt.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Map Placeholder */}
              <ScrollReveal delay={0.3}>
                <div className="bg-card rounded-2xl overflow-hidden card-elevated h-48 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-primary/30 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Map Location</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
