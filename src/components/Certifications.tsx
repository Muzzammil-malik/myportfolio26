import { motion } from "framer-motion";
import { Award, Trophy, Cpu } from "lucide-react";

const certifications = [
  {
    title: "Data Analytics Using TerraView",
    subtitle: "State-wide Competition",
    description: "Selected among Top 20 students across Telangana",
    icon: Trophy,
    highlight: true,
  },
  {
    title: "IEEE EDS Webinar Participation",
    subtitle: "Electronics Reimagined",
    description: "Integrating Sensing, Memory, and Actuation. Organized by IEEE EDS, MJCET. Focus on emerging trends in smart electronic systems.",
    icon: Cpu,
    highlight: false,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Recognition and achievements
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className={`glass-card p-6 h-full relative overflow-hidden ${cert.highlight ? 'border-cyan-500/30' : ''}`}>
              {cert.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
              )}
              
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${cert.highlight ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400' : 'bg-cyan-500/10 text-cyan-400'}`}>
                  <cert.icon size={24} />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
                    {cert.subtitle}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
