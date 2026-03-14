import SectionReveal from "./SectionReveal";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Server, Code2, FileCode, Database, Globe, Container, GitBranch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const techData: { name: string; icon: LucideIcon }[] = [
  { name: "Node.js", icon: Server },
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: FileCode },
  { name: "MySQL", icon: Database },
  { name: "REST APIs", icon: Globe },
  { name: "Docker", icon: Container },
  { name: "Git & GitHub", icon: GitBranch },
];

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
          <TooltipProvider delayDuration={100}>
            <div className="flex flex-wrap gap-3 mb-6">
              {techData.map((t) => (
                <Tooltip key={t.name}>
                  <TooltipTrigger asChild>
                    <motion.span
                      whileHover={{ scale: 1.08 }}
                      className="px-4 py-2 rounded-md bg-secondary text-sm text-foreground border border-border cursor-default"
                    >
                      {t.name}
                    </motion.span>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="flex flex-col items-center gap-1.5 px-4 py-3 bg-card border border-border"
                  >
                    <t.icon size={28} className="text-foreground" />
                    <span className="text-xs text-muted-foreground">{t.name}</span>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
          <p className="text-muted-foreground leading-relaxed">
            I enjoy solving complex problems and continuously improving my development skills.
          </p>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default About;
