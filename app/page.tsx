'use client';
import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Phrase from '@/components/Phrase';
import CardSection from '@/components/Card';

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  const phrases = [
    '나만의 맞춤 헬스케어 서비스',
    '언제, 어디서나, 모두가 활용가능한 나만의 개인 건강 플랫폼',
    '건강한 삶을 위한 나만의 관리 방법',
  ];

  const phrasesContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: phrasesScrollYProgress } = useScroll({
    target: phrasesContainerRef,
    offset: ['start center', 'end center'],
  });

  const activeIndexValue = useTransform(phrasesScrollYProgress, [0, 1], [0, phrases.length - 1]);

  return (
    <>
      <motion.section ref={ref} className="flex h-screen items-center justify-center" style={{ y }}>
        <motion.div style={{ scale, opacity }} className="absolute h-full w-full">
          <Image src="/images/health1.jpg" alt="health1" fill style={{ objectFit: 'cover' }} priority />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="z-10 text-6xl font-bold text-white"
        >
          나를 위한 건강 관리
        </motion.h1>
      </motion.section>
      <div ref={phrasesContainerRef} className="flex min-h-screen flex-col items-center justify-center">
        {phrases.map((phrase, index) => (
          <Phrase key={index} index={index} activeIndexValue={activeIndexValue}>
            {phrase}
          </Phrase>
        ))}
      </div>

      <CardSection />
    </>
  );
}
