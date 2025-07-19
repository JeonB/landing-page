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
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(activeIndexValue, 'change', (latest) => {
    setIsActive(Math.round(latest) === index);
  });
  //   const ref = useRef<HTMLParagraphElement>(null);
  //   const { scrollYProgress } = useScroll({
  //     target: ref,
  //     offset: ['start 0.7', 'start 0.2'], // 문구 상단이 뷰포트 70% 지점에 닿으면 시작, 20% 지점에 닿으면 종료
  //   });
  //   const [color, setColor] = useState(gray);
  //   // scrollYProgress 값의 변화를 감지합니다.
  //   useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  //     // 스크롤 진행률이 50%를 넘으면 색상을 검은색으로, 그렇지 않으면 회색으로 즉시 변경합니다.
  //     setColor(latest > 0 && latest < 1 ? black : gray);
  //   });

  // scrollYProgress (0~1) 값에 따라 색상과 투명도를 변경합니다.
  //   const color = useTransform(scrollYProgress, [0, 1], ['#d3d3d3', '#000000']); // 회색 -> 흰색
  //   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]); // 0.8배 -> 1배 (살짝 커지는 효과)

  return (
    <motion.p
      className="z-10 max-w-2xl p-4 text-center text-4xl font-bold"
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
