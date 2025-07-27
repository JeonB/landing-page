import type { Meta, StoryObj } from '@storybook/react';
import InPHRServiceSection from './InPHRServiceSection';

const meta: Meta<typeof InPHRServiceSection> = {
  title: 'Components/Sections/InPHRServiceSection',
  component: InPHRServiceSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'inPHR 서비스들을 소개하는 섹션 컴포넌트입니다. 개인 건강, 실시간 모니터링, 만성질환, 의료진 4개의 탭으로 구성되며, 각 서비스는 320x320 크기의 카드와 207x200 크기의 스크린 이미지로 표시됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '섹션의 메인 제목',
    },
    description: {
      control: 'text',
      description: '섹션 설명 텍스트 (줄바꿈: \\n 사용)',
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
          '기본 설정으로 표시되는 inPHR Service 섹션입니다. 개인 건강 탭이 기본으로 선택되며, 각 카드는 좌상단에 서비스 정보, 우하단에 207x200 크기의 스크린 이미지를 표시합니다.',
      },
    },
  },
};

export const CustomContent: Story = {
  args: {
    title: 'Healthcare Solutions',
    description:
      'Comprehensive healthcare management solutions for patients and medical professionals.\nFrom personal health tracking to real-time monitoring and chronic disease management.',
  },
  parameters: {
    docs: {
      description: {
        story: '영문 콘텐츠로 커스터마이징된 버전입니다. props를 통해 제목과 설명을 변경할 수 있습니다.',
      },
    },
  },
};

export const MinimalDescription: Story = {
  args: {
    title: 'Services',
    description: '다양한 건강 관리 서비스를 제공합니다.',
  },
  parameters: {
    docs: {
      description: {
        story: '간단한 설명으로 구성된 미니멀 버전입니다.',
      },
    },
  },
};

export const PersonalHealthTab: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '개인 건강 탭의 서비스들을 확인할 수 있습니다. inPHRCARE, inPHRPILL, inPHRTEMP 서비스가 포함됩니다.',
      },
    },
  },
};

export const MonitoringTab: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          '실시간 모니터링 탭의 서비스들을 확인할 수 있습니다. COMPASS, inPHRSMART, inPHRSEA, inPHRMENTAL 서비스가 포함됩니다.',
      },
    },
  },
  render: (args) => {
    // 실시간 모니터링 탭을 기본으로 선택하도록 설정
    return (
      <div>
        <InPHRServiceSection {...args} />
        <script>
          {`
            setTimeout(() => {
              const monitoringTab = document.querySelector('[value="monitoring"]');
              if (monitoringTab) monitoringTab.click();
            }, 100);
          `}
        </script>
      </div>
    );
  },
};

export const ChronicDiseaseTab: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '만성질환 탭의 서비스들을 확인할 수 있습니다. 6개의 다양한 만성질환 관리 서비스가 포함됩니다.',
      },
    },
  },
};

export const MedicalProfessionalTab: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '의료진 탭의 서비스들을 확인할 수 있습니다. inPHRDOC, inPHRLIVE, inPHRDASH 서비스가 포함됩니다.',
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
        story: '다크 테마가 적용된 버전입니다. 어두운 배경에서도 서비스 카드들이 잘 보이도록 구성되었습니다.',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
};

export const MobileOptimized: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '모바일 화면에 최적화된 버전입니다. 카드 크기가 240x240으로 조정되며 탭 간격이 최적화됩니다.',
      },
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const TabInteraction: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '탭 상호작용을 확인할 수 있는 버전입니다. 4개의 탭을 클릭하여 각각의 서비스 카드들을 확인하세요.',
      },
    },
  },
  render: (args) => (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <InPHRServiceSection {...args} />
    </div>
  ),
};

export const AnimationDemo: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          '애니메이션 시연을 위한 버전입니다. 스크롤 시 요소들이 순차적으로 나타나고, 각 카드가 0.1초씩 지연되어 나타나는 효과를 확인할 수 있습니다.',
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
      <InPHRServiceSection {...args} />
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

export const CardLayout: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
320x320 크기의 고정 카드 레이아웃을 확인할 수 있는 버전입니다.

**기본 상태**
- 좌상단: 로고 이미지와 기본 설명
- 우하단: 207x200 크기의 스크린 이미지
- 배경색: #F9F9F9

**호버 상태**
- 배경색이 #EBF4FF (연한 파란색)로 변경
- 상세 설명 목록이 표시됩니다
- 우하단에 "자세히 보기" 버튼이 나타납니다

카드를 호버해보세요!
        `,
      },
    },
  },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <InPHRServiceSection {...args} />
    </div>
  ),
};
