'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const foodImages = [
  // 왼쪽 아이콘 - 큰 화면에서 겹침 방지 및 간격 조정
  {
    src: '/assets/images/피.png',
    alt: '혈당',
    className: 'hidden md:block absolute top-[15%] left-[15%] w-8 h-8 lg:w-12 lg:h-12 xl:left-[18%] 2xl:left-[20%]',
  },
  {
    src: '/assets/images/산소.png',
    alt: '산소',
    className:
      'hidden lg:block absolute top-[25%] left-[20%] w-8 h-8 lg:w-10 lg:h-10 xl:top-[22%] xl:left-[25%] 2xl:left-[28%]',
  },
  {
    src: '/assets/images/체중계.png',
    alt: '체중계',
    className:
      'hidden md:block absolute top-[35%] left-[12%] w-8 h-8 lg:w-12 lg:h-12 xl:top-[38%] xl:left-[15%] 2xl:left-[18%]',
  },
  {
    src: '/assets/images/폐.png',
    alt: '폐',
    className:
      'hidden md:block absolute top-[55%] left-[18%] w-8 h-8 lg:w-12 lg:h-12 xl:top-[58%] xl:left-[22%] 2xl:left-[25%]',
  },
  {
    src: '/assets/images/신발.png',
    alt: '신발',
    className:
      'hidden lg:block absolute bottom-[25%] left-[15%] w-8 h-8 lg:w-12 lg:h-12 xl:bottom-[22%] xl:left-[18%] 2xl:left-[20%]',
  },
  {
    src: '/assets/images/자.png',
    alt: '자',
    className:
      'hidden xl:block absolute bottom-[40%] left-[12%] w-8 h-8 lg:w-10 lg:h-10 xl:bottom-[42%] xl:left-[12%] 2xl:left-[15%]',
  },

  // 오른쪽 아이콘 - 큰 화면에서 겹침 방지 및 간격 조정
  {
    src: '/assets/images/하트.png',
    alt: '하트',
    className: 'hidden md:block absolute top-[20%] right-[15%] w-8 h-8 lg:w-12 lg:h-12 xl:right-[18%] 2xl:right-[20%]',
  },
  {
    src: '/assets/images/달.png',
    alt: '달',
    className:
      'hidden lg:block absolute top-[45%] right-[12%] w-8 h-8 lg:w-10 lg:h-10 xl:top-[42%] xl:right-[12%] 2xl:right-[15%]',
  },
  {
    src: '/assets/images/심장.png',
    alt: '심장',
    className:
      'hidden md:block absolute top-[60%] right-[18%] w-8 h-8 lg:w-12 lg:h-12 xl:top-[63%] xl:right-[22%] 2xl:right-[25%]',
  },
  {
    src: '/assets/images/체온계.png',
    alt: '체온계',
    className:
      'hidden lg:block absolute bottom-[35%] right-[15%] w-8 h-8 lg:w-12 lg:h-12 xl:bottom-[38%] xl:right-[18%] 2xl:right-[20%]',
  },
  {
    src: '/assets/images/도넛.png',
    alt: '도넛',
    className:
      'hidden xl:block absolute bottom-[20%] right-[18%] w-8 h-8 lg:w-12 lg:h-12 xl:bottom-[18%] xl:right-[25%] 2xl:right-[28%]',
  },
  {
    src: '/assets/images/그래프.png',
    alt: '그래프',
    className:
      'hidden xl:block absolute bottom-[50%] right-[12%] w-8 h-8 lg:w-10 lg:h-10 xl:bottom-[52%] xl:right-[15%] 2xl:right-[18%]',
  },
];

const decorativeIcons = [
  // 왼쪽 원 - 큰 화면에서 겹침 방지 및 간격 조정
  {
    className:
      'hidden md:block absolute top-[25%] left-[10%] h-3 w-3 rounded-full bg-blue-600 lg:h-5 lg:w-5 xl:top-[28%] xl:left-[12%] 2xl:left-[14%]',
  },
  {
    className:
      'hidden lg:block absolute top-[50%] left-[8%] h-2 w-2 rounded-full bg-blue-400 lg:h-4 lg:w-4 xl:top-[48%] xl:left-[8%] 2xl:left-[10%]',
  },
  {
    className:
      'hidden lg:block absolute bottom-[15%] left-[11%] h-2 w-2 rounded-full bg-blue-300 lg:h-4 lg:w-4 xl:bottom-[12%] xl:left-[13%] 2xl:left-[16%]',
  },
  {
    className:
      'hidden xl:block absolute top-[75%] left-[13%] h-3 w-3 rounded-full bg-blue-400 lg:h-4 lg:w-4 xl:top-[78%] xl:left-[8%] 2xl:left-[10%]',
  },

  // 오른쪽 원 - 큰 화면에서 겹침 방지 및 간격 조정
  {
    className:
      'hidden md:block absolute top-[15%] right-[10%] h-4 w-4 rounded-full bg-blue-600 lg:h-6 lg:w-6 xl:top-[12%] xl:right-[12%] 2xl:right-[14%]',
  },
  {
    className:
      'hidden lg:block absolute top-[35%] right-[8%] h-2 w-2 rounded-full bg-blue-300 lg:h-3 lg:w-3 xl:top-[32%] xl:right-[8%] 2xl:right-[10%]',
  },
  {
    className:
      'hidden lg:block absolute top-[70%] right-[11%] h-2 w-2 rounded-full bg-blue-300 lg:h-3 lg:w-3 xl:top-[73%] xl:right-[13%] 2xl:right-[16%]',
  },
  {
    className:
      'hidden xl:block absolute bottom-[25%] right-[13%] h-3 w-3 rounded-full bg-blue-400 lg:h-4 lg:w-4 xl:bottom-[28%] xl:right-[8%] 2xl:right-[10%]',
  },
];

export default function Test3() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-4 overflow-hidden px-4 pt-[128px]">
      {decorativeIcons.map((deco, index) => (
        <motion.div
          key={index}
          className={deco.className}
          animate={{ y: ['-10px', '10px', '-10px'] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.3,
          }}
        ></motion.div>
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
        국내 대표 건강기록 통합 관리 플랫폼, <span className="text-stone-900">inPHR</span>
      </motion.h3>
      <motion.h1
        className="text-center text-3xl font-extrabold tracking-tight text-blue-500 md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        나만의 맞춤 헬스케어를 확인하세요!
      </motion.h1>

      <motion.div
        className="w-full max-w-xs p-4 md:max-w-md lg:max-w-[500px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image src="/assets/images/main.png" alt="inPHR" width={500} height={500} className="h-auto w-full" />
      </motion.div>
      <motion.p
        className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed font-extrabold text-stone-500 md:text-lg"
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
