'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

interface TabData {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  headerIcon: string;
  headerTitle: string;
  headerSubtitle: string;
  colorScheme: {
    bg: string;
    header: string;
    active: string;
    iconBg: string;
    primary: string;
    border: string;
  };
  messages: {
    icon: string;
    title: string;
    content: string;
    alignment: 'left' | 'right';
    iconColor?: string;
    titleColor?: string;
  }[];
}

const tabsData: TabData[] = [
  {
    id: 'phr',
    title: '개인건강기록(PHR)',
    subtitle: '통합 건강정보 관리',
    icon: '📊',
    headerIcon: '📊',
    headerTitle: '개인건강기록(PHR) 관리',
    headerSubtitle: '모든 건강정보를 안전하게 통합 관리',
    colorScheme: {
      bg: 'from-blue-50 to-blue-100',
      header: 'border-blue-200',
      active: 'data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700',
      iconBg: 'bg-blue-100',
      primary: 'bg-blue-500',
      border: 'bg-blue-500',
    },
    messages: [
      {
        icon: '📋',
        title: '건강 데이터 통합',
        content: '검진결과, 처방전, 생체신호 등 모든 건강정보를 한곳에서 관리합니다.',
        alignment: 'left',
        iconColor: 'text-blue-600',
        titleColor: 'text-blue-800',
      },
      {
        icon: '🔒',
        title: '안전한 보관',
        content: '의료급 보안 시스템으로 개인정보를 완벽하게 보호합니다.',
        alignment: 'right',
      },
      {
        icon: '📱',
        title: '언제 어디서나 접근',
        content: '모바일과 웹에서 언제든지 내 건강정보에 접근할 수 있습니다.',
        alignment: 'left',
        iconColor: 'text-blue-600',
        titleColor: 'text-blue-800',
      },
    ],
  },
  {
    id: 'ai-analysis',
    title: 'AI 기반 건강분석',
    subtitle: '맞춤형 건강 인사이트',
    icon: '🤖',
    headerIcon: '🤖',
    headerTitle: 'AI 기반 건강분석',
    headerSubtitle: '개인 맞춤형 건강 인사이트 제공',
    colorScheme: {
      bg: 'from-green-50 to-green-100',
      header: 'border-green-200',
      active: 'data-[state=active]:bg-green-50 data-[state=active]:text-green-700',
      iconBg: 'bg-green-100',
      primary: 'bg-green-500',
      border: 'bg-green-500',
    },
    messages: [
      {
        icon: '📈',
        title: '건강 위험도 예측',
        content: 'AI 패턴 분석을 통해 건강 위험 요소를 미리 예측합니다.',
        alignment: 'left',
        iconColor: 'text-green-600',
        titleColor: 'text-green-800',
      },
      {
        icon: '💡',
        title: '맞춤 솔루션',
        content: '개인별 건강 상태에 맞는 개선 방안을 제안합니다.',
        alignment: 'right',
      },
      {
        icon: '⚠️',
        title: '조기 경보 시스템',
        content: '이상 징후를 조기에 발견하여 즉시 알려드립니다.',
        alignment: 'left',
        iconColor: 'text-green-600',
        titleColor: 'text-green-800',
      },
    ],
  },
  {
    id: 'platform',
    title: '통합 헬스케어 플랫폼',
    subtitle: '병원·약국·보험 연동',
    icon: '🏥',
    headerIcon: '🏥',
    headerTitle: '통합 헬스케어 플랫폼',
    headerSubtitle: '헬스케어 생태계 원스톱 서비스',
    colorScheme: {
      bg: 'from-purple-50 to-purple-100',
      header: 'border-purple-200',
      active: 'data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700',
      iconBg: 'bg-purple-100',
      primary: 'bg-purple-500',
      border: 'bg-purple-500',
    },
    messages: [
      {
        icon: '🏥',
        title: '의료기관 연동',
        content: '병원 예약부터 진료기록까지 자동 동기화됩니다.',
        alignment: 'left',
        iconColor: 'text-purple-600',
        titleColor: 'text-purple-800',
      },
      {
        icon: '💊',
        title: '약국 서비스',
        content: '처방전 관리와 복용 알림까지 한번에 해결합니다.',
        alignment: 'right',
      },
      {
        icon: '🛡️',
        title: '보험 연계',
        content: '실손보험 청구와 건강검진 혜택을 쉽게 이용하세요.',
        alignment: 'left',
        iconColor: 'text-purple-600',
        titleColor: 'text-purple-800',
      },
    ],
  },
  {
    id: 'medical-connect',
    title: '의료진 연결 서비스',
    subtitle: '전문의 상담 및 네트워크',
    icon: '👨‍⚕️',
    headerIcon: '👨‍⚕️',
    headerTitle: '의료진 연결 서비스',
    headerSubtitle: '전문 의료진과 직접 소통',
    colorScheme: {
      bg: 'from-orange-50 to-orange-100',
      header: 'border-orange-200',
      active: 'data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700',
      iconBg: 'bg-orange-100',
      primary: 'bg-orange-500',
      border: 'bg-orange-500',
    },
    messages: [
      {
        icon: '📱',
        title: '화상 진료',
        content: '전문의와 실시간 화상 상담이 가능합니다.',
        alignment: 'left',
        iconColor: 'text-orange-600',
        titleColor: 'text-orange-800',
      },
      {
        icon: '🏥',
        title: '의료진 네트워크',
        content: '신뢰할 수 있는 전국 의료진과 연결됩니다.',
        alignment: 'right',
      },
      {
        icon: '⏰',
        title: '24시간 지원',
        content: '언제든지 응급상황에 대응할 수 있습니다.',
        alignment: 'left',
        iconColor: 'text-orange-600',
        titleColor: 'text-orange-800',
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
    orientation="vertical"
    className={`w-full cursor-pointer justify-start rounded-lg p-4 text-left ${tab.colorScheme.active}`}
  >
    <div className="flex items-center gap-3">
      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${tab.colorScheme.iconBg}`}>
        <span className="text-lg">{tab.icon}</span>
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
}

const MessageBubble = ({ message, colorScheme }: MessageBubbleProps) => (
  <div className={`flex justify-${message.alignment === 'left' ? 'start' : 'end'}`}>
    <div
      className={`min-h-28 max-w-md min-w-80 rounded-2xl p-4 shadow-sm ${
        message.alignment === 'left' ? 'bg-white' : `${colorScheme.primary} text-white`
      }`}
    >
      <div className="mb-2 flex items-center gap-2">
        <span className={message.iconColor || ''}>{message.icon}</span>
        <span className={`font-semibold ${message.titleColor || ''}`}>{message.title}</span>
      </div>
      <p className={`text-sm ${message.alignment === 'left' ? 'text-gray-700' : ''}`}>{message.content}</p>
    </div>
  </div>
);

interface TabContentProps {
  tab: TabData;
}

const TabContentComponent = ({ tab }: TabContentProps) => (
  <TabsContent value={tab.id} className="mt-0 h-full">
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex h-full flex-col rounded-lg bg-gradient-to-br ${tab.colorScheme.bg} shadow-sm`}
    >
      {/* Header */}
      <div className={`flex items-center gap-3 border-b ${tab.colorScheme.header} bg-white/80 p-6 backdrop-blur-sm`}>
        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${tab.colorScheme.primary}`}>
          <span className="text-xl text-white">{tab.headerIcon}</span>
        </div>
        <div>
          <h2 className="text-xl font-bold">{tab.headerTitle}</h2>
          <p className="text-sm">{tab.headerSubtitle}</p>
        </div>
      </div>

      {/* Chat-like Content */}
      <div className="flex-1 space-y-4 overflow-auto p-6">
        {tab.messages.map((message, index) => (
          <MessageBubble key={index} message={message} colorScheme={tab.colorScheme} />
        ))}
      </div>
    </motion.div>
  </TabsContent>
);

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = tabsData.findIndex((tab) => tab.id === currentTab);
        const nextIndex = (currentIndex + 1) % tabsData.length;
        return tabsData[nextIndex].id;
      });
    }, 5000);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);

    // 자동 순환 멈추기
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // 10초 후 자동 순환 재시작
    setTimeout(() => {
      startAutoRotation();
    }, 10000);
  };

  useEffect(() => {
    startAutoRotation();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="flex bg-gray-50 p-6">
      <Tabs value={activeTab} onValueChange={handleTabChange} orientation="vertical" className="flex w-full gap-6">
        {/* Left Sidebar - Tab List */}
        <div className="w-80">
          <TabsList
            orientation="vertical"
            className="h-full w-full flex-col items-stretch gap-4 bg-white p-4 shadow-sm"
          >
            {tabsData.map((tab) => (
              <TabTriggerComponent key={tab.id} tab={tab} />
            ))}
          </TabsList>
        </div>

        {/* Right Content Area - Messenger Style */}
        <div className="flex-1">
          {tabsData.map((tab) => (
            <TabContentComponent key={tab.id} tab={tab} />
          ))}
        </div>
      </Tabs>
    </div>
  );
}
