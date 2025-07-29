import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import InPHRPlatformSection from './InPHRPlatformSection';

const meta: Meta<typeof InPHRPlatformSection> = {
  title: 'Sections/InPHRPlatformSection',
  component: InPHRPlatformSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'inPHR 플랫폼의 연결 구조를 시각적으로 보여주는 섹션 컴포넌트입니다. 중앙의 플랫폼과 사용자, 의료기관 간의 연결을 애니메이션으로 표현합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '섹션의 메인 제목',
    },
    centerTitle: {
      control: 'text',
      description: '중앙 원의 텍스트 (줄바꿈: \\n 사용)',
    },
    leftTitle: {
      control: 'text',
      description: '왼쪽 원의 텍스트',
    },
    rightTitle: {
      control: 'text',
      description: '오른쪽 원의 텍스트 (줄바꿈: \\n 사용)',
    },
    description: {
      control: 'text',
      description: '하단 설명 텍스트 (줄바꿈: \\n 사용)',
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
          '기본 설정으로 표시되는 inPHR Platform 섹션입니다. 중앙 원이 먼저 나타나고, 연결선이 확장된 후 좌우 원들이 순차적으로 나타납니다.',
      },
    },
  },
};

export const CustomContent: Story = {
  args: {
    title: 'Smart Healthcare Ecosystem',
    centerTitle: 'AI-Powered\nHealthcare Hub',
    leftTitle: 'Patients',
    rightTitle: 'Medical\nInstitutions',
    description:
      'Our advanced AI platform connects patients with healthcare providers,\ndelivering personalized healthcare solutions through intelligent data analysis.',
  },
  parameters: {
    docs: {
      description: {
        story: '영문 콘텐츠로 커스터마이징된 버전입니다. props를 통해 모든 텍스트를 변경할 수 있습니다.',
      },
    },
  },
};

export const HealthcareTheme: Story = {
  args: {
    title: 'Digital Health Platform',
    centerTitle: 'Health\nConnect',
    leftTitle: '환자',
    rightTitle: '병원 및\n클리닉',
    description: '디지털 헬스케어 플랫폼을 통해\n환자와 의료진을 연결하여 더 나은 의료 서비스를 제공합니다.',
  },
  parameters: {
    docs: {
      description: {
        story: '헬스케어에 특화된 콘텐츠로 구성된 버전입니다. 의료 분야에 맞는 용어와 설명을 사용합니다.',
      },
    },
  },
};

export const TechFocused: Story = {
  args: {
    title: 'Technology Integration',
    centerTitle: 'IoT\nPlatform',
    leftTitle: '사용자\n디바이스',
    rightTitle: '클라우드\n서비스',
    description: 'IoT 디바이스와 클라우드 서비스를 연결하는\n통합 플랫폼으로 스마트한 서비스를 제공합니다.',
  },
  parameters: {
    docs: {
      description: {
        story: '기술 중심의 플랫폼을 소개하는 버전입니다. IoT와 클라우드 서비스 연결에 초점을 맞춘 콘텐츠입니다.',
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    className: 'bg-gray-900 text-white',
    description:
      '소프트넷의 inPHR 플랫폼을 통해\n사용자의 의료기관 진료내역과 라이프로그를 분석하여 맞춤형 건강관리 서비스를 제공합니다.',
  },
  parameters: {
    docs: {
      description: {
        story: '다크 테마가 적용된 버전입니다. 어두운 배경에서도 잘 보이도록 텍스트 색상이 조정됩니다.',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Minimal: Story = {
  args: {
    title: 'Platform Overview',
    centerTitle: 'Core\nSystem',
    leftTitle: 'Users',
    rightTitle: 'Services',
    description: 'Simple and clean platform architecture visualization.',
  },
  parameters: {
    docs: {
      description: {
        story: '미니멀한 콘텐츠로 구성된 버전입니다. 간단하고 명확한 메시지 전달에 적합합니다.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '전체 화면으로 표시되는 인터랙티브 버전입니다. 애니메이션 효과를 확인할 수 있습니다.',
      },
    },
  },
  render: (args) => (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <InPHRPlatformSection {...args} />
    </div>
  ),
};

export const AnimationDemo: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          '애니메이션 시연을 위한 버전입니다. 스크롤 시 각 요소들이 순차적으로 나타나는 효과를 확인할 수 있습니다.',
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
      <InPHRPlatformSection {...args} />
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
