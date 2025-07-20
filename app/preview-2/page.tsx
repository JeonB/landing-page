'use client';

import React, { useRef, FC, HTMLAttributes, ReactNode } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight, FiCheckCircle, FiPlus } from 'react-icons/fi';
import CountUp from 'react-countup';

type MotionTag = keyof typeof motion;

interface AnimatedTextProps {
  text: string;
  el?: MotionTag;
  className?: string;
  stagger?: number;
  once?: boolean;
}

const AnimatedText: FC<AnimatedTextProps> = ({ text, el = 'p', className, stagger = 0.02, once = true }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  const defaultAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: stagger } },
  };

  const MotionWrapper = motion[el] as React.ElementType;

  return (
    <MotionWrapper
      className={className}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={defaultAnimation}
    >
      <span className="sr-only">{text}</span>
      <motion.span aria-hidden>
        {text.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </MotionWrapper>
  );
};

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: FC<AnimatedCounterProps> = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref}>
      {isInView && (
        <CountUp end={end} duration={duration} suffix={suffix} prefix={prefix} enableScrollSpy scrollSpyOnce />
      )}
    </div>
  );
};

// --- Page Sections ---

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-gray-900 text-white">
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <Image
          src="/images/health2.jpg"
          alt="Health background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50" />
      </motion.div>
      <div className="relative z-10 p-4 text-center">
        <motion.div
          className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          건강 관리의 새로운 기준, inPHR
        </motion.div>
        <AnimatedText
          text="AI와 함께 시작하는 초개인화 건강 솔루션"
          el="h1"
          className="mb-6 text-4xl leading-tight font-extrabold tracking-tighter md:text-6xl"
        />
        <AnimatedText
          text="당신의 일상 데이터가 최고의 건강 가이드가 됩니다."
          className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl"
          stagger={0.01}
        />
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700"
        >
          자세히 알아보기 <FiArrowRight />
        </motion.button>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 10000, suffix: '+', label: '누적 사용자' },
    { value: 98, suffix: '%', label: '서비스 만족도' },
    { value: 50, suffix: '+', label: '연동 파트너' },
    { value: 15, prefix: '평균 ', suffix: '%', label: '건강 지표 개선' },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-gray-800 py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-4xl font-bold text-blue-400 md:text-5xl">
                <AnimatedCounter end={stat.value} duration={3} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="mt-2 text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const steps = [
    { title: '데이터 연동', description: '웨어러블 기기, 건강검진 결과 등 다양한 데이터를 손쉽게 연동합니다.' },
    { title: 'AI 분석 및 리포트', description: '수집된 데이터를 AI가 분석하여 개인 맞춤형 건강 리포트를 생성합니다.' },
    { title: '맞춤 솔루션 제공', description: '분석 결과를 바탕으로 식단, 운동, 수면 등 맞춤형 솔루션을 추천합니다.' },
    { title: '지속적인 모니터링', description: '건강 상태를 지속적으로 트래킹하며 변화에 맞는 피드백을 제공합니다.' },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  return (
    <section ref={ref} className="bg-slate-100 py-24">
      <div className="container mx-auto px-4">
        <AnimatedText text="inPHR 작동 방식" el="h2" className="mb-12 text-center text-4xl font-bold text-gray-800" />
        <div className="relative mx-auto max-w-2xl">
          <motion.div className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 bg-gray-300">
            <motion.div className="h-full w-full origin-top bg-blue-500" style={{ scaleY: scrollYProgress }} />
          </motion.div>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-8">
                <motion.div
                  className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'order-2 pl-8 text-left'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <h3 className="mb-2 text-2xl font-semibold text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
                <div className="z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white shadow-lg">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DetailedFeaturesSection = () => {
  const features = [
    {
      title: '라이프로그 통합 분석',
      description:
        '수면, 활동량, 심박수 등 흩어져 있는 데이터를 한곳에 모아 건강 상태를 다각도로 분석하고, 유의미한 변화를 감지하여 알려줍니다.',
      image: '/images/health1.jpg',
      points: ['웨어러블 기기 연동', '수면 패턴 분석', '스트레스 지수 측정'],
    },
    {
      title: '유전자 정보 기반 맞춤 케어',
      description:
        'DTC 유전자 검사 결과를 연동하여, 타고난 건강 특성을 고려한 더욱 정밀하고 개인화된 건강 관리 계획을 수립할 수 있습니다.',
      image: '/images/mental.jpg',
      points: ['영양소 요구량 예측', '운동 적합성 분석', '질병 위험도 예측'],
    },
  ];

  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="차원이 다른 개인 맞춤 서비스"
          el="h2"
          className="mb-16 text-center text-4xl font-bold text-gray-800"
        />
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-8 md:flex-row md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: index % 2 !== 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-2xl">
                  <Image src={feature.image} alt={feature.title} layout="fill" objectFit="cover" />
                </div>
              </motion.div>
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="mb-4 text-3xl font-bold text-gray-800">{feature.title}</h3>
                <p className="mb-6 text-lg text-gray-600">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <FiCheckCircle className="h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  // This is a simplified carousel. For a real app, use a library like Embla Carousel.
  const testimonials = [
    {
      name: '김민준',
      role: '30대 직장인',
      quote:
        'inPHR 덕분에 제 건강 상태를 객관적으로 파악하고, 생활 습관을 개선할 수 있었어요. 정말 똑똑한 건강 비서 같아요!',
      avatar: '/images/doctor.jpg',
    },
    {
      name: '이서연',
      role: '운동 마니아',
      quote:
        '데이터 기반으로 운동 프로그램을 추천해주니 효과가 정말 좋았어요. 혼자 운동할 때보다 훨씬 체계적으로 관리받는 느낌이에요.',
      avatar: '/images/health2.jpg',
    },
    {
      name: '박현우',
      role: '만성질환 관리자',
      quote:
        '혈당과 혈압을 꾸준히 기록하고 리포트를 받으니 병원 진료 시에도 큰 도움이 됩니다. 의사선생님도 좋아하시더라고요.',
      avatar: '/images/health1.jpg',
    },
  ];

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <section className="bg-gray-900 py-24 text-white">
      <div className="container mx-auto px-4">
        <AnimatedText text="사용자들의 생생한 후기" el="h2" className="mb-16 text-center text-4xl font-bold" />
        <div ref={ref} className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto pb-8">
          {testimonials.map((t, i) => (
            <div key={i} className="w-full flex-shrink-0 snap-center md:w-1/2 lg:w-1/3">
              <motion.div
                className="mx-4 flex h-full flex-col justify-between rounded-lg bg-gray-800 p-8 shadow-lg"
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
                }}
              >
                <p className="mb-6 text-lg text-gray-300 italic">"{t.quote}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt={t.name} layout="fill" objectFit="cover" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: '어떤 데이터를 연동할 수 있나요?',
      a: '삼성헬스, 애플건강 등 모바일 헬스케어 앱 데이터, 스마트 워치, 체중계 등 다양한 웨어러블 기기, 그리고 건강검진 결과 데이터 등을 연동할 수 있습니다.',
    },
    {
      q: '의료 서비스와는 어떻게 다른가요?',
      a: 'inPHR은 의료법을 준수하는 비의료 건강관리 서비스입니다. 질병의 진단 및 치료는 병원에서, 일상에서의 건강 관리는 inPHR과 함께하여 시너지를 낼 수 있습니다.',
    },
    {
      q: '데이터 보안은 안전한가요?',
      a: '네, 사용자의 모든 데이터는 최신 암호화 기술을 통해 안전하게 관리되며, 개인정보보호 규정을 철저히 준수하고 있습니다. 사용자의 동의 없이는 절대 외부에 공유되지 않습니다.',
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <AnimatedText text="자주 묻는 질문" el="h2" className="mb-12 text-center text-4xl font-bold text-gray-800" />
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden rounded-lg border border-gray-200">
              <button
                className="flex w-full items-center justify-between p-6 text-left text-lg font-medium text-gray-800 hover:bg-gray-50"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span>{faq.q}</span>
                <motion.div animate={{ rotate: activeIndex === index ? 180 : 0 }}>
                  <FiPlus />
                </motion.div>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="p-6 pt-0 text-gray-600">{faq.a}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-blue-600 py-24 text-white">
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="mb-4 text-4xl font-extrabold">지금, 건강 관리의 혁신을 경험하세요</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
          복잡한 건강 관리는 inPHR에 맡기고, 당신은 건강한 삶을 즐기기만 하세요.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, y: -5, transition: { type: 'spring', stiffness: 300 } }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-white px-10 py-4 font-bold text-blue-600 shadow-lg"
        >
          무료로 시작하기
        </motion.button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-gray-400">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} inPHR. 모든 권리 보유.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-white">
            개인정보처리방침
          </a>
          <a href="#" className="hover:text-white">
            이용약관
          </a>
          <a href="#" className="hover:text-white">
            고객센터
          </a>
        </div>
      </div>
    </footer>
  );
};

const PreviewTwoPage = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <DetailedFeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default PreviewTwoPage;
