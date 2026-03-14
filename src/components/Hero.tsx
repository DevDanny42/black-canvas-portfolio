import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-muted-foreground text-sm mb-2 tracking-widest uppercase">Welcome</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-gradient">Dayesh Late</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-4">
            Full Stack Developer | Backend Developer | Problem Solver
          </p>
          <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I am a passionate software developer who enjoys building scalable applications and solving real-world problems. I specialize in backend development and modern web technologies.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button variant="hero" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              <ArrowDown size={16} /> View Projects
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              <Mail size={16} /> Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-secondary border border-border flex items-center justify-center">
            <span className="text-6xl">👨‍💻</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
