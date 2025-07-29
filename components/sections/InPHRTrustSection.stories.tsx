import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TrustSection } from './InPHRTrustSection';

const meta: Meta<typeof TrustSection> = {
  title: 'Sections/InPHRTrustSection',
  component: TrustSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TrustSection>;

export const Default: Story = {
  args: {},
};
