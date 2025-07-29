import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import AnimatedCounter from './AnimatedCounter';

const meta: Meta<typeof AnimatedCounter> = {
  title: 'Components/AnimatedCounter',
  component: AnimatedCounter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    end: {
      control: 'number',
      description: '카운터의 최종 값',
    },
    duration: {
      control: { type: 'range', min: 0.5, max: 5, step: 0.1 },
      description: '애니메이션 지속 시간 (초)',
    },
    suffix: {
      control: 'text',
      description: '숫자 뒤에 붙을 문자',
    },
    prefix: {
      control: 'text',
      description: '숫자 앞에 붙을 문자',
    },
  },
  args: {
    end: 100,
    duration: 2,
    suffix: '',
    prefix: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    end: 100,
    duration: 2,
  },
};

export const WithSuffix: Story = {
  args: {
    end: 98,
    duration: 2.5,
    suffix: '%',
  },
  parameters: {
    docs: {
      description: {
        story: '백분율 표시와 함께 사용되는 카운터 예제입니다.',
      },
    },
  },
};

export const WithPrefix: Story = {
  args: {
    end: 15,
    duration: 2,
    prefix: '평균 ',
    suffix: '%',
  },
  parameters: {
    docs: {
      description: {
        story: '접두사와 접미사를 모두 사용하는 카운터 예제입니다.',
      },
    },
  },
};

export const LargeNumber: Story = {
  args: {
    end: 10000,
    duration: 3,
    suffix: '+',
  },
  parameters: {
    docs: {
      description: {
        story: '큰 숫자를 카운팅하는 예제입니다.',
      },
    },
  },
};

export const FastAnimation: Story = {
  args: {
    end: 50,
    duration: 0.8,
    suffix: '개',
  },
  parameters: {
    docs: {
      description: {
        story: '빠른 애니메이션으로 카운팅하는 예제입니다.',
      },
    },
  },
};
