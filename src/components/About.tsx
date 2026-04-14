import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    period: "2023 – 2025",
    degree: "Intermediate",
    institution: "MS Junior College, Masab Tank",
    grade: "93.3%",
  },
  {
    period: "2025 – 2029",
    degree: "B.Tech (Pursuing)",
    institution: "Muffakham Jah College of Engineering & Technology (MJCET)",
    grade: "9.5 SGPA",
  },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          My academic journey and learning path
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card p-6 group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <GraduationCap size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.degree}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.institution}
                </p>
                <p className="text-sm font-medium text-cyan-400 mt-1">
                  Grade: {item.grade}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
