'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedHeader from '../AnimatedHeader';
import Section from '../Section';
import { Typography } from '../ui/Typography';
import SectionHeader from '../SectionHeader';

interface ServiceItem {
  id: string;
  label: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    transform?: string;
  };
  angle: number;
  lineLength: string;
  linePosition?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    transform?: string;
  };
  dotPosition: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    transform?: string;
  };
}

const services: ServiceItem[] = [
  {
    id: 'service1',
    label: '병원 정보 시스템 연동',
    position: { top: '70%', left: '0%', transform: 'translate(-10%, -70%)' },
    angle: -90,
    lineLength: 'h-5.7',
    linePosition: { top: '-35%', right: '-0.6%', transform: 'translateX(-50%)' },
    dotPosition: { top: '100%', left: '50%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'service2',
    label: '맞춤형 콘텐츠 제공',
    position: { top: '35%', left: '10%', transform: 'translate(-50%, -50%)' },
    angle: -45,
    lineLength: 'h-5.4',
    linePosition: { top: '-34%', right: '-0.5%', transform: 'translateX(-50%)' },
    dotPosition: { top: '100%', left: '50%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'service3',
    label: '질병·질환별 서비스 제공',
    position: { top: '10%', left: '25%', transform: 'translate(-50%, -50%)' },
    angle: -20,
    lineLength: 'h-6.4',
    linePosition: { top: '-10%', right: '40%', transform: 'translateX(-50%)' },
    dotPosition: { top: '100%', left: '50%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'service4',
    label: 'PHR 기반 개인건강관리',
    position: { top: '10%', right: '25%', transform: 'translate(50%, -50%)' },
    angle: 20,
    lineLength: 'h-6.4',
    linePosition: { top: '-9.7%', left: '40%', transform: 'translateX(-50%)' },
    dotPosition: { top: '100%', left: '50%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'service5',
    label: '생애 주기 맞춤 서비스 제공',
    position: { top: '35%', right: '4%', transform: 'translate(50%, -50%)' },
    angle: 45,
    lineLength: 'h-5.3',
    linePosition: { top: '-34%', left: '0.5%', transform: 'translateX(-50%)' },
    dotPosition: { top: '100%', left: '50%', transform: 'translate(-50%, -50%)' },
  },
  {
    id: 'service6',
    label: '의료 디바이스 연동',
    position: { top: '70%', right: '2%', transform: 'translate(10%, -50%)' },
    angle: 90,
    lineLength: 'h-5.7',
    linePosition: { top: '-35%', left: '-0.3%', transform: 'translateX(-50%)' },
    dotPosition: { top: '100%', left: '50%', transform: 'translate(-50%, -50%)' },
  },
];

export default function InPHRWhatIsPlatformSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section>
      <SectionHeader
        title="What is an inPHR platform?"
        subtitle="소프트넷의 inPHR 플랫폼을 통해 병원 정보시스템 및 의료 디바이스 연동으로 통합 PHR 데이터를 구성합니다.\n생애 주기별, 질병별, 질환별로 사용자에게 맞춤형 서비스를 제공합니다."
        titleClassName="text-blue-primary text-[22px]"
      />
      <motion.div
        className="relative mx-auto h-[400px] w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* 중앙 로고 */}
        <motion.div
          className="absolute top-[75%] left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center"
          variants={itemVariants}
        >
          <Image src="/assets/images/logo.svg" alt="inPHR Platform Logo" width={64} height={72} />
          <Typography variant="h4" weight="bold" textColor="black" className="mt-2 text-5xl leading-none">
            inPHR
          </Typography>
          <Typography variant="h5" weight="semibold" className="text-blue-primary" fontSize="4xl">
            Platform
          </Typography>
        </motion.div>

        {/* 반원형 아치 */}
        <motion.div
          className="absolute top-1/2 left-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-[20%] transform rounded-t-[355px] border border-[#5991FF]/[0.34] shadow-[#92B7FF]/[0.41]"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="absolute top-0 left-0 h-full w-full rounded-t-[355px] border border-[#5991FF]/[0.64] shadow-[#92B7FF]/[0.41]"
            style={{ transform: 'scale(0.89)' }}
          />
          <div
            className="absolute top-0 left-0 h-full w-full rounded-t-[355px] bg-gradient-to-r from-[#5991FF] to-[#5991FF]/[0.64] p-4 pb-0"
            style={{ transform: 'scale(0.78)' }}
          >
            <div className="h-full w-full rounded-t-[355px] bg-white" />
          </div>
        </motion.div>

        {/* 서비스 아이템들 */}
        {services.map((service) => {
          const { transform: lineTransform, ...linePos } = service.linePosition || {};
          const lineStyle = {
            height: '100%',
            transform: `${lineTransform || ''} rotate(${service.angle}deg)`,
            transformOrigin: 'top center',
            ...linePos,
          };

          return (
            <motion.div key={service.id} className="absolute" style={service.position} variants={itemVariants}>
              <div className="flex flex-col items-center">
                <div className="border-blue-primary rounded-full border-3 bg-white px-4 py-[5px] leading-none shadow-md">
                  <Typography
                    variant="body2"
                    weight="semibold"
                    align="center"
                    className="text-blue-primary whitespace-nowrap"
                  >
                    {service.label}
                  </Typography>
                </div>
                <div className="relative mt-2 w-full" style={{ height: service.lineLength.replace('h-', '') + 'rem' }}>
                  <div className="bg-blue-primary absolute w-[3px]" style={lineStyle}>
                    <div
                      className="border-blue-primary absolute h-4 w-4 rounded-full border-3 bg-white"
                      style={{ ...service.dotPosition }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
