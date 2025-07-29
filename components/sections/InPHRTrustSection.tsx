import React from 'react';
import Image from 'next/image';

import Section from '@/components/Section';
import SectionHeader from '../SectionHeader';

const allPartners = Array.from({ length: 25 }, (_, i) => ({
  src: `/assets/images/banner${i + 1}.png`,
}));

const topPartners = allPartners.slice(0, 13);
const bottomPartners = allPartners.slice(13);

const PartnerLogos = ({ partners }: { partners: { src: string }[] }) => (
  <>
    {partners.map((logo, index) => (
      <div key={index} className="mx-8 flex-shrink-0">
        <Image src={logo.src} alt="" width={150} height={45} className="h-[45px] w-auto object-contain opacity-50" />
      </div>
    ))}
  </>
);

const LogoReel = ({
  partners,
  reverse = false,
  duration = '120s',
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
