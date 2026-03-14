import SectionReveal from "./SectionReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-10">Experience</h2>
        </SectionReveal>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative pl-8 border-l border-border max-w-2xl"
        >
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-secondary border border-border flex items-center justify-center">
            <Briefcase size={12} className="text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Intern Software Developer</h3>
          <p className="text-muted-foreground text-sm mb-4">Tech Company (Dummy) · 2025 - Present</p>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Developed REST APIs using Node.js</li>
            <li>• Implemented authentication using JWT</li>
            <li>• Integrated MySQL database</li>
            <li>• Built backend architecture for web applications</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
