import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Clock, Video, Stethoscope, Brain, Pill, UserCheck, Activity, ChevronRight, Quote, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: Video, title: "Video Consultations", desc: "Face-to-face with doctors from your home, 24/7 availability." },
  { icon: Brain, title: "Mental Health", desc: "Professional therapy and counseling sessions online." },
  { icon: Pill, title: "E-Prescriptions", desc: "Get prescriptions sent directly to your pharmacy." },
  { icon: Stethoscope, title: "Specialist Care", desc: "Access to 50+ medical specialties worldwide." },
  { icon: Activity, title: "Remote Monitoring", desc: "Track vitals and health metrics in real-time." },
  { icon: UserCheck, title: "Second Opinions", desc: "Expert medical opinions from top specialists." },
];

const steps = [
  { num: "01", title: "Create Account", desc: "Sign up in under 2 minutes with our simple registration." },
  { num: "02", title: "Choose a Doctor", desc: "Browse specialists and find the right doctor for your needs." },
  { num: "03", title: "Book Appointment", desc: "Select a convenient time slot that works for you." },
  { num: "04", title: "Get Treated", desc: "Connect via video call and receive your treatment plan." },
];

const doctors = [
  { name: "Dr. Sarah Chen", specialty: "Cardiologist", rating: 4.9, reviews: 234, image: "SC" },
  { name: "Dr. James Wilson", specialty: "Neurologist", rating: 4.8, reviews: 189, image: "JW" },
  { name: "Dr. Emily Park", specialty: "Dermatologist", rating: 4.9, reviews: 312, image: "EP" },
  { name: "Dr. Michael Torres", specialty: "Psychiatrist", rating: 4.7, reviews: 156, image: "MT" },
];

const testimonials = [
  { name: "Amanda Richardson", text: "MediConnect made seeing a specialist so easy. I got a diagnosis and treatment plan within a day. Truly life-changing.", rating: 5 },
  { name: "Robert Kim", text: "The mental health support has been incredible. My therapist is amazing and the video quality is perfect every time.", rating: 5 },
  { name: "Lisa Moreno", text: "As a busy parent, being able to consult a pediatrician from home is invaluable. Highly recommend to all families.", rating: 5 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div>
              <div className="animate-slide-up">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Shield className="w-4 h-4" /> HIPAA Compliant Telehealth
                </span>
              </div>
              <h1 className="animate-slide-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6">
                Healthcare at your
                <span className="text-gradient"> fingertips</span>
              </h1>
              <p className="animate-slide-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
                Connect with board-certified doctors instantly. Get diagnosed, treated, and prescribed — all from the comfort of your home.
              </p>
              <div className="animate-slide-up-delay-3 flex flex-col sm:flex-row gap-3">
                <Link to="/contact">
                  <Button size="lg" className="rounded-xl px-8 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 gap-2">
                    Book Appointment <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="rounded-xl px-8 text-base border-border hover:bg-secondary transition-all duration-300">
                    View Services
                  </Button>
                </Link>
              </div>

              {/* Trust */}
              <div className="animate-slide-up-delay-3 mt-10 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {["SC", "JW", "EP", "MT"].map((initials, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary/10 border-2 border-card flex items-center justify-center text-xs font-semibold text-primary">
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-rating text-rating" />
                    ))}
                    <span className="ml-1 font-semibold text-sm">4.9</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Trusted by 50,000+ patients</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-slide-up-delay-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt="Doctor providing telemedicine consultation" className="w-full h-auto object-cover" />
              </div>
              {/* Floating cards */}
              <div className="absolute -left-4 top-1/4 bg-card rounded-2xl p-4 shadow-lg card-elevated animate-float hidden md:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Appointment Confirmed</p>
                  <p className="text-xs text-muted-foreground">Dr. Chen — Today 3:00 PM</p>
                </div>
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-card rounded-2xl p-4 shadow-lg card-elevated animate-float-delay hidden md:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Avg. Wait Time</p>
                  <p className="text-xs text-muted-foreground">Under 5 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                Comprehensive healthcare solutions
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                From routine check-ups to specialist consultations, we provide a full range of telemedicine services.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-6 card-elevated group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding hero-gradient">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">How It Works</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                Get started in 4 simple steps
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="text-center relative">
                  <span className="text-6xl font-extrabold text-primary/10">{step.num}</span>
                  <h3 className="mt-2 font-semibold text-lg text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Doctors</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                Meet our top specialists
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Board-certified physicians with years of experience and thousands of satisfied patients.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, i) => (
              <ScrollReveal key={doc.name} delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-6 card-elevated text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                    {doc.image}
                  </div>
                  <h3 className="font-semibold text-foreground">{doc.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{doc.specialty}</p>
                  <div className="flex items-center justify-center gap-1 mt-3">
                    <Star className="w-4 h-4 fill-rating text-rating" />
                    <span className="text-sm font-medium text-foreground">{doc.rating}</span>
                    <span className="text-sm text-muted-foreground">({doc.reviews})</span>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 rounded-xl w-full text-sm">
                    View Profile
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding hero-gradient">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                  Healthcare reimagined for the modern world
                </h2>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                  We combine cutting-edge technology with compassionate care to deliver the best telemedicine experience.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "24/7 Availability", desc: "Access healthcare anytime, anywhere" },
                { title: "Board Certified", desc: "All doctors verified and certified" },
                { title: "Instant Access", desc: "Average wait under 5 minutes" },
                { title: "Secure & Private", desc: "HIPAA compliant platform" },
                { title: "Affordable Care", desc: "Starting at $29 per consultation" },
                { title: "Follow-up Care", desc: "Continuous monitoring & support" },
              ].map((b, i) => (
                <ScrollReveal key={b.title} delay={i * 0.08}>
                  <div className="bg-card rounded-2xl p-5 card-elevated">
                    <CheckCircle2 className="w-5 h-5 text-success mb-2" />
                    <h4 className="font-semibold text-foreground text-sm">{b.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{b.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                What our patients say
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 card-elevated">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-foreground text-sm leading-relaxed mb-4">{t.text}</p>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-rating text-rating" />
                    ))}
                  </div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Verified Patient</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="bg-foreground rounded-3xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to take control of your health?
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Join thousands of patients already benefiting from modern telemedicine. Your first consultation is on us.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="rounded-xl px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg gap-2">
                    Get Started Free <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="rounded-xl px-8 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
