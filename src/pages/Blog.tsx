import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const categories = ["All", "Wellness", "Mental Health", "Technology", "Nutrition", "Prevention"];

const articles = [
  { id: "1", title: "The Future of Telemedicine: Trends to Watch in 2026", excerpt: "From AI diagnostics to wearable integration, discover the innovations shaping virtual healthcare.", category: "Technology", author: "Dr. Sarah Chen", readTime: "6 min", date: "Feb 10, 2026", featured: true },
  { id: "2", title: "5 Ways to Improve Your Mental Health Today", excerpt: "Simple, science-backed strategies to boost your emotional well-being starting right now.", category: "Mental Health", author: "Dr. Maria Gonzalez", readTime: "4 min", date: "Feb 8, 2026", featured: false },
  { id: "3", title: "Nutrition Myths Debunked by Our Doctors", excerpt: "Separating fact from fiction in the world of diet and nutrition advice.", category: "Nutrition", author: "Dr. Emily Park", readTime: "5 min", date: "Feb 5, 2026", featured: false },
  { id: "4", title: "How Remote Patient Monitoring Saves Lives", excerpt: "Real stories of how connected devices caught critical health issues early.", category: "Technology", author: "David Okonkwo", readTime: "7 min", date: "Feb 3, 2026", featured: false },
  { id: "5", title: "Building Healthy Habits That Actually Stick", excerpt: "A doctor's guide to creating sustainable routines for long-term wellness.", category: "Wellness", author: "Dr. James Wilson", readTime: "5 min", date: "Jan 30, 2026", featured: false },
  { id: "6", title: "Preventive Care: Your Best Investment", excerpt: "Why regular check-ups and screenings are worth more than any treatment.", category: "Prevention", author: "Dr. Sarah Chen", readTime: "4 min", date: "Jan 27, 2026", featured: false },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter((a) => {
    const matchesCat = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featured = articles.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured || activeCategory !== "All");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-tight text-center">
          <ScrollReveal>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Blog</span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1]">
              Health <span className="text-gradient">insights</span> & stories
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert articles, wellness tips, and the latest in telemedicine — written by our doctors and healthcare team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-background pt-12 pb-4">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {activeCategory === "All" && featured && (
        <section className="bg-background pt-8 pb-4">
          <div className="container-wide">
            <ScrollReveal>
              <Link to={`/blog/${featured.id}`}>
                <div className="bg-card rounded-2xl p-8 md:p-10 card-elevated group cursor-pointer">
                  <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium mb-4">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-4 max-w-2xl">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{featured.author}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                    <span>·</span>
                    <span>{featured.date}</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-padding bg-background !pt-8">
        <div className="container-wide">
          {rest.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article, i) => (
                <ScrollReveal key={article.id} delay={i * 0.06}>
                  <Link to={`/blog/${article.id}`}>
                    <div className="bg-card rounded-2xl overflow-hidden card-elevated group cursor-pointer h-full flex flex-col">
                      <div className="h-40 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                        <span className="text-4xl font-extrabold text-primary/10">{article.category.slice(0, 2).toUpperCase()}</span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <span className="text-xs font-medium text-primary mb-2">{article.category}</span>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{article.author}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
