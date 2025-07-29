import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import FAQSection from './FAQSection';

const meta: Meta<typeof FAQSection> = {
  title: 'Components/FAQSection',
  component: FAQSection,
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

export const Interactive: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'FAQ 아이템을 클릭하여 답변을 펼치거나 접을 수 있습니다. 아이콘이 회전하며 부드러운 애니메이션과 함께 내용이 표시됩니다.',
      },
    },
  },
};

export const ScrollDemo: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'FAQ 섹션의 전체적인 레이아웃과 애니메이션을 확인할 수 있습니다. 제목 텍스트는 스크롤 시 애니메이션 효과가 적용됩니다.',
      },
    },
  },
};
