import SectionReveal from "./SectionReveal";
import { GraduationCap } from "lucide-react";

const Education = () => (
  <section id="education" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <h2 className="text-3xl font-bold mb-10">Education</h2>
        <div className="relative pl-8 border-l border-border max-w-2xl">
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-secondary border border-border flex items-center justify-center">
            <GraduationCap size={12} className="text-muted-foreground" />
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
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default Education;
