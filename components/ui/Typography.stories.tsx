import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'overline', 'subtitle1', 'subtitle2'],
    },
    weight: {
      control: { type: 'select' },
      options: ['thin', 'extralight', 'light', 'regular', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
    },
    fontSize: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
    },
    textColor: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'secondary',
        'accent',
        'destructive',
        'muted',
        'white',
        'black',
        'blue',
        'green',
        'red',
        'yellow',
        'purple',
        'pink',
        'indigo',
        'gray',
      ],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'strong', 'em', 'small', 'label'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 예시
export const Default: Story = {
  args: {
    children: '기본 Typography 컴포넌트입니다. (18px)',
  },
};

// 모든 헤딩 variants (기본 fontSize 사용)
export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1" fontSize="6xl">
        Heading 1 - 메인 제목
      </Typography>
      <Typography variant="h2" fontSize="5xl">
        Heading 2 - 섹션 제목
      </Typography>
      <Typography variant="h3" fontSize="4xl">
        Heading 3 - 서브 섹션 제목
      </Typography>
      <Typography variant="h4" fontSize="3xl">
        Heading 4 - 소제목
      </Typography>
      <Typography variant="h5" fontSize="2xl">
        Heading 5 - 작은 제목
      </Typography>
      <Typography variant="h6" fontSize="xl">
        Heading 6 - 가장 작은 제목
      </Typography>
    </div>
  ),
};

// 본문 텍스트 variants
export const BodyText: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="subtitle1" fontSize="lg">
        Subtitle 1 - 큰 부제목
      </Typography>
      <Typography variant="subtitle2" fontSize="base">
        Subtitle 2 - 작은 부제목
      </Typography>
      <Typography variant="body1">
        Body 1 - 기본 본문 텍스트입니다. 일반적인 문단에서 사용되는 텍스트 크기입니다. (기본 18px)
      </Typography>
      <Typography variant="body2" fontSize="sm">
        Body 2 - 작은 본문 텍스트입니다. 부가 설명이나 작은 정보를 표시할 때 사용합니다.
      </Typography>
      <Typography variant="caption" fontSize="xs">
        Caption - 이미지 설명이나 작은 주석에 사용되는 텍스트
      </Typography>
      <Typography variant="overline" fontSize="xs">
        OVERLINE - 라벨이나 카테고리 표시용 텍스트
      </Typography>
    </div>
  ),
};

// 폰트 크기 variants
export const FontSizes: Story = {
  render: () => (
    <div className="space-y-3">
      <Typography fontSize="xs">Extra Small (12px) - 매우 작은 텍스트</Typography>
      <Typography fontSize="sm">Small (14px) - 작은 텍스트</Typography>
      <Typography fontSize="base">Base (16px) - 기본 텍스트</Typography>
      <Typography fontSize="lg" weight="bold">
        Large (18px) - 기본값, 권장 크기
      </Typography>
      <Typography fontSize="xl">Extra Large (20px) - 큰 텍스트</Typography>
      <Typography fontSize="2xl">2X Large (24px) - 더 큰 텍스트</Typography>
      <Typography fontSize="3xl">3X Large (30px) - 아주 큰 텍스트</Typography>
      <Typography fontSize="4xl">4X Large (36px) - 제목용 큰 텍스트</Typography>
      <Typography fontSize="5xl">5X Large (48px) - 헤딩용</Typography>
      <Typography fontSize="6xl">6X Large (60px) - 메인 헤딩</Typography>
    </div>
  ),
};

// 폰트 굵기 variants
export const FontWeights: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography weight="thin">Thin - 매우 얇은 폰트</Typography>
      <Typography weight="extralight">Extra Light - 아주 가벼운 폰트</Typography>
      <Typography weight="light">Light - 가벼운 폰트</Typography>
      <Typography weight="regular">Normal - 기본 폰트</Typography>
      <Typography weight="medium">Medium - 중간 폰트</Typography>
      <Typography weight="semibold">Semi Bold - 약간 굵은 폰트</Typography>
      <Typography weight="bold">Bold - 굵은 폰트</Typography>
      <Typography weight="extrabold">Extra Bold - 아주 굵은 폰트</Typography>
      <Typography weight="black">Black - 가장 굵은 폰트</Typography>
    </div>
  ),
};

