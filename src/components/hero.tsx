import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1>Aaron</h1>
    </motion.section>
  );
}
