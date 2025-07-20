'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <motion.div
        className="absolute h-full w-full"
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 8, ease: 'easeInOut' }}
      >
        <Image
          src="/images/health2.jpg"
          alt="Healthcare professional"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          priority
        />
      </motion.div>
      <div className="relative z-10 p-4 text-center text-white">
        <motion.h1
          className="mb-4 text-5xl font-bold md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          당신의 건강, 새로운 차원으로
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          inPHR이 제공하는 개인 맞춤형 헬스케어 솔루션
        </motion.p>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end 0.75'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-lg"
    >
      <div className="relative mb-4 h-16 w-16">
        <Image src={icon} alt={title} width={64} height={64} />
      </div>
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: '/globe.svg',
      title: '통합 건강 데이터',
      description: '다양한 소스로부터 수집된 건강 데이터를 종합적으로 분석하여 인사이트를 제공합니다.',
    },
    {
      icon: '/file.svg',
      title: '맞춤형 건강 리포트',
      description: '주기적인 건강 리포트로 건강 변화 추이를 확인하고, 관리 목표를 설정할 수 있습니다.',
    },
    {
      icon: '/window.svg',
      title: '디지털 치료 연계',
      description: '데이터 기반 분석 결과를 바탕으로 전문적인 디지털 치료 프로그램 연계를 도와줍니다.',
    },
  ];
  return (
    <section className="bg-slate-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">핵심 기능</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HorizontalScrollSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['10%', '-75%']);

  const items = [
    {
      title: '데이터 기반 건강 분석',
      description: '수면, 활동량, 심박수 등 라이프로그 데이터를 통합 분석하여 건강 상태를 다각도로 파악합니다.',
      image: '/images/health1.jpg',
    },
    {
      title: '맞춤형 건강 리포트',
      description:
        '주기적으로 생성되는 건강 리포트를 통해 나의 건강 변화 추이를 한눈에 확인하고, 관리 목표를 설정할 수 있습니다.',
      image: '/images/health2.jpg',
    },
    {
      title: '전문가 원격 상담',
      description:
        '데이터 분석 결과를 바탕으로 의료 전문가와의 원격 상담을 통해 전문적인 건강 관리 가이드를 받을 수 있습니다.',
      image: '/images/doctor.jpg',
    },
    {
      title: '정신 건강 케어',
      description:
        '스트레스, 우울감 등 정신 건강 상태를 지속적으로 모니터링하고, 맞춤형 명상, 상담 프로그램을 제공합니다.',
      image: '/images/mental.jpg',
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-gray-900 text-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex items-center gap-16">
          <div className="flex-shrink-0 pl-16">
            <h2 className="text-5xl font-bold">
              inPHR이 제공하는
              <br />
              특별한 경험
            </h2>
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              className="grid w-[80vw] max-w-5xl grid-cols-1 items-center gap-8 rounded-lg bg-gray-800 p-8 md:grid-cols-2"
            >
              <div className="relative h-96 w-full">
                <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <div>
                <h3 className="mb-4 text-3xl font-bold">{item.title}</h3>
                <p className="text-lg text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-4xl font-bold">지금 바로 시작하세요</h2>
        <p className="mb-8 text-lg text-gray-600">inPHR과 함께 건강한 삶을 향한 첫 걸음을 내딛어보세요.</p>
        <motion.button
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-700"
        >
          서비스 시작하기
        </motion.button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} inPHR. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="text-gray-400 hover:text-white">
            개인정보처리방침
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            이용약관
          </a>
        </div>
      </div>
    </footer>
  );
};

const PreviewThreePage = () => {
  return (
    <main className="bg-white text-gray-800">
      <HeroSection />
      <FeaturesSection />
      <HorizontalScrollSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default PreviewThreePage;
