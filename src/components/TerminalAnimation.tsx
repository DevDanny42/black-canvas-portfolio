import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const codeLines = [
  { prompt: "~/portfolio $", command: "whoami" },
  { output: "Dayesh Late" },
  { prompt: "~/portfolio $", command: "cat skills.json" },
  { output: '{ "backend": ["Java", "Spring Boot"],' },
  { output: '  "frontend": ["React", "TypeScript"],' },
  { output: '  "tools": ["Docker", "Git", "AWS"] }' },
  { prompt: "~/portfolio $", command: "echo $STATUS" },
  { output: "🚀 Ready to build something amazing" },
  { prompt: "~/portfolio $", command: "" },
];

const TerminalAnimation = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typedChars, setTypedChars] = useState<number>(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const currentLine = codeLines[visibleLines];
  const isCommand = currentLine && "command" in currentLine;
  const commandText = isCommand ? currentLine.command : "";
  const isTypingDone = typedChars >= commandText.length;

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;

    if (isCommand && !isTypingDone) {
      const timer = setTimeout(() => setTypedChars((c) => c + 1), 60 + Math.random() * 40);
      return () => clearTimeout(timer);
    }

    if (isTypingDone) {
      const delay = isCommand && commandText.length > 0 ? 600 : 100;
      const timer = setTimeout(() => {
        setVisibleLines((l) => l + 1);
        setTypedChars(0);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, typedChars, isCommand, isTypingDone, commandText]);

  // Reset animation when complete
  useEffect(() => {
    if (visibleLines >= codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines(0);
        setTypedChars(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <div className="w-full max-w-md">
      <motion.div
        className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
          <div className="w-3 h-3 rounded-full bg-destructive/70" />
          <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
          <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
          <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
        </div>

        {/* Terminal body */}
        <div className="p-4 font-mono text-sm leading-relaxed min-h-[260px] bg-card">
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex flex-wrap">
              {"prompt" in line ? (
                <>
                  <span className="text-muted-foreground">{line.prompt}</span>
                  <span className="text-foreground ml-2">{line.command}</span>
                </>
              ) : (
                <span className="text-muted-foreground">{line.output}</span>
              )}
            </div>
          ))}

          {/* Currently typing line */}
          {visibleLines < codeLines.length && isCommand && (
            <div className="flex flex-wrap">
              <span className="text-muted-foreground">{currentLine.prompt}</span>
              <span className="text-foreground ml-2">
                {commandText.slice(0, typedChars)}
                <span
                  className={`inline-block w-2 h-4 ml-px align-middle ${
                    cursorVisible ? "bg-foreground" : "bg-transparent"
                  }`}
                  style={{ transition: "background-color 0.1s" }}
                />
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default TerminalAnimation;
