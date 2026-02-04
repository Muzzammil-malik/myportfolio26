import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const FloatingMailButton = () => {
  const handleClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&to=hello@muzzammil.dev", "_blank");
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 flex items-center justify-center hover:shadow-cyan-500/40 transition-shadow"
      aria-label="Send email"
    >
      <Mail size={24} />
    </motion.button>
  );
};

export default FloatingMailButton;
