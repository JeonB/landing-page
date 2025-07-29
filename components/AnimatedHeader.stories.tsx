import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import AnimatedHeader from './AnimatedHeader';

const meta: Meta<typeof AnimatedHeader> = {
  title: 'Components/AnimatedHeader',
  component: AnimatedHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '헤더에 표시될 텍스트',
    },
    className: {
      control: 'text',
      description: '추가적인 CSS 클래스',
    },
  },
  args: {
    text: '애니메이션 헤더',
    className: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '기본 애니메이션 헤더',
  },
};

export const CenteredHeader: Story = {
  args: {
    text: '중앙 정렬 헤더',
    className: 'text-center',
  },
  parameters: {
    docs: {
      description: {
        story: '중앙 정렬된 헤더 예제입니다.',
      },
    },
  },
};

export const ColoredHeader: Story = {
  args: {
    text: '컬러 헤더',
    className: 'text-blue-600',
  },
  parameters: {
    docs: {
      description: {
        story: '파란색 텍스트로 표시되는 헤더 예제입니다.',
      },
    },
  },
};

export const LongText: Story = {
  args: {
    text: '긴 텍스트를 가진 애니메이션 헤더의 예제입니다',
    className: 'text-center',
  },
  parameters: {
    docs: {
      description: {
        story: '긴 텍스트가 포함된 헤더의 애니메이션 예제입니다.',
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    text: '작은 헤더',
    className: 'text-xl',
  },
  parameters: {
    docs: {
      description: {
        story: '작은 크기의 헤더 예제입니다.',
      },
    },
  },
};
