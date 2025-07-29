'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Section from '../Section';
import { Typography } from '../ui/Typography';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import SectionHeader from '../SectionHeader';

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
      description: '의료기관 연동\n개인건강 기록 통합관리',
      hoverDescription: ['병원정보시스템 연동', '라이프로그 데이터 수집', '맞춤형 건강컨텐츠 제공'],
      image: '/assets/images/care_screen.png',
      color: '#4F46E5',
      bgColor: '#F9F9F9',
    },
    {
      id: 'pill',
      name: 'inPHRPILL',
      logoImage: '/assets/images/pill.png',
      description: '만성질환자 대상 복약 순응 개선 서비스',
      hoverDescription: [
        '의약품 유통 이력 관리 시스템',
        'IoT 기반 복약 알림 및 모니터링',
        '개인 맞춤형 복약관리 지침 제공',
      ],
      image: '/assets/images/pill_screen.png',
      color: '#059669',
      bgColor: '#F9F9F9',
    },
    {
      id: 'temp',
      name: 'inPHRTEMP',
      logoImage: '/assets/images/temp.png',
      description: '집에서 시작하는 안전한 열대처 서비스',
      hoverDescription: [
        '실시간 측정 체온 그래프 자동 기록 및 조회',
        '체온 측정 알람을 통한 효율적 관리',
        '사용자별 맞춤형 답변 제공하는 챗봇 상담 기능',
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
      description: '로봇 AI 기술을 활용한 정신건강 고위험군의 조기 발견 및 맞춤 중재 서비스',
      hoverDescription: [
        '지역사회 기반 데이터로 고위험군 조기 선별 및 모니터링',
        '웨어러블 밴드와 앱을 통해 생체정보 및 일상 패턴 실시간 수집',
        'CRF·EMA 설문과 라이프로그를 통합 분석하여 맞춤형 중재 지원',
      ],
      image: '/assets/images/compass_screen.png',
      color: '#7C3AED',
      bgColor: '#F9F9F9',
    },
    {
      id: 'smart',
      name: 'inPHRSMART',
      logoImage: '/assets/images/smart.png',
      description: '전염병 자가격리자용 문진 및\n 진단 시스템',
      hoverDescription: [
        '자가격리를 위한 격리 생활 가이드',
        '격리에 필요한 다양한 요청 처리',
        '증상관련 문진을 통한 의료진의 체계적 진단',
      ],
      image: '/assets/images/smart_screen.png',
      color: '#DC2626',
      bgColor: '#F9F9F9',
    },
    {
      id: 'sea',
      name: 'inPHRSEA',
      logoImage: '/assets/images/sea.png',
      description: '해저 기지 상주 연구원 이상 징후 관리 솔루션',
      hoverDescription: [
        '생체지표 추적을 통한 체계적 관리',
        '이상 징후 예측 및 선제대응',
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
      description: '정신과 응급실 환자 자타해 예측 ∙ 방지 시스템',
      hoverDescription: [
        '정신응급 환자 실시간 위치추적',
        '생체지표 추적을 통한 자타해 방지',
        '선제 알림을 통한 의료진이 신속한 대응 가능',
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
      description: '암환자의 증상 ∙ 부작용(예후) 관리 서비스',
      hoverDescription: ['주간 증상 설문을 통한 통증 관리', '증상 메모로 효율적인 진료 제공', '증상 백과 정보 제공'],
      image: '/assets/images/pro_screen.png',
      color: '#DC2626',
      bgColor: '#F9F9F9',
    },
    {
      id: 'ibd',
      name: 'inPHRIBD',
      logoImage: '/assets/images/ibd.png',
      description: '염증성 장질환자의 증상관리 서비스',
      hoverDescription: [
        '증상 설문 참여로 변화 추이 확인',
        '진료 의료진의 검증된 팁 제공',
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
      description: '당뇨 환자 대상 의무기록\n연동 관리 서비스',
      hoverDescription: [
        '혈당, 지질, 간기능 검사 연동',
        '만성질환 관리 컨텐츠 제공',
        '블루투스 연동을 통한 혈당 및 혈압 자동 관리',
      ],
      image: '/assets/images/diab_screen.png',
      color: '#F97316',
      bgColor: '#F9F9F9',
    },
    {
      id: 'sym',
      name: 'inPHRSYM',
      logoImage: '/assets/images/sym.png',
      description: '정서불안 ∙ 공황장애 증상 관리 서비스',
      hoverDescription: [' 정서불안 자가 진단 서비스', '증상 설문 참여로 예측 및 관리', '디지털 치료 요법 제공'],
      image: '/assets/images/sym_screen.png',
      color: '#10B981',
      bgColor: '#F9F9F9',
    },
    {
      id: 'spine',
      name: 'inPHRSPINE',
      logoImage: '/assets/images/spine.png',
      description: '목 ∙ 척추 통증 예방 및 관리 서비스',
      hoverDescription: ['맞춤형 목척추 운동', '도구 활용 운동을 통한 척추 관리', '자세교정 바른 자세 가이드 제공'],
      image: '/assets/images/spine_screen.png',
      color: '#F59E0B',
      bgColor: '#F9F9F9',
    },
    {
      id: 'child',
      name: 'inPHRCHILD',
      logoImage: '/assets/images/child.png',
      description: '성장기 어린이 비만 관리 서비스',
      hoverDescription: [
        '올바른 식습관 및 운동량 분석 제공',
        '정기 내원 검사 결과 바탕의 맞춤형 목표 제시',
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
      description: 'inPHR 플랫폼 사용자 대상 의료진용 주치의 서비스',
      hoverDescription: ['밀착형 의료환경 제공', '지속적 커뮤니케이션', 'inPHR PRO 연동 기능 제공'],
      image: '/assets/images/doc_screen.png',
      color: '#2563EB',
      bgColor: '#F9F9F9',
    },
    {
      id: 'live',
      name: 'inPHRLIVE',
      logoImage: '/assets/images/live.png',
      description: '다자간 의료용 화상 시스템',
      hoverDescription: [
        '다자간 의료인 전용 화상 시스템',
        '시공간 제약 없는 협진 시스템',
        '제공 원격자 환자의 지속적 pre & post care 기능',
      ],
      image: '/assets/images/live_screen.png',
      color: '#6B7280',
      bgColor: '#F9F9F9',
    },
    {
      id: 'dash',
      name: 'inPHRDASH',
      logoImage: '/assets/images/dash.png',
      description: 'Covid 19 생활치료센터 중증도 예측 모니터링 시스템',
      hoverDescription: [
        'Covid 19 생활치료센터 시스템',
        '비대면 환자 진료(화상, 생체정보)',
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
                width={170}
                height={50}
                className="h-auto max-h-[20px] w-auto max-w-[100px] object-contain sm:max-h-[24px] sm:max-w-[120px] xl:max-h-[34px] xl:max-w-[170px]"
              />
            </div>
            <Typography
              variant="body2"
              className="max-w-[140px] text-xs leading-tight whitespace-pre-line text-gray-700 sm:max-w-[160px] sm:text-sm xl:max-w-[290px] xl:text-base"
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
                className="h-auto max-h-[20px] w-auto max-w-[100px] object-contain sm:max-h-[24px] sm:max-w-[120px] xl:max-h-[34px] xl:max-w-[177px]"
              />
            </div>
            <div className="space-y-1 xl:space-y-2">
              {service.hoverDescription.map((desc, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Typography variant="body2" className="text-xs leading-tight text-gray-100 sm:text-sm xl:text-base">
                    ‣ {desc}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          {/* 호버 상태 - 자세히 보기 버튼 */}
          <div className="absolute right-6 bottom-6">
            <motion.button
              className="flex items-center gap-2 rounded-full border border-blue-500 bg-white px-3 py-1 text-blue-500 transition-colors hover:bg-blue-50 sm:px-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Typography variant="body2" className="cursor-pointer text-xs text-blue-500 sm:text-base">
                자세히 보기
              </Typography>
              <Image src="/assets/images/arrow-right.png" alt="arrow-right" width={16} height={16} className="pb-1" />
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
    { id: 'personal', label: '개인 건강', icon: '/assets/images/personal.png' },
    { id: 'monitoring', label: '실시간 모니터링', icon: '/assets/images/monitoring.png' },
    { id: 'chronic', label: '만성질환', icon: '/assets/images/chronic.png' },
    { id: 'medical', label: '의료진', icon: '/assets/images/medical.png' },
  ];

  return (
    <Section className={className}>
      <SectionHeader title={title} subtitle={description} titleClassName="text-blue-primary text-[22px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Tabs defaultValue="personal" value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* 탭 버튼들 */}
          <div className="mb-9 flex justify-center">
            <TabsList className="flex gap-8 bg-transparent p-0">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="relative w-fit cursor-pointer border-0 bg-transparent text-base font-medium text-gray-50 hover:text-gray-700 data-[state=active]:bg-transparent data-[state=active]:font-bold data-[state=active]:text-gray-100 data-[state=active]:shadow-none"
                >
                  <Image src={tab.icon} alt={tab.label} width={20} height={20} />
                  <Typography
                    variant="body1"
                    weight={activeTab === tab.id ? 'bold' : 'medium'}
                    className="text-inherit"
                  >
                    {tab.label}
                  </Typography>
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 h-[2px] w-[110%] -translate-x-1/2 bg-gray-900"
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
    </Section>
  );
}
