import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";

const Experience = () => {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Professional involvement and leadership roles
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-2xl mx-auto"
      >
        <div className="glass-card p-8 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full" />
          
          <div className="relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400">
                <Users size={28} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Orators Club, MJCET
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Tech Core Member</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>Actively involved in technical initiatives and events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>Collaboration, tech learning, and innovation-focused role</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