// 텍스트 색상 variants
export const TextColors: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography textColor="default">Default - 기본 텍스트 색상</Typography>
      <Typography textColor="primary">Primary - 주요 색상</Typography>
      <Typography textColor="secondary">Secondary - 보조 색상</Typography>
      <Typography textColor="muted">Muted - 흐린 텍스트</Typography>
      <Typography textColor="blue">Blue - 파랑색 텍스트</Typography>
      <Typography textColor="green">Green - 초록색 텍스트</Typography>
      <Typography textColor="red">Red - 빨간색 텍스트</Typography>
      <Typography textColor="yellow">Yellow - 노란색 텍스트</Typography>
      <Typography textColor="purple">Purple - 보라색 텍스트</Typography>
      <Typography textColor="pink">Pink - 분홍색 텍스트</Typography>
      <Typography textColor="indigo">Indigo - 남색 텍스트</Typography>
      <Typography textColor="gray">Gray - 회색 텍스트</Typography>
    </div>
  ),
};

// 텍스트 정렬
export const TextAlignment: Story = {
  render: () => (
    <div className="w-full space-y-4">
      <Typography align="left">
        Left aligned - 왼쪽 정렬된 텍스트입니다. 기본적으로 사용되는 정렬 방식입니다.
      </Typography>
      <Typography align="center">
        Center aligned - 가운데 정렬된 텍스트입니다. 제목이나 강조하고 싶은 내용에 사용합니다.
      </Typography>
      <Typography align="right">Right aligned - 오른쪽 정렬된 텍스트입니다. 특별한 레이아웃에서 사용됩니다.</Typography>
      <Typography align="justify">
        Justify aligned - 양쪽 정렬된 텍스트입니다. 긴 문단에서 정돈된 모양을 만들 때 사용합니다. 텍스트가 길어야 효과를
        볼 수 있습니다. 이렇게 여러 줄에 걸친 긴 문장에서 양쪽 정렬의 효과를 확인할 수 있습니다.
      </Typography>
    </div>
  ),
};

// 실제 사용 예시
export const RealWorldExample: Story = {
  render: () => (
    <div className="max-w-2xl space-y-6">
      <div>
        <Typography variant="h2" fontSize="4xl" textColor="primary" className="mb-2">
          inPHR 플랫폼 소개
        </Typography>
        <Typography variant="overline" fontSize="xs" textColor="muted" className="mb-4">
          HEALTHCARE TECHNOLOGY
        </Typography>
      </div>

      <div>
        <Typography variant="subtitle1" fontSize="xl" weight="semibold" className="mb-2">
          개인 건강 기록 관리의 새로운 패러다임
        </Typography>
        <Typography variant="body1" fontSize="lg" className="mb-4">
          inPHR은 분산된 의료 정보를 통합하여 개인 중심의 건강 관리 서비스를 제공합니다. 환자가 자신의 건강 데이터를
          직접 관리하고, 의료진과 효율적으로 소통할 수 있는 플랫폼을 구축하였습니다.
        </Typography>
      </div>

      <div>
        <Typography variant="h4" fontSize="2xl" className="mb-3">
          주요 기능
        </Typography>
        <div className="space-y-2">
          <Typography variant="body2" fontSize="base" textColor="blue">
            • 통합 건강 기록 관리
          </Typography>
          <Typography variant="body2" fontSize="base" textColor="green">
            • 원격 의료 상담
          </Typography>
          <Typography variant="body2" fontSize="base" textColor="purple">
            • 실시간 건강 모니터링
          </Typography>
        </div>
      </div>

      <div className="border-t pt-4">
        <Typography variant="caption" fontSize="sm" textColor="muted" align="center">
          © 2024 inPHR Platform. All rights reserved.
        </Typography>
      </div>
    </div>
  ),
};

// 커스텀 HTML 요소 사용
export const CustomElements: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography as="strong" variant="body1" fontSize="lg" textColor="red">
        강조된 텍스트 (strong 태그)
      </Typography>
      <Typography as="em" variant="body1" fontSize="lg" textColor="blue">
        기울임 텍스트 (em 태그)
      </Typography>
      <Typography as="small" variant="caption" fontSize="xs" textColor="muted">
        작은 텍스트 (small 태그)
      </Typography>
      <Typography as="label" variant="body2" fontSize="base" weight="medium">
        라벨 텍스트 (label 태그)
      </Typography>
    </div>
  ),
};

// 다양한 조합 예시
export const Combinations: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h2" fontSize="3xl" weight="bold" textColor="primary" align="center">
        다양한 조합 예시
      </Typography>

      <Typography variant="body1" fontSize="xl" weight="light" textColor="gray">
        큰 크기의 가벼운 본문 텍스트
      </Typography>

      <Typography variant="caption" fontSize="lg" weight="bold" textColor="red">
        큰 크기의 굵은 캡션 텍스트
      </Typography>

      <Typography variant="overline" fontSize="base" weight="semibold" textColor="blue">
        중간 크기의 오버라인 텍스트
      </Typography>

      <Typography variant="subtitle2" fontSize="2xl" weight="black" textColor="purple" align="center">
        매우 큰 크기의 검은색 부제목
      </Typography>
    </div>
  ),
};
