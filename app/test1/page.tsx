'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const foodImages = [
  { src: '/assets/images/와플.png', alt: '와플', className: 'absolute top-1/4 left-1/4 w-16 h-16' },
  { src: '/assets/images/치킨.png', alt: '치킨', className: 'absolute top-1/3 right-1/4 w-16 h-16' },
  { src: '/assets/images/사탕.png', alt: '사탕', className: 'absolute bottom-1/3 left-1/4 w-16 h-16' },
  { src: '/assets/images/쉐이크.png', alt: '쉐이크', className: 'absolute bottom-1/4 right-1/4 w-16 h-16' },
  { src: '/assets/images/도넛.png', alt: '도넛', className: 'absolute top-1/2 left-1/5 w-16 h-16' },
  { src: '/assets/images/피자.png', alt: '피자', className: 'absolute top-1/2 right-1/5 w-16 h-16' },
];

const decorativeIcons = [
  // 파란색 원 (고정)
  {
    type: 'div',
    style: { top: '15%', left: '80%', width: '30px', height: '30px', backgroundColor: '#3b82f6', borderRadius: '50%' },
  },
  {
    type: 'div',
    style: { top: '80%', left: '10%', width: '20px', height: '20px', backgroundColor: '#60a5fa', borderRadius: '50%' },
  },
  {
    type: 'div',
    style: { top: '50%', left: '90%', width: '15px', height: '15px', backgroundColor: '#93c5fd', borderRadius: '50%' },
  },
  {
    type: 'div',
    style: { top: '20%', left: '10%', width: '25px', height: '25px', backgroundColor: '#3b82f6', borderRadius: '50%' },
  },
  {
    type: 'div',
    style: { top: '70%', left: '85%', width: '22px', height: '22px', backgroundColor: '#60a5fa', borderRadius: '50%' },
  },

  // 아이콘 (애니메이션)
  { type: 'icon', name: 'thermometer', style: { top: '75%', right: '15%' } },
  { type: 'icon', name: 'moon', style: { top: '25%', right: '10%' } },
  { type: 'icon', name: 'scale', style: { bottom: '20%', left: '15%' } },
];

const Icon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'thermometer':
      return (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
        </svg>
      );
    case 'moon':
      return (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      );
    case 'scale':
      return (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Test3() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-4 overflow-hidden">
      {decorativeIcons.map((deco, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={deco.style as React.CSSProperties}
          animate={{ y: ['-10px', '10px', '-10px'] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.3,
          }}
        >
          {deco.type === 'icon' && 'name' in deco && (
            <Icon name={deco.name as string} className="h-8 w-8 text-gray-400" />
          )}
        </motion.div>
      ))}

      {foodImages.map((food, index) => (
        <motion.div
          key={index}
          className={food.className}
          animate={{ y: ['-10px', '10px', '-10px'] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
        >
          <Image src={food.src} alt={food.alt} width={64} height={64} />
        </motion.div>
      ))}
      <motion.h3
        className="text-2xl font-extrabold tracking-tight text-stone-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        국내 대표 건강기록 통합 관리 플랫폼, <span className="text-stone-900">inPHR</span>
      </motion.h3>
      <motion.h1
        className="text-4xl font-extrabold tracking-tight text-blue-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        나만의 맞춤 헬스케어를 확인하세요!
      </motion.h1>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Image src="/assets/images/main.png" alt="inPHR" width={500} height={500} className="p-4" />
      </motion.div>
      <motion.p
        className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed font-extrabold text-stone-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        생애 주기별 패턴화된 개인 건강기록을 바탕으로 <br /> 소프트넷이 환자 맞춤형 정밀 의료 환경 제공에
        앞장서겠습니다.
        <br />
        inphrcare, 병원정보 시스템 자동 연동을 통해 편리한 건강 관리를 시작하세요!
      </motion.p>
    </div>
  );
}
