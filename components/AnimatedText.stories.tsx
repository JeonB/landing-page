import type { Meta, StoryObj } from '@storybook/react';
import AnimatedText from './AnimatedText';

const meta: Meta<typeof AnimatedText> = {
  title: 'Components/AnimatedText',
  component: AnimatedText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '표시할 텍스트',
    },
    el: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span'],
      description: 'HTML 태그 요소',
    },
    className: {
      control: 'text',
      description: '추가적인 CSS 클래스',
    },
    stagger: {
      control: { type: 'range', min: 0.01, max: 0.1, step: 0.01 },
      description: '각 글자 간의 애니메이션 지연 시간',
    },
    once: {
      control: 'boolean',
      description: '한 번만 애니메이션 실행할지 여부',
    },
  },
  args: {
    text: '애니메이션 텍스트',
    el: 'p',
    className: '',
    stagger: 0.02,
    once: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '기본 애니메이션 텍스트입니다.',
  },
};

export const Heading: Story = {
  args: {
    text: '애니메이션 헤딩',
    el: 'h2',
    className: 'text-4xl font-bold text-gray-800',
  },
  parameters: {
    docs: {
      description: {
        story: 'h2 태그로 표시되는 큰 헤딩 텍스트 예제입니다.',
      },
    },
  },
};

export const SlowStagger: Story = {
  args: {
    text: '천천히 나타나는 텍스트',
    stagger: 0.08,
    className: 'text-lg text-blue-600',
  },
  parameters: {
    docs: {
      description: {
        story: '각 글자가 천천히 순차적으로 나타나는 예제입니다.',
      },
    },
  },
};

export const FastStagger: Story = {
  args: {
    text: '빠르게 나타나는 텍스트',
    stagger: 0.01,
    className: 'text-lg text-green-600',
  },
  parameters: {
    docs: {
      description: {
        story: '각 글자가 빠르게 순차적으로 나타나는 예제입니다.',
      },
    },
  },
};

export const LongText: Story = {
  args: {
    text: '이것은 긴 텍스트의 예제입니다. 여러 단어로 구성된 문장도 아름답게 애니메이션됩니다.',
    className: 'text-center text-gray-700',
    stagger: 0.015,
  },
  parameters: {
    docs: {
      description: {
        story: '긴 문장의 애니메이션 효과를 확인할 수 있는 예제입니다.',
      },
    },
  },
};

export const RepeatAnimation: Story = {
  args: {
    text: '반복 애니메이션',
    once: false,
    className: 'text-xl font-semibold text-purple-600',
  },
  parameters: {
    docs: {
      description: {
        story: '스크롤할 때마다 반복되는 애니메이션 예제입니다.',
      },
    },
  },
};
