import { motion } from "framer-motion";
import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { useTTS } from "@/hooks/useTTS";

interface TTSButtonProps {
  text: string;
  className?: string;
}

const TTSButton = ({ text, className = "" }: TTSButtonProps) => {
  const { speak, isPlaying, isLoading } = useTTS();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    speak(text);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`p-2 rounded-full glass text-muted-foreground hover:text-foreground hover:bg-white/[0.08] transition-colors ${className}`}
      aria-label={isPlaying ? "Stop narration" : "Listen to content"}
      title={isPlaying ? "Stop" : "Listen"}
    >
      {isLoading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : isPlaying ? (
        <VolumeX size={16} />
      ) : (
        <Volume2 size={16} />
      )}
    </motion.button>
  );
};

export default TTSButton;
