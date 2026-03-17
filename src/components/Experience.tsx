import SectionReveal from "./SectionReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, MapPin, Users, ExternalLink } from "lucide-react";

const hackathons = [
  {
    name: "HackTheCode 2025",
    venue: "IIT Bombay, Mumbai",
    organizer: "TechFest Committee",
    certificateLink: "#",
  },
  {
    name: "CodeStorm National",
    venue: "BITS Pilani, Rajasthan",
    organizer: "ACM Student Chapter",
    certificateLink: "#",
  },
  {
    name: "InnovateMH Hackathon",
    venue: "COEP, Pune",
    organizer: "Maharashtra IT Department",
    certificateLink: "#",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-10">Finalist at Hackathons</h2>
        </SectionReveal>
        <div ref={ref} className="space-y-12">
          {hackathons.map((hack, i) => (
            <motion.div
              key={hack.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative pl-8 border-l border-border max-w-2xl"
            >
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                <Trophy size={16} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{hack.name}</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground text-sm mb-4">
                <span className="flex items-center gap-1"><MapPin size={14} /> {hack.venue}</span>
                <span className="flex items-center gap-1"><Users size={14} /> {hack.organizer}</span>
              </div>
              <a
                href={hack.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                <ExternalLink size={14} /> View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
