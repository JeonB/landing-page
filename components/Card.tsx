'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const content = [
  {
    category: '건강 관리',
    title: '진료실 밖에서도 \n건강관리가 이어지도록.',
    description:
      '원격의료 기반의 PHR 플랫폼으로 \n언제 어디서나 진료, 상담, 모니터링이 가능합니다. \n개방형 시스템으로 병원과 사용자의 연결을 강화합니다.',
    items: ['원격 진료', '원격 상담', '원격 모니터링'],
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
    imageUrl: '/images/doctor.jpg',
  },
  {
    category: '건강 데이터 관리',
    title: '건강 데이터의 모든 것, \n한눈에 관리되도록.',
    description:
      '분산된 의료 정보를 통합해 \n사용자 중심의 정밀의료 서비스를 제공합니다. \n질병 예방부터 건강관리까지, 하나의 플랫폼에서 가능합니다.',
    items: ['데이터 통합 관리', '의료 정보 분석', '건강 관리 솔루션'],
    bgColor: 'bg-blue-400',
    textColor: 'text-white',
    imageUrl: '/images/health2.jpg',
  },
  {
    category: '심리 건강 관리',
    title: '보이지 않는 불안을 \n미리 감지하고 돌보도록.',
    description:
      '심리 상태와 생활 패턴 데이터를 기반으로 \n공황장애와 정서불안을 예측하고 관리합니다. \n사용자의 감정 변화에 맞춘 맞춤형 케어를 실현합니다.',
    items: ['심리 상태 추적', '생활 패턴 분석', '맞춤형 케어 제공'],
    bgColor: 'bg-blue-100',
    textColor: 'text-black',
    imageUrl: '/images/mental.jpg',
  },
];

export default function CardSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={containerRef} className="relative">
      {content.map((card, index) => (
        <Card key={card.category} i={index} {...card} scrollYProgress={scrollYProgress} totalCards={content.length} />
      ))}
    </main>
  );
}

interface CardProps {
  i: number;
  category: string;
  title: string;
  description: string;
  items: string[];
  bgColor: string;
  textColor: string;
  scrollYProgress: any;
  totalCards: number;
  imageUrl: string;
}

const Card = ({
  i,
  category,
  title,
  description,
  items,
  bgColor,
  textColor,
  scrollYProgress,
  totalCards,
  imageUrl,
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  // 각 카드의 시작과 끝 지점을 계산
  const start = i / totalCards;
  const end = (i + 1) / totalCards;

  // 마지막 카드는 스케일이 줄어들지 않도록 처리
  const scale = useTransform(scrollYProgress, [start, end], [1, i === totalCards - 1 ? 1 : 0.9]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        scale,
        transformOrigin: 'top center', // 스케일의 기준점을 상단 중앙으로 설정
      }}
      className={`flex items-center justify-center ${bgColor} ${textColor}`}
    >
      <div className="grid w-full max-w-5xl grid-cols-2 items-center gap-16 p-8">
        <div className="relative h-96">
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="space-y-8 text-left">
          <div>
            <p className="mb-4 text-xl font-semibold">{category}</p>
            <h2 className="text-4xl leading-tight font-bold whitespace-pre-line">{title}</h2>
          </div>
          <p className="text-lg leading-relaxed whitespace-pre-line">{description}</p>
          {items.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-start gap-4">
              {items.map((item) => (
                <div
                  key={item}
                  className={`rounded-full border px-6 py-3 text-lg ${
                    textColor === 'text-white' ? 'border-gray-100' : 'border-gray-400'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
