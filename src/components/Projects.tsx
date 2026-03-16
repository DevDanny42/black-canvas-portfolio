import SectionReveal from "./SectionReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe, Server, Code2, FileCode, Database, FileSpreadsheet, BrainCircuit, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { LucideIcon } from "lucide-react";

const techIcons: Record<string, LucideIcon> = {
  "React": Code2,
  "Node.js": Server,
  "MySQL": Database,
  "TypeScript": FileCode,
  "ExcelJS": FileSpreadsheet,
  "JavaScript": FileCode,
  "Python": Code2,
  "Scikit-learn": BrainCircuit,
  "Pandas": BarChart3,
};

const projects = [
  {
    title: "Garage Management System",
    description: "A web-based application designed to manage garage operations including vehicle service tracking, billing, and customer management.",
    tech: ["React", "Node.js", "MySQL", "TypeScript"],
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    liveUrl: "",
  },
  {
    title: "Bank Management App",
    description: "A simple application that stores and manages bank account data with features like add, search, delete, and download records in Excel.",
    tech: ["Node.js", "ExcelJS", "JavaScript"],
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    liveUrl: "",
  },
  {
    title: "Machine Learning Model",
    description: "Developed a machine learning model to analyze data and predict outcomes using classification algorithms.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    liveUrl: "",
  },
];

const ProjectCard = ({ title, description, tech, videoUrl, liveUrl, index }: typeof projects[0] & { index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.04, y: -5 }}
      className="p-6 rounded-lg glass-card group"
    >
      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gradient transition-colors">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      <TooltipProvider delayDuration={100}>
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => {
            const Icon = techIcons[t];
            return (
              <Tooltip key={t}>
                <TooltipTrigger asChild>
                  <motion.span
                    whileHover={{ scale: 1.08 }}
                    className="px-2 py-1 text-xs rounded bg-secondary/50 text-muted-foreground cursor-default"
                  >
                    {t}
                  </motion.span>
                </TooltipTrigger>
                {Icon && (
                  <TooltipContent
                    side="top"
                    className="flex flex-col items-center gap-1.5 px-4 py-3 bg-card border border-border"
                  >
                    <Icon size={28} className="text-foreground" />
                    <span className="text-xs text-muted-foreground">{t}</span>
                  </TooltipContent>
                )}
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
      <div className="mt-4 rounded-lg overflow-hidden border border-border/20">
        <video
          className="w-full h-auto rounded-lg"
          controls
          muted
          preload="metadata"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mt-4 flex gap-3">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Button variant="heroOutline" size="sm" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} /> GitHub
            </a>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Button variant="hero" size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Globe size={14} /> View Live
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
      </SectionReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
