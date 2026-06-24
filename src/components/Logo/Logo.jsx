import "./Logo.css";
import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      className="logo"
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      🎵 HARMONIX
    </motion.div>
  );
}

export default Logo;