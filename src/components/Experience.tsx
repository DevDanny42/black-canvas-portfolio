import SectionReveal from "./SectionReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, MapPin, Users, ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

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
          <div className="flex items-center gap-3 mb-10">
            <Trophy size={28} className="text-primary" />
            <h2 className="text-3xl font-bold">Finalist at Hackathons</h2>
          </div>
        </SectionReveal>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hack, i) => (
            <motion.div
              key={hack.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="h-full flex flex-col justify-between hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <Trophy size={24} className="text-primary" />
                    </div>
                    <Badge variant="secondary">Finalist</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{hack.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{hack.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} />
                      <span>{hack.organizer}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild className="mt-2 w-fit">
                    <a href={hack.certificateLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} /> View Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
