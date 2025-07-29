import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Section from './Section';

const meta: Meta<typeof Section> = {
  title: 'Components/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '섹션 내부에 표시될 콘텐츠',
    },
    className: {
      control: 'text',
      description: '추가적인 CSS 클래스',
    },
  },
  args: {
    children: '기본 섹션 콘텐츠',
    className: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component for better storybook rendering
const SectionWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <Section className={className}>
    <div className="text-center">
      <h2 className="mb-4 text-3xl font-bold">섹션 제목</h2>
      <p className="text-gray-600">{children}</p>
    </div>
  </Section>
);

export const Default: Story = {
  render: (args) => <SectionWrapper {...args} />,
  args: {
    children: '기본 섹션 콘텐츠입니다.',
  },
};

export const WithBackgroundColor: Story = {
  render: (args) => <SectionWrapper {...args} />,
  args: {
    children: '배경색이 있는 섹션입니다.',
    className: 'bg-gray-100',
  },
  parameters: {
    docs: {
      description: {
        story: '회색 배경이 적용된 섹션 예제입니다.',
      },
    },
  },
};

export const DarkSection: Story = {
  render: (args) => <SectionWrapper {...args} />,
  args: {
    children: '어두운 테마의 섹션입니다.',
    className: 'bg-gray-900 text-white',
  },
  parameters: {
    docs: {
      description: {
        story: '어두운 배경과 흰색 텍스트가 적용된 섹션입니다.',
      },
    },
  },
};

export const ColoredSection: Story = {
  render: (args) => <SectionWrapper {...args} />,
  args: {
    children: '파란색 테마의 섹션입니다.',
    className: 'bg-blue-50',
  },
  parameters: {
    docs: {
      description: {
        story: '파란색 배경이 적용된 섹션 예제입니다.',
      },
    },
  },
};

export const CompactSection: Story = {
  render: (args) => <SectionWrapper {...args} />,
  args: {
    children: '여백이 줄어든 컴팩트한 섹션입니다.',
    className: 'py-10',
  },
  parameters: {
    docs: {
      description: {
        story: '상하 여백이 줄어든 컴팩트한 섹션 예제입니다.',
      },
    },
  },
};
