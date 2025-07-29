import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ScrollAnimations } from './ScrollAnimations';

const meta: Meta<typeof ScrollAnimations> = {
  title: 'Components/ScrollAnimations',
  component: ScrollAnimations,
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

export const ScrollDemo: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          '다양한 스크롤 기반 애니메이션 기법들을 보여주는 데모입니다. useInView, useScroll 등의 Framer Motion 훅 사용 예제가 포함되어 있습니다.',
      },
    },
  },
};

export const FramerMotionExamples: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Framer Motion을 활용한 스크롤 애니메이션 학습용 예제 컴포넌트입니다. 스크롤하면서 다양한 애니메이션 효과를 확인할 수 있습니다.',
      },
    },
  },
};
