import SectionReveal from "./SectionReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { IconType } from "react-icons";
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaNodeJs, FaDocker, FaLinux, FaGitAlt, FaGithub, FaGitlab, FaJenkins } from "react-icons/fa";
import { SiJavascript, SiVite, SiSpringboot, SiJsonwebtokens, SiMysql, SiSupabase, SiKubernetes, SiGooglecloud } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillIcons: Record<string, IconType> = {
  React: FaReact,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: SiJavascript,
  Vite: SiVite,
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  "Node.js": FaNodeJs,
  "Authentication (JWT)": SiJsonwebtokens,
  "REST API Development": TbApi,
  MySQL: SiMysql,
  Supabase: SiSupabase,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  Linux: FaLinux,
  GitLab: FaGitlab,
  Jenkins: FaJenkins,
  GCP: SiGooglecloud,
};

const categories = [
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "JavaScript", "Vite"],
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "Authentication (JWT)", "REST API Development"],
  },
  {
    title: "Database",
    skills: ["MySQL", "Supabase"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "Kubernetes", "Linux", "GitLab", "Jenkins", "GCP"],
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
      whileHover={{ scale: 1.04, y: -5 }}
      className="p-6 rounded-lg glass-card"
    >
      <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => {
          const Icon = skillIcons[s];
          return (
            <span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md bg-secondary/50 text-muted-foreground border border-border/50">
              {Icon && <Icon size={13} />}
              {s}
            </span>
          );
        })}
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
