import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import StatsSection from './StatsSection';

const meta: Meta<typeof StatsSection> = {
  title: 'Components/StatsSection',
  component: StatsSection,
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

export const AnimationDemo: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '스크롤 시 통계 숫자들이 순차적으로 애니메이션되며 카운트업 효과를 확인할 수 있습니다.',
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '어두운 배경(gray-800)에 흰색 텍스트와 파란색 강조 색상으로 구성된 통계 섹션입니다.',
      },
    },
  },
};
