import type { Meta, StoryObj } from '@storybook/react';
import InPHRHeroSection from './InPHRHeroSection';

const meta: Meta<typeof InPHRHeroSection> = {
  title: 'Components/Sections/InPHRHeroSection',
  component: InPHRHeroSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'inPHR 서비스를 위한 히어로 섹션 컴포넌트입니다. 애니메이션 효과와 다양한 커스터마이징 옵션을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '메인 타이틀 텍스트',
    },
    subtitle: {
      control: 'text',
      description: '서브 타이틀 텍스트',
    },
    description: {
      control: 'text',
      description: '설명문 텍스트',
    },
    mainImageSrc: {
      control: 'text',
      description: '메인 이미지 경로',
    },
    mainImageAlt: {
      control: 'text',
      description: '메인 이미지 alt 속성',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          '기본 설정으로 표시되는 InPHR 히어로 섹션입니다. 음식 이미지들과 장식용 요소들이 부드럽게 애니메이션됩니다.',
      },
    },
  },
};

export const CustomContent: Story = {
  args: {
    title: '혁신적인 헬스케어 솔루션, inPHR',
    subtitle: '당신의 건강 데이터를 스마트하게 관리하세요!',
    description:
      '최첨단 AI 기술과 빅데이터를 활용하여 개인화된 건강 관리 서비스를 제공합니다. 의료진과의 원활한 소통과 체계적인 건강 기록 관리로 더 나은 건강한 삶을 시작하세요.',
  },
  parameters: {
    docs: {
      description: {
        story:
          '커스텀 텍스트 콘텐츠를 적용한 히어로 섹션입니다. props를 통해 제목, 부제목, 설명문을 자유롭게 변경할 수 있습니다.',
      },
    },
  },
};

export const MinimalIcons: Story = {
  args: {
    foodImages: [
      { src: '/assets/images/사과.png', alt: '사과', className: 'absolute top-1/4 left-1/4 w-12 h-12 md:w-16 md:h-16' },
      {
        src: '/assets/images/신발.png',
        alt: '신발',
        className: 'absolute top-1/3 right-1/4 w-12 h-12 md:w-16 md:h-16',
      },
    ],
    decorativeIcons: [
      {
        type: 'div' as const,
        style: {
          top: '20%',
          left: '80%',
          width: '25px',
          height: '25px',
          backgroundColor: '#3b82f6',
          borderRadius: '50%',
        },
      },
      {
        type: 'div' as const,
        style: {
          top: '70%',
          left: '15%',
          width: '20px',
          height: '20px',
          backgroundColor: '#60a5fa',
          borderRadius: '50%',
        },
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: '최소한의 장식 요소만 사용한 깔끔한 버전입니다. 과도한 시각적 요소를 줄여 콘텐츠에 집중할 수 있습니다.',
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    className: 'bg-gray-900',
    title: '국내 대표 건강기록 통합 관리 플랫폼, inPHR',
    subtitle: '나만의 맞춤 헬스케어를 확인하세요!',
  },
  parameters: {
    docs: {
      description: {
        story: '다크 테마가 적용된 히어로 섹션입니다. className prop을 통해 배경색을 변경할 수 있습니다.',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
};

export const HealthcareTheme: Story = {
  args: {
    foodImages: [
      { src: '/assets/images/하트.png', alt: '하트', className: 'absolute top-1/4 left-1/4 w-12 h-12 md:w-16 md:h-16' },
      {
        src: '/assets/images/체온계.png',
        alt: '체온계',
        className: 'absolute top-1/3 right-1/4 w-12 h-12 md:w-16 md:h-16',
      },
      {
        src: '/assets/images/심장.png',
        alt: '심장',
        className: 'absolute bottom-1/3 left-1/4 w-12 h-12 md:w-16 md:h-16',
      },
      { src: '/assets/images/폐.png', alt: '폐', className: 'absolute bottom-1/4 right-1/4 w-12 h-12 md:w-16 md:h-16' },
    ],
    decorativeIcons: [
      {
        type: 'div' as const,
        style: {
          top: '15%',
          left: '80%',
          width: '30px',
          height: '30px',
          backgroundColor: '#10b981',
          borderRadius: '50%',
        },
      },
      {
        type: 'div' as const,
        style: {
          top: '80%',
          left: '10%',
          width: '20px',
          height: '20px',
          backgroundColor: '#34d399',
          borderRadius: '50%',
        },
      },
      { type: 'icon' as const, name: 'thermometer', style: { top: '75%', right: '15%' } },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          '헬스케어 테마로 구성된 히어로 섹션입니다. 의료 관련 아이콘들과 그린 계열 색상을 사용하여 건강한 느낌을 강조합니다.',
      },
    },
  },
};

export const MobileOptimized: Story = {
  args: {
    className: 'px-2',
    foodImages: [
      { src: '/assets/images/사과.png', alt: '사과', className: 'absolute top-1/4 left-1/4 w-8 h-8 md:w-12 md:h-12' },
      { src: '/assets/images/신발.png', alt: '신발', className: 'absolute top-1/3 right-1/4 w-8 h-8 md:w-12 md:h-12' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          '모바일 화면에 최적화된 히어로 섹션입니다. 작은 화면에서도 가독성을 유지하도록 요소들의 크기와 간격을 조정했습니다.',
      },
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Interactive: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '전체 화면으로 표시되는 인터랙티브 히어로 섹션입니다. 애니메이션 효과를 확인할 수 있습니다.',
      },
    },
  },
  render: (args) => (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <InPHRHeroSection {...args} />
    </div>
  ),
};
