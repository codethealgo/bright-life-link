import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Share2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const articlesData: Record<string, { title: string; author: string; date: string; readTime: string; category: string; content: string[] }> = {
  "1": {
    title: "The Future of Telemedicine: Trends to Watch in 2026",
    author: "Dr. Sarah Chen",
    date: "February 10, 2026",
    readTime: "6 min read",
    category: "Technology",
    content: [
      "Telemedicine has evolved dramatically since its inception. What was once a niche service has become an integral part of modern healthcare delivery. As we look ahead to the rest of 2026, several key trends are poised to reshape how we think about virtual care.",
      "Artificial Intelligence is taking center stage in diagnostic support. AI-powered tools can now analyze symptoms, medical images, and patient histories to assist physicians in making more accurate diagnoses. This doesn't replace the human touch — it enhances it, giving doctors better tools to serve their patients.",
      "Wearable technology integration is another game-changer. Modern smartwatches and health monitors can now transmit real-time data directly to your healthcare provider. This continuous monitoring allows for early detection of potential issues before they become serious problems.",
      "The expansion of specialist access through telemedicine means that geographic barriers are disappearing. A patient in a rural area can now consult with a world-renowned specialist without traveling hundreds of miles. This democratization of healthcare expertise is perhaps the most impactful change we're seeing.",
      "Mental health services have seen the biggest growth in telemedicine adoption. The convenience and privacy of virtual therapy sessions have encouraged more people to seek help. Studies show that online cognitive behavioral therapy is just as effective as in-person sessions for many conditions.",
      "Looking forward, we expect to see further integration of augmented reality in medical consultations, more sophisticated remote monitoring capabilities, and an expansion of telemedicine services to cover more complex medical needs. The future of healthcare is digital, and it's more accessible than ever.",
    ],
  },
  "2": {
    title: "5 Ways to Improve Your Mental Health Today",
    author: "Dr. Maria Gonzalez",
    date: "February 8, 2026",
    readTime: "4 min read",
    category: "Mental Health",
    content: [
      "Mental health is just as important as physical health, yet many of us neglect it. The good news is that small, consistent changes can make a significant impact on your emotional well-being.",
      "First, establish a morning routine that includes 10 minutes of mindfulness. Whether it's meditation, deep breathing, or simply sitting quietly with your coffee, this time sets the tone for a calmer day.",
      "Second, move your body daily. Exercise isn't just for physical fitness — it's one of the most effective natural antidepressants available. Even a 20-minute walk can boost your mood significantly.",
      "Third, limit your screen time, especially social media. Research consistently shows a correlation between excessive social media use and increased anxiety and depression.",
      "Fourth, prioritize sleep. Create a consistent sleep schedule and aim for 7-9 hours per night. Quality sleep is foundational to mental health and emotional regulation.",
      "Fifth, don't hesitate to seek professional help. Speaking with a therapist or counselor — whether in person or via telemedicine — is a sign of strength, not weakness. Early intervention can prevent minor issues from becoming major ones.",
    ],
  },
  "3": { title: "Nutrition Myths Debunked by Our Doctors", author: "Dr. Emily Park", date: "February 5, 2026", readTime: "5 min read", category: "Nutrition", content: ["Nutrition misinformation is everywhere. Let's separate fact from fiction with evidence-based insights from our medical team.", "Myth: Carbs are bad for you. Truth: Complex carbohydrates are essential for energy and brain function. Choose whole grains over refined ones.", "Myth: You need to detox regularly. Truth: Your liver and kidneys are incredibly effective at removing toxins. Most 'detox' products are unnecessary.", "Myth: Fat makes you fat. Truth: Healthy fats from avocados, nuts, and olive oil are crucial for hormone production and nutrient absorption."] },
  "4": { title: "How Remote Patient Monitoring Saves Lives", author: "David Okonkwo", date: "February 3, 2026", readTime: "7 min read", category: "Technology", content: ["Remote patient monitoring (RPM) has emerged as one of the most impactful applications of digital health technology.", "By continuously tracking vital signs like heart rate, blood pressure, and oxygen levels, RPM systems can detect anomalies early.", "In multiple documented cases, early alerts from RPM devices have prompted timely interventions that quite literally saved patients' lives."] },
  "5": { title: "Building Healthy Habits That Actually Stick", author: "Dr. James Wilson", date: "January 30, 2026", readTime: "5 min read", category: "Wellness", content: ["Creating lasting healthy habits starts with understanding the science of behavior change.", "Start incredibly small. Instead of committing to an hour at the gym, start with 5 minutes. The key is consistency, not intensity.", "Stack new habits onto existing ones. After brushing your teeth, do 10 squats. After your morning coffee, take a short walk."] },
  "6": { title: "Preventive Care: Your Best Investment", author: "Dr. Sarah Chen", date: "January 27, 2026", readTime: "4 min read", category: "Prevention", content: ["An ounce of prevention is worth a pound of cure — and the data backs this up more than ever.", "Regular screenings and check-ups catch issues early when they're most treatable and least expensive to address.", "Investing in preventive care today can save you significant healthcare costs in the long run."] },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const article = articlesData[id || "1"];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center container-tight">
          <h1 className="text-2xl font-bold text-foreground">Article not found</h1>
          <Link to="/blog"><Button variant="outline" className="mt-4 rounded-xl">Back to Blog</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-28 md:pt-36 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium mb-4">
              {article.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15] mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-10 border-b border-border">
              <span className="font-medium text-foreground">{article.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
              <button className="ml-auto flex items-center gap-1 hover:text-foreground transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              {article.content.map((para, i) => (
                <p key={i} className="text-foreground/80 leading-relaxed text-base">{para}</p>
              ))}
            </div>
          </ScrollReveal>

          {/* Related */}
          <div className="mt-16 pt-10 border-t border-border">
            <h3 className="font-semibold text-lg text-foreground mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {Object.entries(articlesData)
                .filter(([key]) => key !== id)
                .slice(0, 2)
                .map(([key, a]) => (
                  <Link key={key} to={`/blog/${key}`}>
                    <div className="bg-card rounded-2xl p-5 card-elevated group">
                      <span className="text-xs text-primary font-medium">{a.category}</span>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mt-1 line-clamp-2 text-sm">
                        {a.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-2">{a.author} · {a.readTime}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
