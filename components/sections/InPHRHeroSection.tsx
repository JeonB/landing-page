'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface FoodImage {
  src: string;
  alt: string;
  className: string;
}

interface DecorativeIcon {
  type: 'div' | 'icon';
  style?: React.CSSProperties;
  name?: string;
  className?: string;
}

interface InPHRHeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  mainImageSrc?: string;
  mainImageAlt?: string;
  foodImages?: FoodImage[];
  decorativeIcons?: DecorativeIcon[];
  className?: string;
}

const defaultFoodImages: FoodImage[] = [
  // 왼쪽 음식 아이콘들 - 반응형 위치 및 크기 조정
  {
    src: '/assets/images/와플.png',
    alt: '와플',
    className: 'hidden md:block absolute top-[15%] left-[15%] w-8 h-8 lg:w-12 lg:h-12 xl:left-[18%] 2xl:left-[20%]',
  },
  {
    src: '/assets/images/치킨.png',
    alt: '치킨',
    className:
      'hidden lg:block absolute top-[25%] right-[20%] w-8 h-8 lg:w-10 lg:h-10 xl:top-[22%] xl:right-[25%] 2xl:right-[28%]',
  },
  {
    src: '/assets/images/사탕.png',
    alt: '사탕',
    className:
      'hidden md:block absolute bottom-[35%] left-[12%] w-8 h-8 lg:w-12 lg:h-12 xl:bottom-[38%] xl:left-[15%] 2xl:left-[18%]',
  },
  {
    src: '/assets/images/도넛.png',
    alt: '도넛',
    className:
      'hidden md:block absolute bottom-[25%] right-[18%] w-8 h-8 lg:w-12 lg:h-12 xl:bottom-[28%] xl:right-[22%] 2xl:right-[25%]',
  },
  {
    src: '/assets/images/신발.png',
    alt: '신발',
    className:
      'hidden lg:block absolute top-[55%] left-[18%] w-8 h-8 lg:w-12 lg:h-12 xl:top-[58%] xl:left-[22%] 2xl:left-[25%]',
  },
  {
    src: '/assets/images/사과.png',
    alt: '사과',
    className:
      'hidden xl:block absolute top-[70%] right-[15%] w-8 h-8 lg:w-10 lg:h-10 xl:top-[73%] xl:right-[18%] 2xl:right-[20%]',
  },
];

const defaultDecorativeIcons: DecorativeIcon[] = [
  // 파란색 원들 - 반응형 위치 및 표시/숨김
  {
    type: 'div',
    style: { top: '15%', left: '80%', width: '30px', height: '30px', backgroundColor: '#3b82f6', borderRadius: '50%' },
    className: 'hidden md:block',
  },
  {
    type: 'div',
    style: { top: '80%', left: '10%', width: '20px', height: '20px', backgroundColor: '#60a5fa', borderRadius: '50%' },
    className: 'hidden lg:block',
  },
  {
    type: 'div',
    style: { top: '50%', left: '90%', width: '15px', height: '15px', backgroundColor: '#93c5fd', borderRadius: '50%' },
    className: 'hidden lg:block',
  },
  {
    type: 'div',
    style: { top: '20%', left: '10%', width: '25px', height: '25px', backgroundColor: '#3b82f6', borderRadius: '50%' },
    className: 'hidden md:block',
  },
  {
    type: 'div',
    style: { top: '70%', left: '85%', width: '22px', height: '22px', backgroundColor: '#60a5fa', borderRadius: '50%' },
    className: 'hidden xl:block',
  },

  // 아이콘들 - 반응형 표시/숨김
  { type: 'icon', name: 'thermometer', style: { top: '75%', right: '15%' }, className: 'hidden md:block' },
  { type: 'icon', name: 'moon', style: { top: '25%', right: '10%' }, className: 'hidden lg:block' },
  { type: 'icon', name: 'scale', style: { bottom: '20%', left: '15%' }, className: 'hidden lg:block' },
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

export default function InPHRHeroSection({
  title = '국내 대표 건강기록 통합 관리 플랫폼, inPHR',
  subtitle = '나만의 맞춤 헬스케어를 확인하세요!',
  description = '생애 주기별 패턴화된 개인 건강기록을 바탕으로 소프트넷이 환자 맞춤형 정밀 의료 환경 제공에 앞장서겠습니다. inphrcare, 병원정보 시스템 자동 연동을 통해 편리한 건강 관리를 시작하세요!',
  mainImageSrc = '/assets/images/main.png',
  mainImageAlt = 'inPHR',
  foodImages = defaultFoodImages,
  decorativeIcons = defaultDecorativeIcons,
  className = '',
}: InPHRHeroSectionProps) {
  return (
    <div
      className={`relative flex h-screen flex-col items-center justify-center gap-4 overflow-hidden px-4 pt-[128px] ${className}`}
    >
      {decorativeIcons.map((deco, index) => (
        <motion.div
          key={index}
          className={`absolute ${deco.className || ''}`}
          style={deco.style as React.CSSProperties}
          animate={{ y: ['-10px', '10px', '-10px'] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.3,
          }}
        >
          {deco.type === 'icon' && deco.name && (
            <Icon name={deco.name} className="h-6 w-6 text-gray-400 md:h-8 md:w-8" />
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
          <Image src={food.src} alt={food.alt} width={64} height={64} className="h-full w-full object-contain" />
        </motion.div>
      ))}

      <motion.h3
        className="text-center text-lg font-extrabold tracking-tight text-stone-500 md:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {title.split('inPHR').map((part, index, array) =>
          index === array.length - 1 ? (
            part
          ) : (
            <span key={index}>
              {part}
              <span className="text-stone-900">inPHR</span>
            </span>
          ),
        )}
      </motion.h3>

      <motion.h1
        className="text-center text-2xl font-extrabold tracking-tight text-blue-500 md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {subtitle}
      </motion.h1>

      <motion.div
        className="w-full max-w-xs p-4 md:max-w-md lg:max-w-[500px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image src={mainImageSrc} alt={mainImageAlt} width={500} height={500} className="h-auto w-full" />
      </motion.div>

      <motion.p
        className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed font-extrabold text-stone-500 md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {description.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < description.split('\n').length - 1 && <br />}
          </span>
        ))}
      </motion.p>
    </div>
  );
}
