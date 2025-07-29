import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import InPHRWhatIsPlatformSection from './InPHRWhatIsPlatformSection';

const meta: Meta<typeof InPHRWhatIsPlatformSection> = {
  title: 'Sections/InPHRWhatIsPlatformSection',
  component: InPHRWhatIsPlatformSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'inPHR 플랫폼이 무엇인지 설명하는 섹션 컴포넌트입니다. 중앙 로고를 중심으로 서비스 항목들이 반원형으로 배치되고, 애니메이션과 함께 나타납니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '기본 상태의 InPHRWhatIsPlatformSection 입니다. 모든 요소가 정상적으로 표시됩니다.',
      },
    },
  },
};

export const AnimationDemo: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '스크롤에 따른 애니메이션 효과를 확인하기 위한 데모입니다. 스크롤을 내리면 컴포넌트가 나타나며 애니메이션이 실행됩니다.',
      },
    },
  },
  render: () => (
    <div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f0f4ff',
          fontSize: '2rem',
          color: '#3b82f6',
        }}
      >
        아래로 스크롤하세요
      </div>
      <InPHRWhatIsPlatformSection />
      <div
        style={{
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        애니메이션 확인 완료
      </div>
    </div>
  ),
};
