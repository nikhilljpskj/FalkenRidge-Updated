import { Code, Cpu, Layers, Server, Zap, Box } from "lucide-react";

const techIcons = {
  "Next.js": <Zap className="w-6 h-6 mb-2 mx-auto" />,
  "React": <Code className="w-6 h-6 mb-2 mx-auto" />,
  "Tailwind CSS": <Layers className="w-6 h-6 mb-2 mx-auto" />,
  "Node.js": <Server className="w-6 h-6 mb-2 mx-auto" />,
  "PostgreSQL": <Box className="w-6 h-6 mb-2 mx-auto" />,
  "Docker": <Cpu className="w-6 h-6 mb-2 mx-auto" />,
};

const StackSection = () => {
  return (
    <div className="py-16 px-6 ">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6 tracking-tight">Our Stack</h3>
        <p className="max-w-3xl mx-auto leading-relaxed text-lg text-muted-foreground">
          We work with technologies like <span className="font-semibold text-black dark:text-white">Next.js, React, Tailwind CSS</span>, and <span className="font-semibold text-black dark:text-white">Node.js</span> to build scalable and beautiful digital products.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker"].map((tech) => (
            <div
              key={tech}
              className="rounded-2xl p-6 backdrop-blur-md border border-black/10 bg-white/5 dark:bg-black/5 text-black dark:text-white dark:border-white/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 hover:border-teal-400 dark:hover:border-teal-400"
            >
              {techIcons[tech]}
              <span className="font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackSection;
