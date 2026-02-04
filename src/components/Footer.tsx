import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const socialLinks = [
  { name: "Email", icon: Mail, href: "mailto:hello@muzzammil.dev" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

const Footer = () => {
  return (
    <footer id="contact" className="section-container border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="gradient-text">Let's Connect</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-12">
          Have a project in mind or just want to chat? I'd love to hear from you.
        </p>

        <div className="flex justify-center gap-4 mb-16">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/[0.08] transition-colors"
              aria-label={link.name}
            >
              <link.icon size={20} />
            </motion.a>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 text-sm text-muted-foreground">
          <p>© 2025 Muzzammil Malik. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
