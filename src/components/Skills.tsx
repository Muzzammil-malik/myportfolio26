import { motion } from "framer-motion";

const skills = [
  "C Programming",
  "Python Programming",
  "Frontend Development",
  "GenAI",
  "Arduino",
  "IoT",
  "Web Design",
  "Graphic Design",
  "Prompt Engineering",
  "Next.js",
  "AutoCAD",
  "Vibe Coding",
  "AI Tools",
];

const Skills = () => {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Technologies and tools I work with
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              type: "spring",
              stiffness: 200,
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="skill-badge cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
