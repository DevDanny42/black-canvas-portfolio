import SectionReveal from "./SectionReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "HTML", "CSS", "Vite"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST API Development", "Authentication (JWT)"],
  },
  {
    title: "Database",
    skills: ["MySQL", "Sequelize ORM"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code"],
  },
];

const SkillCard = ({ title, skills, index }: { title: string; skills: string[]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-lg bg-card border border-border card-glow"
    >
      <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="px-3 py-1.5 text-xs rounded-md bg-secondary text-muted-foreground border border-border">
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => (
  <section id="skills" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <h2 className="text-3xl font-bold mb-10">Technical Skills</h2>
      </SectionReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <SkillCard key={cat.title} {...cat} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
