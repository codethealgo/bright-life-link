import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Award, Shield, Clock, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const timeline = [
  { year: "2019", title: "Founded", desc: "Started with a vision to make healthcare accessible to everyone." },
  { year: "2020", title: "First 10,000 Patients", desc: "Rapid growth during the pandemic proved the need for telemedicine." },
  { year: "2022", title: "50+ Specialties", desc: "Expanded to cover over 50 medical specialties worldwide." },
  { year: "2024", title: "AI Integration", desc: "Introduced AI-powered diagnostics to assist our physicians." },
  { year: "2026", title: "500K+ Patients", desc: "Serving over half a million patients with trusted care." },
];

const team = [
  { name: "Dr. Sarah Chen", role: "Chief Medical Officer", initials: "SC" },
  { name: "James Mitchell", role: "CEO & Co-founder", initials: "JM" },
  { name: "Dr. Emily Park", role: "Head of Dermatology", initials: "EP" },
  { name: "David Okonkwo", role: "CTO", initials: "DO" },
  { name: "Dr. Maria Gonzalez", role: "Head of Psychiatry", initials: "MG" },
  { name: "Lisa Thompson", role: "VP of Patient Experience", initials: "LT" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-tight text-center">
          <ScrollReveal>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1]">
              Making healthcare
              <span className="text-gradient"> human again</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We believe that quality healthcare should be accessible, affordable, and compassionate — no matter where you are.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Mission</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                  Bridging the gap between patients and healthcare
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  At MediConnect, we're driven by a simple belief: everyone deserves access to quality healthcare. We leverage technology to remove barriers — geographic, financial, and temporal — making it possible for anyone to consult with top doctors from anywhere.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our platform combines cutting-edge telemedicine technology with the human touch of compassionate care, creating a healthcare experience that's both innovative and deeply personal.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, label: "Patient-First", value: "Always" },
                  { icon: Target, label: "Accuracy Rate", value: "99.2%" },
                  { icon: Users, label: "Patients Served", value: "500K+" },
                  { icon: Clock, label: "Avg. Wait Time", value: "<5 min" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card rounded-2xl p-6 card-elevated text-center">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding hero-gradient">
        <div className="container-tight">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Journey</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                From vision to reality
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.08}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Team</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                The people behind MediConnect
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-6 card-elevated text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-primary">
                    {member.initials}
                  </div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding hero-gradient">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Trust & Safety</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Certified & compliant</h2>
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-6">
            {["HIPAA Compliant", "SOC 2 Type II", "FDA Registered", "NABP Verified", "AMA Recognized"].map((cert, i) => (
              <ScrollReveal key={cert} delay={i * 0.06}>
                <div className="bg-card rounded-2xl px-6 py-4 card-elevated flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-medium text-sm text-foreground">{cert}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="bg-foreground rounded-3xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Join us in transforming healthcare
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Experience the future of medicine. Book your first consultation today.
              </p>
              <Link to="/contact">
                <Button size="lg" className="rounded-xl px-8 gap-2 shadow-lg">
                  Book a Consultation <ChevronRight className="w-4 h-4" />
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

export default About;
