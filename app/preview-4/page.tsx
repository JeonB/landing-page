'use client';

import React, { useRef, useState, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import {
  FiUsers,
  FiTrendingUp,
  FiShield,
  FiHeart,
  FiCpu,
  FiMessageSquare,
  FiCheck,
  FiArrowRight,
} from 'react-icons/fi';
import CountUp from 'react-countup';

// --- Reusable Components ---
const Section = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <section className={`px-4 py-20 sm:px-6 lg:px-8 ${className}`}>
    <div className="container mx-auto">{children}</div>
  </section>
);

const AnimatedHeader = ({ text, className = '' }: { text: string; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.h2
      ref={ref}
      className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {text}
    </motion.h2>
  );
};

// --- Page Component ---
const PreviewFourPageV2 = () => {
  return (
    <main className="bg-white antialiased">
      <HeroSection />
      <ForWhomSection />
      <CoreFeaturesSection />
      <HowItWorksSection />
      <TechAndSecuritySection />
      <SuccessStorySection />
      <PartnersSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

// --- Page Sections ---
const HeroSection = () => {
  return (
    <header className="relative h-[90vh] min-h-[700px] overflow-hidden bg-blue-50">
      <div className="container mx-auto flex h-full items-center px-4">
        <div className="z-10 w-full max-w-xl">
          <motion.div
            className="mb-4 inline-block rounded-full bg-blue-200 px-4 py-1 text-sm font-semibold text-blue-800"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            당신을 가장 잘 아는 건강 파트너
          </motion.div>
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            일상의 데이터로
            <br />더 건강한 내일을 만드세요.
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            inPHR이 당신의 작은 습관부터 건강 데이터까지 모두 모아, 가장 쉽고 정확한 건강 관리 솔루션을 제공합니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8"
          >
            <button className="rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700">
              지금 시작하기
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute top-0 right-0 h-full w-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image
          src="/images/health1.jpg"
          alt="A person smiling and healthy"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </motion.div>
    </header>
  );
};

const ForWhomSection = () => {
  const userTypes = [
    {
      icon: FiHeart,
      title: '만성질환 관리',
      description: '혈압, 혈당 등 꾸준한 관리가 필요한 분들께 체계적인 모니터링과 피드백을 제공합니다.',
    },
    {
      icon: FiTrendingUp,
      title: '건강 증진/다이어트',
      description:
        '운동, 식단 등 목표를 설정하고 동기를 부여받으며 더 건강한 라이프스타일을 만들고 싶은 분들을 돕습니다.',
    },
    {
      icon: FiUsers,
      title: '가족 건강 관리',
      description: '부모님이나 자녀의 건강을 함께 돌보고, 이상 신호를 제때 확인하고 싶은 분들께 유용합니다.',
    },
  ];

  return (
    <Section className="bg-white">
      <AnimatedHeader text="이런 분들께 필요해요" className="text-center" />
      <p className="mt-4 text-center text-lg text-gray-600">나에게 꼭 맞는 건강 관리를 시작해보세요.</p>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {userTypes.map((user, index) => (
          <motion.div
            key={index}
            className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <user.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">{user.title}</h3>
            <p className="mt-2 text-gray-600">{user.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const CoreFeaturesSection = () => {
  const features = [
    {
      title: '라이프로그 통합 분석',
      description: '수면, 활동량, 식단 등 일상의 모든 데이터를 종합하여 건강 상태를 입체적으로 분석합니다.',
      image: '/images/health1.jpg',
    },
    {
      title: 'AI 데일리 리포트',
      description: '매일 아침, AI가 당신의 데이터를 분석하여 맞춤 건강 인사이트와 실천 가이드를 제공합니다.',
      image: '/images/health2.jpg',
    },
    {
      title: '목표 달성 챌린지',
      description: '걷기, 물 마시기 등 건강 목표를 설정하고, 친구와 함께 챌린지에 참여하며 재미있게 건강을 관리하세요.',
      image: '/images/mental.jpg',
    },
    {
      title: '전문가 상담 연계',
      description: '데이터 분석 결과를 바탕으로 필요시 의사, 영양사, 운동 전문가와의 상담을 연결해드립니다.',
      image: '/images/doctor.jpg',
    },
  ];
  return (
    <Section className="bg-gray-50">
      <AnimatedHeader text="inPHR의 핵심 기능" className="text-center" />
      <p className="mt-4 text-center text-lg text-gray-600">당신의 건강을 위한 가장 스마트한 방법입니다.</p>
      <div className="mt-16 space-y-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center gap-8 md:flex-row md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-4 text-lg text-gray-600">{feature.description}</p>
            </div>
            <div className="w-full overflow-hidden rounded-lg shadow-xl md:w-1/2">
              <Image src={feature.image} alt={feature.title} width={600} height={400} objectFit="cover" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const HowItWorksSection = () => {
  const steps = ['데이터 연결', 'AI 분석', '솔루션 확인', '건강 개선'];
  return (
    <Section>
      <AnimatedHeader text="작동 원리" className="text-center" />
      <p className="mt-4 text-center text-lg text-gray-600">단 4단계로 건강 관리가 쉬워집니다.</p>
      <div className="relative mt-16">
        <div className="absolute top-1/2 left-0 h-1 w-full bg-gray-200" aria-hidden="true" />
        <motion.div
          className="absolute top-1/2 left-0 h-1 w-full bg-blue-600"
          style={{ transformOrigin: 'left' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 'all' }}
        />
        <div className="relative grid grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-2xl font-bold text-blue-600">
                {index + 1}
              </div>
              <h3 className="mt-4 font-semibold text-gray-800">{step}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const TechAndSecuritySection = () => {
  return (
    <Section className="bg-gray-900 text-white">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <AnimatedHeader text="최고의 기술력과 철저한 보안" className="text-white" />
          <p className="mt-4 text-lg text-gray-300">
            당신의 소중한 건강 데이터를 안전하게 지키는 것을 최우선으로 생각합니다.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-4">
              <FiCpu className="h-8 w-8 flex-shrink-0 text-blue-400" />
              <div>
                <h4 className="font-bold">독자적인 AI 엔진</h4>
                <p className="text-gray-400">수백만 건의 데이터를 학습한 AI가 개인 맞춤형 인사이트를 도출합니다.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FiShield className="h-8 w-8 flex-shrink-0 text-blue-400" />
              <div>
                <h4 className="font-bold">국제 표준 데이터 보안</h4>
                <p className="text-gray-400">
                  모든 데이터는 암호화되어 전송 및 저장되며, 국제 정보보호 표준을 준수합니다.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <motion.div
            className="inline-block rounded-full bg-blue-500/10 p-12"
            whileInView={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2 }}
            viewport={{ once: true }}
          >
            <FiShield size={100} className="text-blue-400" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

const SuccessStorySection = () => {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-2xl bg-blue-600 p-12 text-white">
        <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-blue-700/50" />
        <AnimatedHeader text="“덕분에 10kg 감량하고, 고혈압 약도 줄였어요.”" className="text-white" />
        <p className="mt-4 max-w-2xl text-lg text-blue-100">- 박민수님 (45세, inPHR 1년차 사용자)</p>
        <motion.button
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-blue-600 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          더 많은 성공 사례 보기 <FiArrowRight />
        </motion.button>
      </div>
    </Section>
  );
};

const PartnersSection = () => {
  const partners = ['Samsung Health', 'Apple Health', 'Garmin', 'Fitbit', '서울대학교병원', '세브란스병원'];
  return (
    <Section className="bg-gray-50">
      <h3 className="text-center text-xl font-semibold text-gray-500">국내외 50여개 파트너와 함께합니다.</h3>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {partners.map((p) => (
          <span key={p} className="text-lg font-medium text-gray-500">
            {p}
          </span>
        ))}
      </div>
    </Section>
  );
};

const FAQSection = () => {
  // ... Same FAQ section as preview-2 for brevity, can be expanded ...
  return (
    <Section>
      <AnimatedHeader text="자주 묻는 질문" className="text-center" />
    </Section>
  );
};

const FinalCTA = () => {
  return (
    <Section className="bg-blue-50 text-center">
      <AnimatedHeader text="이제, 당신의 건강을 바꿀 시간입니다." />
      <p className="mt-4 text-lg text-gray-600">inPHR과 함께라면 건강한 삶이 더 이상 어렵지 않습니다.</p>
      <motion.button
        className="mt-8 rounded-full bg-blue-600 px-10 py-5 text-xl font-bold text-white shadow-lg"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        무료로 시작하기
      </motion.button>
    </Section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12 text-gray-400">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} inPHR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default PreviewFourPageV2;
