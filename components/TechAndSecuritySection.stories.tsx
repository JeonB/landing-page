import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TechAndSecuritySection from './TechAndSecuritySection';

const meta: Meta<typeof TechAndSecuritySection> = {
  title: 'Components/TechAndSecuritySection',
  component: TechAndSecuritySection,
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

export const DarkTheme: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '어두운 테마(gray-900 배경)로 구성된 기술 및 보안 소개 섹션입니다.',
      },
    },
  },
};

export const IconAnimation: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '오른쪽 보안 아이콘이 스케일, 회전 애니메이션을 반복하여 시각적 효과를 제공합니다.',
      },
    },
  },
};

export const ResponsiveGrid: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '반응형 2열 그리드 레이아웃으로 텍스트 콘텐츠와 아이콘을 적절히 배치합니다.',
      },
    },
  },
};
