import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import HowItWorksSection from './HowItWorksSection';

const meta: Meta<typeof HowItWorksSection> = {
  title: 'Components/HowItWorksSection',
  component: HowItWorksSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const StepAnimation: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          '4단계 프로세스를 가로 진행 바와 함께 표시합니다. 스크롤 시 진행 바가 애니메이션되고 각 단계가 순차적으로 나타납니다.',
      },
    },
  },
};

export const ResponsiveLayout: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '반응형 그리드 레이아웃으로 구성되어 다양한 화면 크기에서 적절히 표시됩니다.',
      },
    },
  },
};
