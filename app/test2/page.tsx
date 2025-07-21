'use client';

import React, { useRef, ReactNode, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import {
  FiArrowRight,
  FiCheckCircle,
  FiHeart,
  FiHome,
  FiLifeBuoy,
  FiTrendingUp,
  FiUsers,
  FiPieChart,
  FiSmile,
  FiGrid,
  FiActivity,
  FiTarget,
  FiHelpCircle,
  FiMoon,
  FiEye,
  FiBarChart2,
  FiLayout,
} from 'react-icons/fi';
import { IoBluetoothOutline, IoServerOutline } from 'react-icons/io5';
import { BsApple, BsGooglePlay } from 'react-icons/bs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import health1 from '@/public/assets/images/health1.jpg';
import doctor from '@/public/assets/images/doctor.jpg';
import health2 from '@/public/assets/images/health2.jpg';

import partner1 from '@/public/assets/images/고려대의료원.png';
import partner2 from '@/public/assets/images/전남대병원.png';
import partner3 from '@/public/assets/images/세종충남대병원.png';
import partner4 from '@/public/assets/images/삼성서울병원.png';
import partner5 from '@/public/assets/images/서울아산병원.png';

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
      {subtitle && <p className="mx-auto mt-4 max-w-4xl text-lg whitespace-pre-line text-gray-600">{subtitle}</p>}
    </motion.div>
  );
};

// --- Page Component ---
const InphrRenewalPage = () => {
  return (
    <main className="bg-white antialiased">
      <HeroSection />
      <PlatformSection />
      <FeaturesSection />
      <InteractiveCoreServicesSection />
      <TrustSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

// --- Page Sections ---
const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
      >
        <Image src={health2} alt="Healthcare background" fill style={{ objectFit: 'cover' }} priority />
      </motion.div>
      <div className="absolute inset-0 z-[1] bg-black/60" />

      <div className="relative z-10 p-4 text-center text-white">
        <motion.h1
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          국내 대표
          <br />
          건강기록 통합 관리 플랫폼 inPHR
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          생애 주기별 패턴화된 개인 건강기록을 바탕으로, <br /> 소프트넷이 환자 맞춤형 정밀 의료 환경 제공에
          앞장서겠습니다.
          <br />
          inphrcare, 병원정보 시스템 자동 연동을 통해 편리한 건강 관리를 시작하세요!
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href="#"
            className="flex items-center gap-3 rounded-md bg-white/90 px-6 py-3 text-base font-semibold text-gray-800 shadow-lg backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white"
          >
            <BsGooglePlay className="h-6 w-6" /> Google Play
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-md bg-white/90 px-6 py-3 text-base font-semibold text-gray-800 shadow-lg backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white"
          >
            <BsApple className="h-6 w-6" /> App Store
          </a>
        </motion.div>
      </div>
    </div>
  );
};

