'use client';

import React, { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import {
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiHeart,
  FiMessageCircle,
  FiPieChart,
  FiShield,
  FiSliders,
  FiSmile,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi';

import health1 from '@/public/images/health1.jpg';
import mental from '@/public/images/mental.jpg';
import doctor from '@/public/images/doctor.jpg';
import health2 from '@/public/images/health2.jpg';

// --- Reusable Components ---
const Section = ({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`px-4 py-24 sm:px-6 lg:px-8 ${className}`}>
    <div className="container mx-auto">{children}</div>
  </section>
);

const AnimatedHeader = ({
  title,
  subtitle,
  className = '',
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">{subtitle}</p>}
    </motion.div>
  );
};

// --- Page Component ---
const PreviewFivePage = () => {
  return (
    <main className="bg-white antialiased">
      <HeroSection />
      <CoreServicesSection />
      <ProblemSolutionSection />
      <EcosystemSection />
      <TrustSection />
      <DataDrivenSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

// --- Page Sections ---
const HeroSection = () => {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
      >
        <Image
          src={health2}
          alt="Healthcare background"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          priority
        />
      </motion.div>

      <div className="relative z-10 p-4 text-center text-white">
        <motion.h1
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          개인의 건강을 넘어서, <br />
          모두의 삶을 변화시키는 디지털 헬스케어
        </motion.h1>
        <motion.div
          className="mt-10 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="#services"
            className="inline-block rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700"
          >
            서비스 알아보기
          </a>
          <a
            href="#cta"
            className="inline-block rounded-md bg-white/90 px-8 py-3 text-base font-semibold text-blue-600 shadow-lg backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white"
          >
            상담 요청
          </a>
        </motion.div>
      </div>
    </div>
  );
};

interface ServiceProps {
  icon: React.ElementType;
  name: string;
  slogan: string;
  description: string;
  features: string[];
  image: StaticImageData;
  imageAlt: string;
  reverse?: boolean;
}

const ServiceDetail = ({
  icon: Icon,
  name,
  slogan,
  description,
  features,
  image,
  imageAlt,
  reverse = false,
}: ServiceProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-12 md:flex-row lg:gap-16 ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <motion.div
        className="flex w-full items-center justify-center md:w-1/2"
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="relative aspect-video w-full max-w-lg overflow-hidden rounded-lg shadow-2xl">
          <Image src={image} alt={imageAlt} layout="fill" objectFit="cover" />
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="flex items-center gap-4">
          <Icon className="h-10 w-10 text-blue-600" />
          <h3 className="text-3xl font-bold text-gray-900">{name}</h3>
        </div>
        <p className="mt-4 text-xl font-semibold text-gray-700">{slogan}</p>
        <p className="mt-2 leading-relaxed text-gray-600">{description}</p>
        <ul className="mt-6 space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <FiCheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const CoreServicesSection = () => {
  const services: ServiceProps[] = [
    {
      icon: FiHeart,
      name: 'inPHRCare',
      slogan: '나만의 주치의처럼',
      description:
        '병원 진료 기록부터 라이프로그까지, 흩어진 나의 건강 데이터를 한 곳에 모아 맞춤형 케어를 제공합니다. 정확한 진단, 예방 중심의 관리, 그리고 원격의료까지 — 건강한 일상을 위한 스마트한 시작입니다.',
      features: [
        '진료기록, 검사결과, 라이프로그 통합',
        'AI 기반 건강 리포트 및 이상신호 감지',
        '가족 건강 데이터 공유 및 관리',
        '비대면 진료 연계',
      ],
      image: health1,
      imageAlt: 'inPHRCare service illustration',
    },
    {
      icon: FiSmile,
      name: 'inPHRSYM',
      slogan: '정서불안과 공황장애, 이제 혼자가 아닙니다',
      description:
        '심리 상태를 기록하고, 공황 증상을 예측하는 AI 기반 정서관리 앱. 일상 속 스트레스를 이해하고 대처할 수 있도록, 맞춤형 평가와 전문가 정보를 함께 제공합니다.',
      features: [
        '매일 심리상태 기록 및 감정분석',
        '공황 발작 예측 AI 알고리즘',
        '마음챙김, 명상 등 맞춤형 콘텐츠',
        '전문 심리상담사 연결',
      ],
      image: mental,
      imageAlt: 'inPHRSYM service illustration',
      reverse: true,
    },
    {
      icon: FiPieChart,
      name: 'Compass',
      slogan: '환자 상태를 한눈에, 의료진을 위한 스마트 대시보드',
      description:
        '실시간 생체정보 모니터링, 증상 변화 알림, 원격 진료까지 가능한 의료진 전용 환자관리 시스템. 진료 효율을 높이고, 최적화된 케어플랜 수립을 돕는 디지털 헬스 파트너입니다.',
      features: [
        '다수 환자 실시간 모니터링 대시보드',
        '위험도/중증도에 따른 환자 분류',
        '환자 데이터 기반 진료 보조 AI',
        '보안 강화된 원격 협진 기능',
      ],
      image: doctor,
      imageAlt: 'Compass service illustration',
    },
  ];
  return (
    <Section id="services" className="bg-gray-50">
      <AnimatedHeader title="핵심 서비스" subtitle="당신의 필요에 맞는 최적의 솔루션을 제공합니다." />
      <div className="mt-20 space-y-24">
        {services.map((service) => (
          <ServiceDetail key={service.name} {...service} />
        ))}
      </div>
    </Section>
  );
};

const ProblemSolutionSection = () => {
  const solutions = [
    {
      icon: FiShield,
      title: '중복검사 방지',
      description: '통합된 의료 기록을 통해 불필요한 중복 검사 및 처방을 방지하여 의료비 절감에 기여합니다.',
    },
    {
      icon: FiMessageCircle,
      title: '실시간 소통',
      description: '환자와 의료진이 데이터를 기반으로 원활하게 소통하여 치료 효과를 극대화합니다.',
    },
    {
      icon: FiSliders,
      title: '맞춤형 관리',
      description: '정서 및 생활 데이터를 종합 분석하여 개인에게 최적화된 건강 관리 계획을 제공합니다.',
    },
  ];
  return (
    <Section className="bg-white">
      <AnimatedHeader
        title="건강 정보는 흩어져 있고, 만성질환은 늘어갑니다."
        subtitle="우리는 이 문제를 이렇게 해결합니다."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <solution.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">{solution.title}</h3>
            <p className="mt-2 text-gray-600">{solution.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const EcosystemSection = () => {
  const ecosystems = [
    {
      group: '일반인',
      apps: ['inPHRCare', '체온앱', '복약 알림'],
      icon: FiUsers,
    },
    {
      group: '만성질환자',
      apps: ['IBD', '당뇨', '암 예후 관리'],
      icon: FiTrendingUp,
    },
    {
      group: '정신건강',
      apps: ['inPHRSYM', 'AI 예측 플랫폼'],
      icon: FiSmile,
    },
    {
      group: '의료진',
      apps: ['Compass', '원격진료 시스템'],
      icon: FiHeart,
    },
  ];
  return (
    <Section className="bg-gray-50">
      <AnimatedHeader
        title="PHR 기반 통합 헬스케어 플랫폼"
        subtitle="다양한 앱과 서비스가 연결된 하나의 디지털 헬스케어 생태계를 구축합니다."
      />
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {ecosystems.map((eco, index) => (
          <motion.div
            key={eco.group}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <eco.icon className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">{eco.group}</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {eco.apps.map((app) => (
                <li key={app} className="flex items-center gap-2">
                  <FiCheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">{app}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const TrustSection = () => {
  const partners = ['고려대의료원', '전남대병원', '세종충남대병원', '삼성서울병원'];
  return (
    <Section className="bg-white">
      <AnimatedHeader title="이미 많은 의료기관이 선택한 이유가 있습니다." />
      <div className="mt-12 text-center">
        <p className="text-lg font-semibold text-gray-800">주요 협력 기관</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {partners.map((p) => (
            <p key={p} className="text-xl font-medium text-gray-600">
              {p}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-16 text-center">
        <p className="text-lg font-semibold text-gray-800">정부 R&D 과제 선정</p>
        <p className="mt-4 text-gray-600">
          보건복지부, 과학기술정보통신부 등 다수 정부 프로젝트 수주를 통해 기술력과 안정성을 인정받았습니다.
        </p>
      </div>
    </Section>
  );
};

const DataDrivenSection = () => {
  const dataPoints = [
    {
      icon: FiDatabase,
      title: '빅데이터 기반 질병 예측',
      description: '방대한 건강 데이터를 분석하여 주요 질병의 발생 위험도를 미리 예측하고 대비할 수 있도록 돕습니다.',
    },
    {
      icon: FiCpu,
      title: 'AI 기반 심리 상태 예측',
      description: '일상 대화와 생활 패턴을 분석하는 AI 모델을 통해 우울감, 스트레스 등 심리 상태 변화를 예측합니다.',
    },
    {
      icon: FiSliders,
      title: '개인 맞춤형 케어플랜',
      description: '데이터 분석 결과에 따라 개인에게 최적화된 식단, 운동, 생활 습관 가이드를 동적으로 생성합니다.',
    },
  ];
  return (
    <Section className="bg-gray-50">
      <AnimatedHeader title="건강은 데이터로 말합니다." />
      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {dataPoints.map((point, index) => (
          <motion.div
            key={point.title}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 ring-8 ring-blue-100/50">
              <point.icon className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">{point.title}</h3>
            <p className="mt-2 text-gray-600">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const CtaSection = () => {
  return (
    <Section id="cta" className="bg-blue-600">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">디지털 헬스케어의 미래를 함께 만드세요.</h2>
        <p className="mt-4 text-lg text-blue-100">의료기관 및 기업 파트너를 위한 최적의 솔루션을 제공합니다.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#"
            className="inline-block rounded-md bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-md hover:bg-gray-100"
          >
            무료 데모 신청
          </a>
          <a
            href="#"
            className="inline-block rounded-md bg-blue-700 px-8 py-3 text-base font-semibold text-white ring-1 ring-blue-200/50 ring-inset hover:bg-blue-800"
          >
            도입 문의하기
          </a>
        </div>
      </div>
    </Section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Softnet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default PreviewFivePage;
