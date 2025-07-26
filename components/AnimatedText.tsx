import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type MotionTag = keyof typeof motion;

interface AnimatedTextProps {
  text: string;
  el?: MotionTag;
  className?: string;
  stagger?: number;
  once?: boolean;
}

export default function AnimatedText({ text, el = 'p', className, stagger = 0.02, once = true }: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  const defaultAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: stagger } },
  };

  const MotionWrapper = motion[el] as React.ElementType;

  return (
    <MotionWrapper
      className={className}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={defaultAnimation}
    >
      <span className="sr-only">{text}</span>
      <motion.span aria-hidden>
        {text.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </MotionWrapper>
  );
}
