import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Video, Brain, Pill, Stethoscope, Activity, HeartPulse, ChevronRight, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const servicesList = [
  { icon: Video, title: "Online Consultation", desc: "Connect face-to-face with certified physicians via HD video calls. Available 24/7 with average wait times under 5 minutes.", features: ["24/7 availability", "HD video quality", "Instant prescriptions", "Follow-up care"] },
  { icon: Brain, title: "Mental Health Support", desc: "Professional therapy and counseling sessions with licensed psychiatrists and psychologists. Confidential and compassionate care.", features: ["Individual therapy", "Couples counseling", "Anxiety & depression", "Stress management"] },
  { icon: Pill, title: "Prescription Services", desc: "Get prescriptions sent directly to your pharmacy. Our doctors review your needs and prescribe appropriate medication.", features: ["E-prescriptions", "Pharmacy integration", "Refill management", "Drug interaction checks"] },
  { icon: Stethoscope, title: "Specialist Appointments", desc: "Access 50+ medical specialties including cardiology, dermatology, neurology, and more.", features: ["50+ specialties", "Second opinions", "Referral coordination", "Expert care"] },
  { icon: Activity, title: "Remote Monitoring", desc: "Track your vitals and health metrics with connected devices. Your doctor monitors your progress in real-time.", features: ["Vital tracking", "Real-time alerts", "Trend analysis", "Wearable integration"] },
  { icon: HeartPulse, title: "Chronic Care Management", desc: "Long-term care plans for chronic conditions with regular check-ins and treatment optimization.", features: ["Diabetes management", "Hypertension care", "Asthma support", "Custom care plans"] },
];

const faqs = [
  { q: "Is telemedicine as effective as in-person visits?", a: "For many conditions, telemedicine is equally effective. Studies show that telemedicine consultations result in the same quality of care for routine visits, follow-ups, and many acute conditions." },
  { q: "What do I need for a video consultation?", a: "You'll need a device with a camera and microphone (smartphone, tablet, or computer), a stable internet connection, and a quiet private space." },
  { q: "Are consultations covered by insurance?", a: "Most major insurance providers cover telemedicine visits. We also offer affordable self-pay options starting at $29 per consultation." },
  { q: "How quickly can I see a doctor?", a: "Our average wait time is under 5 minutes for general consultations. Specialist appointments can typically be booked within 24-48 hours." },
  { q: "Is my information secure?", a: "Absolutely. We are fully HIPAA compliant and use end-to-end encryption for all video calls and data transmission. Your privacy is our top priority." },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-tight text-center">
          <ScrollReveal>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1]">
              Complete care, <span className="text-gradient">anywhere</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From routine check-ups to specialist care, our comprehensive telemedicine services cover all your healthcare needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {servicesList.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-8 card-elevated h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="section-padding hero-gradient">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Telemedicine</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                The smarter way to healthcare
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Save Time", desc: "No commute, no waiting rooms. See a doctor in minutes.", value: "5 min" },
              { title: "Save Money", desc: "Up to 70% lower costs compared to ER or urgent care visits.", value: "70%" },
              { title: "Better Outcomes", desc: "Regular check-ins lead to better health management.", value: "94%" },
            ].map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 card-elevated text-center">
                  <p className="text-4xl font-extrabold text-gradient mb-2">{b.value}</p>
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">FAQ</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                Frequently asked questions
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-2xl px-6 border-none card-elevated">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding hero-gradient">
        <div className="container-wide">
          <ScrollReveal>
            <div className="bg-foreground rounded-3xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to experience modern healthcare?
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Book your first consultation today and see why thousands trust MediConnect.
              </p>
              <Link to="/contact">
                <Button size="lg" className="rounded-xl px-8 gap-2 shadow-lg">
                  Book Appointment <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
