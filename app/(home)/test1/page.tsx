'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import Phrase from '@/components/Phrase';
import CardSection from '@/components/Card';

// 통계 데이터
const stats = [
  { number: '100만+', label: '누적 사용자', description: '전국 사용자들의 신뢰' },
  { number: '500+', label: '연동 병원', description: '전국 주요 의료기관' },
  { number: '99.9%', label: '데이터 보안율', description: '철저한 개인정보 보호' },
  { number: '24/7', label: '서비스 운영', description: '언제나 이용 가능' },
];

// 후기 데이터
const testimonials = [
  {
    name: '전승오',
    role: '30대 직장인',
    comment: '바쁜 일상 속에서도 건강관리를 놓치지 않을 수 있어요. 특히 원격 진료 기능이 정말 편리합니다.',
    rating: 5,
    avatar: '/assets/images/temp_profile_1.svg',
  },
  {
    name: '이영희',
    role: '40대 주부',
    comment: '가족 전체의 건강 기록을 한 곳에서 관리할 수 있어서 너무 좋아요. UI도 직관적이고 사용하기 쉽습니다.',
    rating: 5,
    avatar: '/assets/images/temp_profile_2.svg',
  },
  {
    name: '박철호',
    role: '50대 자영업자',
    comment: '정기 검진 결과부터 일상의 건강 데이터까지 체계적으로 관리되니까 안심이 됩니다.',
    rating: 5,
    avatar: '/assets/images/temp_profile_3.svg',
  },
];

interface FeatureSectionProps {
  section: {
    title: string;
    description: string;
    image: string;
  };
}

function FeatureSectionItem({ section }: FeatureSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <section ref={ref} className="relative h-[150vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid max-w-7xl grid-cols-1 items-center gap-8 p-8 md:grid-cols-3"
        >
          <div className="text-left md:col-span-1">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">{section.title}</h2>
            <p className="text-md text-gray-600">{section.description}</p>
          </div>
          <div className="md:col-span-2">
            <Image
              src={section.image}
              alt={section.title}
              width={500}
              height={500}
              className="rounded-2xl"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 통계 섹션 컴포넌트
function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900">숫자로 보는 inPHR</h2>
          <p className="text-xl text-gray-600">대한민국 헬스케어 플랫폼의 새로운 기준을 제시합니다</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="rounded-2xl bg-white p-8 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-2 text-4xl font-bold text-blue-600">{stat.number}</div>
              <div className="mb-2 text-xl font-semibold text-gray-900">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 인터랙티브 데모 섹션
function InteractiveDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className="mb-6 text-4xl font-bold">
              직관적이고 편리한
              <br />
              사용자 경험
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-gray-300">
              복잡한 의료 정보를 쉽고 명확하게 확인할 수 있습니다. 언제 어디서나 간편하게 건강을 관리하세요.
            </p>
            <div className="space-y-4">
              {['간편한 로그인 및 인증', '실시간 건강 데이터 동기화', '직관적인 대시보드'].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <Image
                src="/assets/images/sc_6_phone_ko.svg"
                alt="inPHR 앱 화면"
                width={300}
                height={600}
                className="drop-shadow-2xl"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// CTA 섹션
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
      <div className="mx-auto max-w-4xl px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl font-bold">지금 바로 시작하세요</h2>
          <p className="mb-10 text-xl leading-relaxed">
            건강한 미래를 위한 첫 걸음,
            <br />
            inPHR과 함께 스마트한 건강관리를 경험해보세요
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-colors duration-300 hover:bg-gray-100"
            >
              앱 다운로드하기
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-blue-600"
            >
              서비스 체험하기
            </motion.button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold">iOS</div>
              <div className="text-sm opacity-80">App Store</div>
            </div>
            <div className="h-12 w-px bg-white opacity-30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">Android</div>
              <div className="text-sm opacity-80">Google Play</div>
            </div>
            <div className="h-12 w-px bg-white opacity-30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">Web</div>
              <div className="text-sm opacity-80">브라우저</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Page() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  const featureSections = [
    {
      title: 'inPHRCARE',
      description:
        '개인의 건강 기록을 기반으로 맞춤형 건강 관리 서비스를 제공합니다. 복잡한 의료 정보를 쉽게 확인하고 관리하세요.',
      image: '/assets/images/inphrcare.png',
    },
    {
      title: 'inPHRSYM',
      description: 'AI 알고리즘이 건강 데이터를 분석하여 질병 발생 가능성을 예측하고, 예방을 위한 가이드를 제공합니다.',
      image: '/assets/images/sym.png',
    },
    {
      title: 'COMPASS',
      description:
        '전국 주요 의료기관과 연동하여 진료 기록, 검사 결과 등을 통합 관리하고, 스마트한 건강관리를 경험해보세요.',
      image: '/assets/images/compass.png',
    },
  ];

  return (
    <>
      <motion.section ref={ref} className="flex h-screen items-center justify-center" style={{ y }}>
        <motion.div style={{ scale, opacity }} className="absolute h-full w-full">
          <Image src="/assets/images/health1.jpg" alt="health1" fill style={{ objectFit: 'cover' }} priority />
        </motion.div>

        <section className="flex h-screen items-center justify-center bg-white">
          <h1 className="animate-focus-in-contract-bck text-4xl font-bold text-white">
            국내 대표 건강기록 통합관리 플랫폼, inPHR
          </h1>
        </section>
      </motion.section>
      {/* 스크롤 공간을 제공하는 tall container */}

      <div className="relative bg-white">
        {featureSections.map((section, index) => (
          <FeatureSectionItem key={index} section={section} />
        ))}
      </div>

      <CardSection />
      <StatsSection />
      <InteractiveDemo />

      {/* <TestimonialsSection /> */}
      <CTASection />
    </>
  );
}
