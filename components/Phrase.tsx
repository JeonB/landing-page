import { motion, MotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';

const gray = '#d3d3d3';
const black = '#000000';

interface PhraseProps {
  children: ReactNode;
  index: number;
  activeIndexValue: MotionValue<number>;
}

export default function Phrase({ children, index, activeIndexValue }: PhraseProps) {
  // 초기 상태를 activeIndexValue의 현재 값으로 설정
  const [isActive, setIsActive] = useState(() => Math.floor(activeIndexValue.get()) === index);

  useMotionValueEvent(activeIndexValue, 'change', (latest) => {
    setIsActive(Math.floor(latest) === index);
  });

  return (
    <motion.p
      className="max-w-4xl p-4 text-center text-5xl font-bold whitespace-pre-line"
      animate={{
        color: isActive ? black : gray,
        scale: isActive ? 1.1 : 1,
      }}
      transition={{
        scale: { duration: 0.2, ease: 'easeOut' },
        color: { duration: 0.05 },
      }}
    >
      {children}
    </motion.p>
  );
}
