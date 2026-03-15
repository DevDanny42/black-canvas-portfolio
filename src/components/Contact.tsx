import { useState } from "react";
import SectionReveal from "./SectionReveal";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send, Phone, Instagram, Code } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Message sent! (Demo only)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-muted-foreground transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-muted-foreground transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-muted-foreground transition-colors resize-none"
              />
              <Button variant="hero" size="lg" type="submit">
                <Send size={16} /> Send Message
              </Button>
            </form>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={20} />
                <a href="mailto:dayesh@example.com" className="hover:text-foreground transition-colors">dayesh@example.com</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Github size={20} />
                <a href="https://github.com/dayeshlate" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">github.com/dayeshlate</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Linkedin size={20} />
                <a href="https://linkedin.com/in/dayeshlate" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">linkedin.com/in/dayeshlate</a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Contact;
