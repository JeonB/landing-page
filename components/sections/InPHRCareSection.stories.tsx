import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import InPHRCareSection from './InPHRCareSection';

const meta: Meta<typeof InPHRCareSection> = {
  title: 'Sections/InPHRCareSection',
  component: InPHRCareSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'inPHR Care 서비스를 소개하는 섹션 컴포넌트입니다. APP과 WEB 탭을 통해 각각의 서비스를 시각적으로 보여줍니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '섹션의 메인 제목',
    },
    appDescription: {
      control: 'text',
      description: 'APP 탭의 설명 텍스트 (줄바꿈: \\n 사용)',
    },
    webDescription: {
      control: 'text',
      description: 'WEB 탭의 설명 텍스트 (줄바꿈: \\n 사용)',
    },
    appImage: {
      control: 'text',
      description: 'APP 탭의 이미지 경로',
    },
    webImage: {
      control: 'text',
      description: 'WEB 탭의 이미지 경로',
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
          '기본 설정으로 표시되는 inPHR Care 섹션입니다. APP 탭이 기본으로 선택되며, 탭을 클릭하여 내용을 전환할 수 있습니다.',
      },
    },
  },
};

export const CustomContent: Story = {
  args: {
    title: 'Healthcare Solutions',
    appDescription:
      'Our mobile application provides comprehensive health monitoring capabilities.\nTrack your vital signs, medication schedules, and health metrics in real-time.\nConnect with healthcare professionals for personalized care management.',
    webDescription:
      'Access your health dashboard through our web platform.\nView detailed analytics and reports of your health data.\nManage appointments and communicate with your care team.\n\nVisit our website →',
  },
  parameters: {
    docs: {
      description: {
        story: '영문 콘텐츠로 커스터마이징된 버전입니다. props를 통해 제목과 설명 텍스트를 변경할 수 있습니다.',
      },
    },
  },
};

export const HealthcareTheme: Story = {
  args: {
    title: 'Digital Health Platform',
    appDescription:
      '모바일 앱을 통해 언제 어디서나 건강 상태를 모니터링하세요.\n혈압, 혈당, 체중 등 다양한 건강 지표를 기록하고 관리할 수 있습니다.\n의료진과의 상담 예약 및 건강 상담 서비스를 제공합니다.',
    webDescription:
      '웹 플랫폼을 통해 상세한 건강 리포트를 확인하세요.\n그래프와 차트로 건강 데이터 변화를 한눈에 파악할 수 있습니다.\nAI 기반 건강 분석 및 맞춤형 건강 관리 솔루션을 제공합니다.',
  },
  parameters: {
    docs: {
      description: {
        story: '헬스케어에 특화된 콘텐츠로 구성된 버전입니다. 의료 서비스에 맞는 설명과 기능을 강조합니다.',
      },
    },
  },
};

export const SimpleVersion: Story = {
  args: {
    title: 'Care Platform',
    appDescription:
      'Simple and intuitive mobile app for health management.\nTrack your daily health metrics with ease.',
    webDescription: 'Comprehensive web dashboard for detailed health insights.\n\nLearn more →',
  },
  parameters: {
    docs: {
      description: {
        story: '간단하고 명확한 메시지로 구성된 미니멀 버전입니다.',
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    className: 'bg-gray-900 text-white',
  },
  parameters: {
    docs: {
      description: {
        story: '다크 테마가 적용된 버전입니다. 어두운 배경에서도 잘 보이도록 구성되었습니다.',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
};

export const TabInteraction: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '탭 상호작용을 확인할 수 있는 버전입니다. APP과 WEB 탭을 클릭하여 콘텐츠 전환 애니메이션을 확인하세요.',
      },
    },
  },
  render: (args) => (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <InPHRCareSection {...args} />
    </div>
  ),
};

export const MobileOptimized: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '모바일 화면에 최적화된 버전입니다. 작은 화면에서도 탭과 이미지가 적절하게 표시됩니다.',
      },
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const AnimationDemo: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '애니메이션 시연을 위한 버전입니다. 스크롤 시 요소들이 순차적으로 나타나는 효과를 확인할 수 있습니다.',
      },
    },
  },
  render: (args) => (
    <div>
      <div
        style={{
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f3f4f6',
        }}
      >
        <p style={{ fontSize: '1.5rem', color: '#6b7280' }}>스크롤하여 애니메이션 확인</p>
      </div>
      <InPHRCareSection {...args} />
      <div
        style={{
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f3f4f6',
        }}
      >
        <p style={{ fontSize: '1.5rem', color: '#6b7280' }}>애니메이션 완료</p>
      </div>
    </div>
  ),
};
