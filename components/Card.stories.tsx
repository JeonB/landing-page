import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import CardSection from './Card';

const meta: Meta<typeof CardSection> = {
  title: 'Components/CardSection',
  component: CardSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ScrollDemo: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          '스크롤 애니메이션을 확인할 수 있는 전체 카드 섹션입니다. 세로 스크롤을 통해 각 카드의 sticky 효과와 스케일 애니메이션을 확인하세요. 각 카드는 화면에 고정되면서 다음 카드가 위로 올라오고, 지나갈 때 점점 작아집니다.',
      },
    },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
  render: () => (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <CardSection />
    </div>
  ),
};
