import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import DataDownload from './DataDownload';

const meta: Meta<typeof DataDownload> = {
  title: 'Components/DataDownload',
  component: DataDownload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: '데이터 다운로드 테이블 데이터',
    },
  },
  args: {
    data: [
      { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
      { name: 'Jane Doe', email: 'jane.doe@example.com', phone: '123-456-7890' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ScrollDemo: Story = {
  args: {},
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: '데이터 다운로드 테이블입니다.',
      },
    },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
  render: () => (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <DataDownload />
    </div>
  ),
};
