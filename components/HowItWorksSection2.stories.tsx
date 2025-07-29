import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import HowItWorksSection2 from './HowItWorksSection2';

const meta: Meta<typeof HowItWorksSection2> = {
  title: 'Components/HowItWorksSection2',
  component: HowItWorksSection2,
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

export const TimelineAnimation: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          '세로형 타임라인 레이아웃으로 4단계 프로세스를 표시합니다. 스크롤 진행에 따라 타임라인 바가 채워지고 각 단계가 좌우 교대로 나타납니다.',
      },
    },
  },
};

export const ScrollProgress: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'useScroll 훅을 사용하여 스크롤 진행률에 따라 중앙 타임라인 바가 동적으로 채워집니다.',
      },
    },
  },
};

export const AlternatingLayout: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '좌우 교대로 배치된 콘텐츠가 각각 다른 방향에서 슬라이드 인 애니메이션으로 나타납니다.',
      },
    },
  },
};