const PlatformSection = () => {
  const platformFeatures = [
    { icon: FiHeart, text: 'PHR기반 개인 건강관리' },
    { icon: IoBluetoothOutline, text: '의료 디바이스 연동' },
    { icon: FiUsers, text: '생애주기별 맞춤 서비스' },
    { icon: FiTrendingUp, text: '질환별 맞춤 서비스' },
    { icon: FiLifeBuoy, text: '활동량 컨텐츠 제공' },
    { icon: IoServerOutline, text: '병원 정보 시스템 연동' },
  ];

  return (
    <Section id="platform" className="bg-gray-50">
      <AnimatedHeader
        title="inPHR 플랫폼이란?"
        subtitle={`소프트넷의 inPHR 플랫폼을 통해 병원 정보시스템 및 의료 디바이스 연동으로 통합 PHR데이터를\n 구성 합니다. 생애 주기별, 질병별, 질환별로 사용자에게 맞춤형 서비스를 제공합니다.`}
      />
      <div className="mt-20">
        <div className="flex flex-col items-center justify-center gap-8 pl-14 md:flex-row">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <FiUsers className="h-12 w-12 text-blue-600" />
            <h3 className="mt-2 text-lg font-semibold">사용자</h3>
          </motion.div>

          <FiArrowRight className="hidden h-8 w-8 text-gray-400 md:block" />

          <motion.div
            className="relative rounded-xl border bg-white p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-center text-2xl font-bold text-blue-700">inPHR Platform</h3>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
              {platformFeatures.map((feat, i) => (
                <motion.div
                  key={feat.text}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <feat.icon className="h-6 w-6 flex-shrink-0 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">{feat.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <FiArrowRight className="hidden h-8 w-8 text-gray-400 md:block" />

          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <FiHome className="h-12 w-12 text-blue-600" />
            <h3 className="mt-2 text-lg font-semibold">국내/외 의료기관</h3>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

const FeatureCard = ({
  image,
  title,
  description,
  index,
}: {
  image: StaticImageData;
  title: string;
  description: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
      <motion.div
        className="relative aspect-[16/9] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </motion.div>
      <motion.div
        className="flex flex-1 flex-col p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-3">
          <FiCheckCircle className="h-6 w-6 flex-shrink-0 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="mt-4 flex-1 leading-relaxed text-gray-600">{description}</p>
      </motion.div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      image: doctor,
      title: 'PHR 기반 개인 건강관리',
      description: '병원 진료 데이터와 사용자가 입력한 라이프로그 데이터의 통합관리가 가능합니다.',
    },
    {
      image: health1,
      title: '맞춤형 건강컨텐츠 제공',
      description: '사용자가 입력한 PHR 데이터 기반의 생애주기별, 만성질환별 맞춤형 건강 컨텐츠를 제공합니다.',
    },
    {
      image: health2,
      title: '국내·외 의료기관 허브',
      description: 'PHR 기반의 원격의료 시스템을 통해 국내·외 의료기관을 연결해줍니다.',
    },
  ];
  return (
    <Section id="features" className="bg-white">
      <AnimatedHeader
        title="inPHR은 어떤 서비스를 제공하나요?"
        subtitle="개인 건강 기기 인터페이스로 생활습관데이터, 병원진료내역데이터를 통해 발생가능한 질병을 예측하고 대처를 지원합니다."
      />
      <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </Section>
  );
};

interface TabData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  colorScheme: {
    bg: string;
    header: string;
    active: string;
    iconBg: string;
    primary: string;
  };
  messages: {
    icon: React.ElementType;
    title: string;
    content: ReactNode;
  }[];
}

const servicesTabsData: TabData[] = [
  {
    id: 'inphr',
    title: 'inPHR Platform',
    subtitle: '통합 디지털 헬스케어',
    icon: FiGrid,
    colorScheme: {
      bg: 'from-orange-50 to-orange-100',
      header: 'border-orange-200',
      active: 'data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700',
      iconBg: 'bg-orange-100',
      primary: 'bg-orange-500',
    },
    messages: [
      {
        icon: FiHelpCircle,
        title: '플랫폼이란?',
        content: '모든 건강 데이터를 하나로 연결하여 개인 맞춤형 서비스를 제공하는 통합 플랫폼입니다.',
      },
      {
        icon: FiTarget,
        title: '핵심 목표',
        content: '병원, 개인, 의료기기 간의 정보 격차를 해소하고 데이터 기반의 예방적 건강관리를 실현합니다.',
      },
    ],
  },
  {
    id: 'inphrcare',
    title: 'inPHRCare',
    subtitle: '개인 맞춤형 건강관리 플랫폼',
    icon: FiHeart,
    colorScheme: {
      bg: 'from-blue-50 to-blue-100',
      header: 'border-blue-200',
      active: 'data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700',
      iconBg: 'bg-blue-200',
      primary: 'bg-blue-500',
    },
    messages: [
      {
        icon: FiActivity,
        title: '개인 건강정보 통합관리',
        content: '병원 진료 기록부터 라이프로그까지, 흩어진 나의 건강 데이터를 한 곳에 모아 맞춤형 케어를 제공합니다.',
      },
      {
        icon: FiCheckCircle,
        title: '스마트한 건강관리',
        content: '정확한 진단, 예방 중심의 관리, 그리고 원격의료까지 — 건강한 일상을 위한 스마트한 시작입니다.',
      },
    ],
  },
  {
    id: 'inphrsym',
    title: 'inPHRSYM',
    subtitle: '정신질환 관리 서비스',
    icon: FiSmile,
    colorScheme: {
      bg: 'from-green-50 to-green-100',
      header: 'border-green-200',
      active: 'data-[state=active]:bg-green-100 data-[state=active]:text-green-700',
      iconBg: 'bg-green-200',
      primary: 'bg-green-500',
    },
    messages: [
      {
        icon: FiMoon,
        title: '정서불안과 공황장애, 이제 혼자가 아닙니다',
        content: '심리 상태를 기록하고, 공황 증상을 예측하는 AI 기반 정서관리 앱.',
      },
      {
        icon: FiEye,
        title: '일상 속 스트레스 관리',
        content: '일상 속 스트레스를 이해하고 대처할 수 있도록, 맞춤형 평가와 전문가 정보를 함께 제공합니다.',
      },
    ],
  },
  {
    id: 'compass',
    title: 'Compass',
    subtitle: '정신건강 관리를 위한 AI 플랫폼',
    icon: FiPieChart,
    colorScheme: {
      bg: 'from-purple-50 to-purple-100',
      header: 'border-purple-200',
      active: 'data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700',
      iconBg: 'bg-purple-200',
      primary: 'bg-purple-500',
    },
    messages: [
      {
        icon: FiBarChart2,
        title: '환자 상태를 한눈에',
        content: '실시간 생체정보 모니터링, 증상 변화 알림, 원격 진료까지 가능한 의료진 전용 환자관리 시스템.',
      },
      {
        icon: FiLayout,
        title: '최적화된 케어플랜',
        content: '진료 효율을 높이고, 최적화된 케어플랜 수립을 돕는 디지털 헬스 파트너입니다.',
      },
    ],
  },
];

interface TabTriggerProps {
  tab: TabData;
}

const TabTriggerComponent = ({ tab }: TabTriggerProps) => (
  <TabsTrigger
    value={tab.id}
    className={`w-full cursor-pointer justify-start rounded-lg p-4 text-left transition-all duration-300 ${tab.colorScheme.active}`}
  >
    <div className="flex items-center gap-3">
      <div
        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${tab.colorScheme.iconBg} transition-all duration-300`}
      >
        <tab.icon className={`h-5 w-5 ${tab.colorScheme.active.split(' ')[1]}`} />
      </div>
      <div>
        <div className="font-semibold">{tab.title}</div>
        <div className="text-xs text-gray-500">{tab.subtitle}</div>
      </div>
    </div>
  </TabsTrigger>
);

interface MessageBubbleProps {
  message: TabData['messages'][0];
  colorScheme: TabData['colorScheme'];
  index: number;
}

const MessageBubble = ({ message, colorScheme, index }: MessageBubbleProps) => {
  const isLeft = index % 2 === 0;
  return (
    <div className={`flex items-start gap-3 ${isLeft ? 'justify-start' : 'justify-end'}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className={`max-w-md rounded-xl p-4 shadow-sm ${isLeft ? 'bg-white' : `${colorScheme.primary} text-white`}`}
      >
        <div className="mb-2 flex items-center gap-2">
          <message.icon
            className={`h-5 w-5 flex-shrink-0 ${isLeft ? colorScheme.active.split(' ')[1] : 'text-white/80'}`}
          />
          <span className="font-semibold">{message.title}</span>
        </div>
        <p className={`text-sm leading-relaxed ${isLeft ? 'text-gray-700' : 'text-white/90'}`}>{message.content}</p>
      </motion.div>
    </div>
  );
};

interface TabContentProps {
  tab: TabData;
}

const TabContentComponent = ({ tab }: TabContentProps) => (
  <TabsContent value={tab.id} className="mt-0 h-full">
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex h-[450px] flex-col overflow-hidden rounded-lg bg-gradient-to-br ${tab.colorScheme.bg} shadow-lg`}
    >
      <div className="flex-1 space-y-4 overflow-y-auto p-6">
        {tab.messages.map((message, index) => (
          <MessageBubble key={index} message={message} colorScheme={tab.colorScheme} index={index} />
        ))}
      </div>
    </motion.div>
  </TabsContent>
);

const InteractiveCoreServicesSection = () => {
  const [activeTab, setActiveTab] = useState(servicesTabsData[0].id);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = servicesTabsData.findIndex((tab) => tab.id === currentTab);
        const nextIndex = (currentIndex + 1) % servicesTabsData.length;
        return servicesTabsData[nextIndex].id;
      });
    }, 5000);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeout(startAutoRotation, 10000); // Restart after 10s of manual interaction
  };

  useEffect(() => {
    startAutoRotation();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Section id="core-services" className="bg-gray-50">
      <AnimatedHeader title="주요 서비스" subtitle="당신의 건강한 삶을 위한 소프트넷의 핵심 솔루션을 소개합니다." />
      <div className="mt-16">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="mx-auto max-w-5xl">
          <TabsList className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {servicesTabsData.map((tab) => (
              <TabTriggerComponent key={tab.id} tab={tab} />
            ))}
          </TabsList>

          <div className="relative">
            {servicesTabsData.map((tab) => (
              <TabContentComponent key={tab.id} tab={tab} />
            ))}
          </div>
        </Tabs>
      </div>
    </Section>
  );
};

const TrustSection = () => {
  const partners = [
    { src: partner1, name: '고려대의료원' },
    { src: partner2, name: '전남대병원' },
    { src: partner3, name: '세종충남대병원' },
    { src: partner4, name: '삼성서울병원' },
    { src: partner5, name: '서울아산병원' },
  ];

  const PartnerLogos = () => (
    <>
      {partners.map((logo, index) => (
        <div key={index} className="mx-8 flex-shrink-0">
          <Image src={logo.src} alt={logo.name} height={40} className="max-h-10 w-auto object-contain" />
        </div>
      ))}
    </>
  );

  const LogoReel = ({ reverse = false, duration = '30s' }: { reverse?: boolean; duration?: string }) => (
    <div
      className="flex overflow-hidden py-4"
      style={{
        maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
      }}
    >
      <div
        className="flex flex-shrink-0"
        style={{ animation: `marquee ${duration} linear infinite ${reverse ? 'reverse' : 'normal'}` }}
      >
        <PartnerLogos />
        <PartnerLogos />
        <PartnerLogos />
        <PartnerLogos />
      </div>
    </div>
  );

  return (
    <Section className="bg-white">
      <AnimatedHeader title="이미 많은 의료기관이 선택했습니다." />
      <div className="mt-12">
        <LogoReel duration="30s" />
        {/* <LogoReel reverse duration="15s" /> */}
      </div>
      <div className="mt-16 text-center">
        <p className="text-lg font-semibold text-gray-800">정부 R&D 과제 선정</p>
        <p className="mx-auto mt-4 max-w-3xl text-gray-600">
          보건복지부, 과학기술정보통신부 등 다수 정부 프로젝트 수주를 통해 기술력과 안정성을 인정받았습니다.
        </p>
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
            className="inline-block rounded-md bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-md transition-transform hover:scale-105 hover:bg-gray-100"
          >
            무료 데모 신청
          </a>
          <a
            href="#"
            className="inline-block rounded-md bg-blue-700 px-8 py-3 text-base font-semibold text-white ring-1 ring-blue-200/50 transition-transform ring-inset hover:scale-105 hover:bg-blue-800"
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
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-evenly gap-8 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-lg font-bold">Softnet</h3>
            <p className="mt-1 text-sm text-gray-400">건강한 삶을 위한 디지털 혁신</p>
          </div>
          <div className="text-sm text-gray-300">
            <p>대표이사: 이상수 | 대표번호: 02-3446-2502 | 팩스: 02-6203-2506</p>
            <p>본사: 서울특별시 강남구 삼성로 554 예성빌딩 5층 06165</p>
            <p>연구소: 서울특별시 강남구 삼성로 554 예성빌딩 4층 06165</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white">
              이용약관
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              개인정보처리방침
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Softnet Co.,Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default InphrRenewalPage;
