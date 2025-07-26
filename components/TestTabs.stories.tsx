import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TestTabs from './TestTabs';

const meta: Meta<typeof TestTabs> = {
  title: 'Components/TestTabs',
  component: TestTabs,
  parameters: {
    layout: 'centered',
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

export const DarkTheme: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '테스트 탭입니다.',
      },
    },
  },
};

export const IconAnimation: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '테스트 탭입니다.!',
      },
    },
  },
};

export const ResponsiveGrid: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '테스트 탭입니다.??',
      },
    },
  },
};
