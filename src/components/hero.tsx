import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.section
      animate={{ opacity: 1 }}
      className="flex min-h-screen flex-col items-center justify-center gap-4 p-8"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-neutral-500 text-sm tracking-wide">
        Under construction
      </p>
      <p className="text-neutral-400 text-sm">
        Visit{" "}
        <a
          className="text-neutral-600 underline transition-colors hover:text-neutral-900"
          href="https://www.uitstalling.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          uitstalling.com
        </a>{" "}
        if you want to see more of me
      </p>
    </motion.section>
  );
}
