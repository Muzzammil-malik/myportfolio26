import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart, Home, Ruler, Skull, Stethoscope } from "lucide-react";
import TTSButton from "./TTSButton";

const projects = [
  {
    title: "Dead Legends",
    description: "An AI-powered platform where you can talk to legendary historical figures, recreated using advanced prompt engineering and agentic AI.",
    icon: Skull,
    tags: ["React", "Node.js", "GenAI"],
    featured: true,
  },
  {
    title: "ClinixAI",
    description: "AI-powered medical assistant that analyzes symptoms via follow-up questions and generates structured health reports with possible causes, precautions, and recovery insights. Includes intelligent triage for serious conditions.",
    icon: Stethoscope,
    tags: ["Next.js", "Tailwind CSS", "Firebase", "OpenAI API"],
    featured: false,
  },
  {
    title: "Full Stack E-Commerce Website",
    description: "Complete frontend and backend integration with modern stack",
    icon: ShoppingCart,
    tags: ["React", "Node.js", "MongoDB"],
    featured: false,
  },
  {
    title: "Home Automation System",
    description: "Smart home control using ESP8266, IFTTT, and Google Assistant",
    icon: Home,
    tags: ["ESP8266", "IFTTT", "Adafruit IO"],
    featured: false,
  },
  {
    title: "Distance Measurement System",
    description: "Precision distance measurement using Arduino and ultrasonic sensors",
    icon: Ruler,
    tags: ["Arduino", "Ultrasonic Sensor"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="work" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Selected works and experiments
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Featured project - spans full width on mobile, 2 cols on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-2"
        >
          <div className="bento-card h-full min-h-[280px] relative overflow-hidden group cursor-pointer">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/10 via-blue-500/5 to-transparent rounded-bl-full opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400">
                  <projects[0].icon size={28} />
                </div>
                <div className="flex items-center gap-2">
                  <TTSButton text={`${projects[0].title}. ${projects[0].description}. Technologies used: ${projects[0].tags.join(', ')}`} />
                  <ExternalLink size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">{projects[0].title}</h3>
                <p className="text-muted-foreground mb-6">{projects[0].description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {projects[0].tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other projects */}
        {projects.slice(1).map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="bento-card h-full min-h-[240px] relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-80 transition-opacity" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                    <project.icon size={24} />
                  </div>
                  <div className="flex items-center gap-2">
                    <TTSButton text={`${project.title}. ${project.description}. Technologies used: ${project.tags.join(', ')}`} />
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
