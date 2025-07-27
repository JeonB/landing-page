import type { Meta, StoryObj } from '@storybook/react';
import { useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import Phrase from './Phrase';

// 실제 Phrase 컴포넌트에서 useMotionValueEvent가 정상적으로 동작하도록, mock으로 motion 값을 전달하기 위함
const PhraseWrapper = ({ children, isActive = false }: { children: React.ReactNode; isActive?: boolean }) => {
  const activeIndexValue = useMotionValue(isActive ? 0 : -1);

  // activeIndexValue를 강제로 업데이트하여 useMotionValueEvent가 트리거되도록 함
  useEffect(() => {
    activeIndexValue.set(isActive ? 0 : -1);
  }, [isActive, activeIndexValue]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <Phrase index={0} activeIndexValue={activeIndexValue}>
        {children}
      </Phrase>
    </div>
  );
};

const meta: Meta<typeof PhraseWrapper> = {
  title: 'Components/Phrase',
  component: PhraseWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isActive: {
      control: 'boolean',
      description: '텍스트가 활성화된 상태인지 여부',
    },
    children: {
      control: 'text',
      description: '표시할 텍스트 내용',
    },
  },
  args: {
    isActive: false,
    children: '샘플 텍스트입니다.',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '기본 상태의 텍스트입니다.',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    children: '활성화된 상태의 텍스트입니다.\n두 줄로 표시됩니다.',
    isActive: true,
  },
  parameters: {
    docs: {
      description: {
        story: '활성화된 상태에서는 텍스트가 검은색으로 변하고 크기가 1.1배 커집니다.',
      },
    },
  },
};

export const LongText: Story = {
  args: {
    children: '긴 텍스트도 잘 표시됩니다.\n여러 줄에 걸쳐 있는\n텍스트의 예시입니다.',
    isActive: true,
  },
  parameters: {
    docs: {
      description: {
        story: '여러 줄로 구성된 긴 텍스트도 적절히 표시됩니다.',
      },
    },
  },
};
