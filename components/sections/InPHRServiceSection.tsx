'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import AnimatedHeader from '../AnimatedHeader';
import Section from '../Section';
import { Typography } from '../ui/Typography';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

interface ServiceCard {
  id: string;
  name: string;
  logoImage: string;
  description: string;
  hoverDescription: string[];
  image: string;
  color: string;
  bgColor?: string;
}

interface InPHRServiceSectionProps {
  title?: string;
  description?: string;
  className?: string;
}

const serviceData = {
  personal: [
    {
      id: 'care',
      name: 'inPHRCARE',
      logoImage: '/assets/images/care.png',
      description: '의료기관 맞춤\n개인건강기록 플랫폼',
      hoverDescription: [
        '지역사회 기반 바이터크 고허원 조치 선별 및 모니터링',
        '네어러물 센드쇼 염플 통해 상계점갈 및 일상 리파 실시간 수집',
        'CRF EMA 실문과 라이프로그를 통합 분석하여 맞춤형 중재 지원',
      ],
      image: '/assets/images/care_screen.png',
      color: '#4F46E5',
      bgColor: '#F9F9F9',
    },
    {
      id: 'pill',
      name: 'inPHRPILL',
      logoImage: '/assets/images/pill.png',
      description: '만성질환자 대상 복약 순서 개선 서비스',
      hoverDescription: [
        '자가적리솔 위한 작업 생활 가이드',
        '처리에 필요한 다양한 요청 처리',
        '출산관련 문진을 통한 의료진의 체계적 진단',
      ],
      image: '/assets/images/pill_screen.png',
      color: '#059669',
      bgColor: '#F9F9F9',
    },
    {
      id: 'temp',
      name: 'inPHRTEMP',
      logoImage: '/assets/images/temp.png',
      description: '실시간 사지체온 연동한 체온기 서비스',
      hoverDescription: [
        '생체지표 측적을 통한 체계적 관리',
        '이상 징후 예측 및 상세대응',
        '상주 인원 맞춤 비대면 의료서비스',
      ],
      image: '/assets/images/temp_screen.png',
      color: '#7C3AED',
      bgColor: '#F9F9F9',
    },
  ],
  monitoring: [
    {
      id: 'compass',
      name: 'COMPASS',
      logoImage: '/assets/images/compass.png',
      description: '실무 AI 기술을 활용한 첨단의료 고객의 증가 결과 및 변화 종합 예측 서비스',
      hoverDescription: [
        '지역사회 기반 바이터크 고허원 조치 선별 및 모니터링',
        '네어러물 센드쇼 염플 통해 상계점갈 및 일상 리파 실시간 수집',
        'CRF EMA 실문과 라이프로그를 통합 분석하여 맞춤형 중재 지원',
      ],
      image: '/assets/images/compass_screen.png',
      color: '#7C3AED',
      bgColor: '#F9F9F9',
    },
    {
      id: 'smart',
      name: 'inPHRSMART',
      logoImage: '/assets/images/smart.png',
      description: '건강한 치간관리로 효과적 전담 시스템',
      hoverDescription: [
        '자가적리솔 위한 작업 생활 가이드',
        '처리에 필요한 다양한 요청 처리',
        '출산관련 문진을 통한 의료진의 체계적 진단',
      ],
      image: '/assets/images/smart_screen.png',
      color: '#DC2626',
      bgColor: '#F9F9F9',
    },
    {
      id: 'sea',
      name: 'inPHRSEA',
      logoImage: '/assets/images/sea.png',
      description: '해외 지기 상주 연금의 이상 웅대 관리 플랫폼',
      hoverDescription: [
        '생체지표 측적을 통한 체계적 관리',
        '이상 징후 예측 및 상세대응',
        '상주 인원 맞춤 비대면 의료서비스',
      ],
      image: '/assets/images/sea_screen.png',
      color: '#2563EB',
      bgColor: '#F9F9F9',
    },
    {
      id: 'mental',
      name: 'inPHRMENTAL',
      logoImage: '/assets/images/mental.png',
      description: '정신과 공급자 현지 사자와 메뉴 방지 시스템',
      hoverDescription: [
        '정신응급 환자 실시간 위기조치',
        '생체지표 측적을 통한 자데해 방지',
        '신체 알림을 통한 의료진이 신속한 대응 가능',
      ],
      image: '/assets/images/mental_screen.png',
      color: '#F59E0B',
      bgColor: '#F9F9F9',
    },
  ],
  chronic: [
    {
      id: 'pro',
      name: 'inPHRPRO',
      logoImage: '/assets/images/pro.png',
      description: '전문의 증상 - 부작용(부터) 관리 서비스',
      hoverDescription: ['주간 증상 설문을 통한 통증 관리', '증상 매드로 운동지안 진료 제공', '증상 베화 진단 제공'],
      image: '/assets/images/pro_screen.png',
      color: '#DC2626',
      bgColor: '#F9F9F9',
    },
    {
      id: 'ibd',
      name: 'inPHRIBD',
      logoImage: '/assets/images/ibd.png',
      description: '염증성 장질환의 활성화실 서비스',
      hoverDescription: [
        '증상 설문 참여로 변화 추이 확인',
        '진료 의료진의 칠증된 담 제공',
        '라이프로그 및 진료내역 관리',
      ],
      image: '/assets/images/ibd_screen.png',
      color: '#2563EB',
      bgColor: '#F9F9F9',
    },
    {
      id: 'diab',
      name: 'inPHRDIAB',
      logoImage: '/assets/images/diab.png',
      description: '각양 혈당질 부작용기를 연동 관리 서비스',
      hoverDescription: [
        '혈당, 지질, 간기능 검사 연동',
        '맞춤형한 관리 컨텐츠 제공',
        '블루투스 연동을 통한 일일 및 월일 저흡 관리',
      ],
      image: '/assets/images/diab_screen.png',
      color: '#F97316',
      bgColor: '#F9F9F9',
    },
    {
      id: 'sym',
      name: 'inPHRSYM',
      logoImage: '/assets/images/sym.png',
      description: '건서유기 - 공방질에 연리 서비스',
      hoverDescription: ['정신물리 자가 진단 서비스', '증상 설문 참여로 예측 및 관리', '디지털 치료 요법 제공'],
      image: '/assets/images/sym_screen.png',
      color: '#10B981',
      bgColor: '#F9F9F9',
    },
    {
      id: 'spine',
      name: 'inPHRSPINE',
      logoImage: '/assets/images/spine.png',
      description: '혁- 룰수 등에 맞 관리 서비스',
      hoverDescription: ['맞춤형 목적별 운동', '도구 활물 운동을 통한 척추 관리', '자세교정 비표 자세 가이드 제공'],
      image: '/assets/images/spine_screen.png',
      color: '#F59E0B',
      bgColor: '#F9F9F9',
    },
    {
      id: 'child',
      name: 'inPHRCHILD',
      logoImage: '/assets/images/child.png',
      description: '성장기 이미터 미과 관리 서비스',
      hoverDescription: [
        '울비벤 식습관 및 운동량 분석 제공',
        '정기 내원 검사 결과 비교와 맞춤형 목표 제시',
        '체중 입력을 통한 비만지수 관리 및 의료진 모니터링',
      ],
      image: '/assets/images/child_screen.png',
      color: '#EC4899',
      bgColor: '#F9F9F9',
    },
  ],
  medical: [
    {
      id: 'doc',
      name: 'inPHRDOC',
      logoImage: '/assets/images/doc.png',
      description: 'inPHR 플랫폼 새로 대상 의료진을 추진 서비스',
      hoverDescription: ['일학형 의료원칭 제공', '지촉적 커뮤니케이션', 'inPHR PRO 연동 기능 제공'],
      image: '/assets/images/doc_screen.png',
      color: '#2563EB',
      bgColor: '#F9F9F9',
    },
    {
      id: 'live',
      name: 'inPHRLIVE',
      logoImage: '/assets/images/live.png',
      description: '다지털 의료을 향상 시스템',
      hoverDescription: [
        '다차간 의료진 전용 화상 시스템',
        '시공간 제약 없는 원격 시스템',
        '체급 원작화 화상의 시촉적 pre & post care 기능',
      ],
      image: '/assets/images/live_screen.png',
      color: '#6B7280',
      bgColor: '#F9F9F9',
    },
    {
      id: 'dash',
      name: 'inPHRDASH',
      logoImage: '/assets/images/dash.png',
      description: 'Covid 19 생활지원센터 중심으로 예측 모니터링 시스템',
      hoverDescription: [
        'Covid 19 생활지원센터 시스템',
        '비대면 환자 진료(화상, 생체원보)',
        '스마트 모니터링을 통한 위험 감지',
      ],
      image: '/assets/images/dash_screen.png',
      color: '#2563EB',
      bgColor: '#F9F9F9',
    },
  ],
};

