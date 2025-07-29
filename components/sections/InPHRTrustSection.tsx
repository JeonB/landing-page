import React, { ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import banner1 from '@/public/assets/images/banner1.png';
import banner2 from '@/public/assets/images/banner2.png';
import banner3 from '@/public/assets/images/banner3.png';
import banner4 from '@/public/assets/images/banner4.png';
import banner5 from '@/public/assets/images/banner5.png';
import banner6 from '@/public/assets/images/banner6.png';
import banner7 from '@/public/assets/images/banner7.png';
import banner8 from '@/public/assets/images/banner8.png';
import banner9 from '@/public/assets/images/banner9.png';
import banner10 from '@/public/assets/images/banner10.png';
import banner11 from '@/public/assets/images/banner11.png';
import banner12 from '@/public/assets/images/banner12.png';
import banner13 from '@/public/assets/images/banner13.png';
import banner14 from '@/public/assets/images/banner14.png';
import banner15 from '@/public/assets/images/banner15.png';
import banner16 from '@/public/assets/images/banner16.png';
import banner17 from '@/public/assets/images/banner17.png';
import banner18 from '@/public/assets/images/banner18.png';
import banner19 from '@/public/assets/images/banner19.png';
import banner20 from '@/public/assets/images/banner20.png';
import banner21 from '@/public/assets/images/banner21.png';
import banner22 from '@/public/assets/images/banner22.png';
import banner23 from '@/public/assets/images/banner23.png';
import banner24 from '@/public/assets/images/banner24.png';
import banner25 from '@/public/assets/images/banner25.png';
import AnimatedHeader from '@/components/AnimatedHeader';
import Section from '@/components/Section';
import { Typography } from '../ui';
import SectionHeader from '../SectionHeader';

const allPartners = [
  { src: banner1 },
  { src: banner2 },
  { src: banner3 },
  { src: banner4 },
  { src: banner5 },
  { src: banner6 },
  { src: banner7 },
  { src: banner8 },
  { src: banner9 },
  { src: banner10 },
  { src: banner11 },
  { src: banner12 },
  { src: banner13 },
  { src: banner14 },
  { src: banner15 },
  { src: banner16 },
  { src: banner17 },
  { src: banner18 },
  { src: banner19 },
  { src: banner20 },
  { src: banner21 },
  { src: banner22 },
  { src: banner23 },
  { src: banner24 },
  { src: banner25 },
];

const topPartners = allPartners.slice(0, 13);
const bottomPartners = allPartners.slice(13);

const PartnerLogos = ({ partners }: { partners: { src: any }[] }) => (
  <>
    {partners.map((logo, index) => (
      <div key={index} className="mx-8 flex-shrink-0">
        <Image src={logo.src} alt="" height={45} className="h-[45px] w-auto object-contain opacity-50" />
      </div>
    ))}
  </>
);

const LogoReel = ({
  partners,
  reverse = false,
  duration = '60s',
}: {
  partners: { src: any }[];
  reverse?: boolean;
  duration?: string;
}) => (
  <div
    className="flex overflow-hidden"
    style={{
      maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
    }}
  >
    <div
      className="flex flex-shrink-0"
      style={{ animation: `marquee ${duration} linear infinite ${reverse ? 'reverse' : 'normal'}` }}
    >
      <PartnerLogos partners={partners} />
      <PartnerLogos partners={partners} />
      <PartnerLogos partners={partners} />
      <PartnerLogos partners={partners} />
    </div>
  </div>
);

export const TrustSection = () => {
  return (
    <Section className="bg-white">
      <div className="mt-12 space-y-15">
        <LogoReel partners={topPartners} duration="40s" />
        <SectionHeader
          title="함께하는 의료기관 및 공공기관"
          subtitle="inPHR은 국내 50곳 이상의 공공기관 및 의료기관과 함께하며,\n 더 많은 사람들이 신뢰할 수 있는 헬스케어 서비스를 만들어가고 있습니다."
          titleClassName="text-blue-primary text-[22px]"
        />
        <LogoReel partners={bottomPartners} reverse duration="50s" />
      </div>
    </Section>
  );
};
