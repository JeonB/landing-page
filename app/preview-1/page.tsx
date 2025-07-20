'use client';
import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Phrase from '@/components/Phrase';
import CardSection from '@/components/Card';

export default function Page() {
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
    '언제, 어디서나, 모두가 활용가능한\n 나만의 개인 건강 플랫폼',
    '건강한 삶을 위한 나만의 관리 방법',
  ];

  // 스티키 효과를 위한 컨테이너 ref
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: phrasesScrollYProgress } = useScroll({
    target: stickyContainerRef,
    offset: ['start start', 'end end'], // 컨테이너가 화면에 완전히 들어와서 나갈 때까지 추적
  });

  // scrollYProgress(0~1)를 활성 인덱스(0~3)로 변환
  const activeIndexValue = useTransform(phrasesScrollYProgress, [0, 1], [0, phrases.length]);
  return (
    <>
      <motion.section ref={ref} className="flex h-screen items-center justify-center" style={{ y }}>
        <motion.div style={{ scale, opacity }} className="absolute h-full w-full">
          <Image src="/images/health1.jpg" alt="health1" fill style={{ objectFit: 'cover' }} priority />
        </motion.div>

        <section className="flex h-screen items-center justify-center bg-white">
          <h1 className="animate-focus-in-contract-bck text-4xl font-bold text-white">
            국내 대표 건강기록 통합관리 플랫폼, inPHR
          </h1>
        </section>
      </motion.section>
      {/* 스크롤 공간을 제공하는 tall container */}
      <div ref={stickyContainerRef} className="relative h-[200vh]">
        {/* 화면에 고정될 sticky container */}
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {/* 문구들을 중앙에 배치하기 위한 div */}
          <div>
            {phrases.map((phrase, index) => (
              <Phrase key={index} index={index} activeIndexValue={activeIndexValue}>
                {phrase}
              </Phrase>
            ))}
          </div>
        </div>
      </div>

      <CardSection />
    </>
  );
}
