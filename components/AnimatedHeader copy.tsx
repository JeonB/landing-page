import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function AnimatedHeader({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.h2
      ref={ref}
      className={`font-bold tracking-tight ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {text}
    </motion.h2>
  );
}
