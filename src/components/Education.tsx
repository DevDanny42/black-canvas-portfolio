import SectionReveal from "./SectionReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-10">Education</h2>
        </SectionReveal>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative pl-8 border-l border-border max-w-2xl"
        >
          <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
            <GraduationCap size={16} className="text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Bachelor of Computer Science</h3>
          <p className="text-muted-foreground text-sm mb-4">XYZ University · 2022 - 2026</p>
          <p className="text-muted-foreground text-sm mb-2">Relevant Coursework:</p>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <li>• Data Structures</li>
            <li>• Database Management Systems</li>
            <li>• Machine Learning</li>
            <li>• Software Engineering</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
