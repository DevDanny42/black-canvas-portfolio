import SectionReveal from "./SectionReveal";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const techList = ["Node.js", "React", "TypeScript", "MySQL", "REST APIs", "Docker", "Git & GitHub"];

const About = () => (
  <section id="about" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-6">
            I am a software developer with strong knowledge of backend systems and modern web technologies. I enjoy building scalable APIs, developing web applications, and learning new technologies.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">I have experience working with:</p>
          <div className="flex flex-wrap gap-3 mb-6">
            {techList.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-md bg-secondary text-sm text-foreground border border-border"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I enjoy solving complex problems and continuously improving my development skills.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button variant="hero" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileDown size={16} /> View Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default About;