const ServiceCard = ({ service, index }: { service: ServiceCard; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative h-[240px] w-[240px] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg sm:h-[280px] sm:w-[280px] xl:h-[320px] xl:w-[320px]"
      style={{ backgroundColor: isHovered ? '#EBF4FF' : service.bgColor || '#F9F9F9' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <>
          {/* 기본 상태 - 로고와 설명 */}
          <div className="absolute top-6 left-6 z-10">
            <div className="mb-3 flex items-center gap-2">
              <Image
                src={service.logoImage}
                alt={service.name}
                width={120}
                height={24}
                className="h-auto max-h-[20px] w-auto max-w-[100px] object-contain sm:max-h-[24px] sm:max-w-[120px] xl:max-h-[28px] xl:max-w-[140px]"
              />
            </div>
            <Typography
              variant="body2"
              className="max-w-[140px] text-xs leading-tight whitespace-pre-line text-gray-700 sm:max-w-[160px] sm:text-sm xl:max-w-[180px]"
            >
              {service.description}
            </Typography>
          </div>

          {/* 기본 상태 - 우하단 스크린 이미지 */}
          <div className="absolute right-4 bottom-4 overflow-hidden rounded-lg">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative h-[120px] w-[125px] sm:h-[160px] sm:w-[166px] xl:h-[200px] xl:w-[207px]"
            >
              <Image src={service.image} alt={service.name} fill className="object-cover object-center" />
            </motion.div>
          </div>
        </>
      ) : (
        <>
          {/* 호버 상태 - 로고와 설명 목록 */}
          <div className="absolute top-6 right-6 left-6 z-10">
            <div className="mb-4 flex items-center gap-2">
              <Image
                src={service.logoImage}
                alt={service.name}
                width={120}
                height={24}
                className="h-auto max-h-[20px] w-auto max-w-[100px] object-contain sm:max-h-[24px] sm:max-w-[120px] xl:max-h-[28px] xl:max-w-[140px]"
              />
            </div>
            <div className="space-y-1 xl:space-y-2">
              {service.hoverDescription.map((desc, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Typography variant="body2" className="text-xs leading-tight text-gray-700 sm:text-xs xl:text-sm">
                    • {desc}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          {/* 호버 상태 - 자세히 보기 버튼 */}
          <div className="absolute right-6 bottom-6">
            <motion.button
              className="flex items-center gap-2 rounded-full border border-blue-500 bg-white px-3 py-2 text-blue-500 transition-colors hover:bg-blue-50 sm:px-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Typography variant="body2" className="text-xs text-blue-500 sm:text-sm">
                자세히 보기
              </Typography>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="sm:h-4 sm:w-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default function InPHRServiceSection({
  title = 'inPHR Service',
  description = '질환별 건강관리와 의료진 전용 기능을 모두 제공합니다.\n만성질환, 개인 건강, 환자 상태 실시간 확인까지, inPHR 플랫폼에서 가능합니다.',
  className = '',
}: InPHRServiceSectionProps) {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: '개인 건강' },
    { id: 'monitoring', label: '실시간 모니터링' },
    { id: 'chronic', label: '만성질환' },
    { id: 'medical', label: '의료진' },
  ];

  return (
    <Section className={className}>
      <div className="text-center">
        <AnimatedHeader text={title} className="text-blue-primary mb-4 text-center" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <Typography
            variant="body1"
            align="center"
            className="mx-auto max-w-2xl leading-relaxed whitespace-pre-line text-gray-600"
          >
            {description}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Tabs defaultValue="personal" value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* 탭 버튼들 */}
            <div className="mb-12 flex justify-center">
              <TabsList className="grid w-fit grid-cols-4 gap-8 bg-transparent p-0">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="relative border-0 bg-transparent px-4 py-3 text-base font-medium text-gray-500 hover:text-gray-700 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
                  >
                    <Typography variant="body1" weight="medium" className="text-inherit">
                      {tab.label}
                    </Typography>
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-900"
                        layoutId="activeServiceTab"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* 탭 콘텐츠 */}
            {Object.entries(serviceData).map(([key, services]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-wrap justify-center gap-6"
                >
                  {services.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} />
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </Section>
  );
}
