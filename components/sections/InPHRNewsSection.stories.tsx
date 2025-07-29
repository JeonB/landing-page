import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import InPHRNewsSection from './InPHRNewsSection';

const meta: Meta<typeof InPHRNewsSection> = {
  title: 'Sections/InPHRNewsSection',
  component: InPHRNewsSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '섹션의 제목',
    },
    subtitle: {
      control: 'text',
      description: '섹션의 부제목',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
    newsItems: {
      control: 'object',
      description: '뉴스 아이템 배열 (한 페이지에 3개씩 표시)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomTitle: Story = {
  args: {
    title: '최신 소식',
    subtitle: 'inPHR의 최신 뉴스와 공지사항을 확인하세요.',
  },
};

export const LimitedItems: Story = {
  args: {
    title: 'Recent News',
    subtitle: '최근 소식을 간단히 살펴보세요.',
  },
};

export const CustomNewsItems: Story = {
  args: {
    title: 'Company Updates',
    subtitle: '회사의 주요 업데이트와 발표사항입니다.',
    newsItems: [
      {
        id: 'custom1',
        date: '2024.01.15',
        category: '제품 출시',
        title: '새로운 AI 헬스케어 플랫폼 베타 버전 공개',
        description:
          '혁신적인 AI 기술을 적용한 헬스케어 플랫폼의 베타 버전이 공개되었습니다. 사용자 맞춤형 건강 관리 서비스를 제공합니다.',
        imageUrl: '/assets/images/news1.png',
        link: '#',
      },
      {
        id: 'custom2',
        date: '2024.01.10',
        category: '파트너십',
        title: '글로벌 의료기관과의 전략적 파트너십 체결',
        description: '해외 유수 의료기관과의 파트너십을 통해 글로벌 헬스케어 서비스 확장에 나섭니다.',
        imageUrl: '/assets/images/news2.png',
        link: '#',
      },
      {
        id: 'custom3',
        date: '2024.01.05',
        category: '연구개발',
        title: '차세대 웨어러블 디바이스 개발 완료',
        description: '더욱 정확하고 편리한 건강 모니터링이 가능한 웨어러블 디바이스를 개발했습니다.',
        imageUrl: '/assets/images/news3.png',
        link: '#',
      },
    ],
  },
};

export const NoImages: Story = {
  args: {
    title: 'Text Only News',
    subtitle: '이미지 없이 텍스트만으로 구성된 뉴스입니다.',
    newsItems: [
      {
        id: 'text1',
        date: '2024.01.20',
        category: '공지사항',
        title: '시스템 점검 안내',
        description:
          '더 나은 서비스 제공을 위한 시스템 점검이 예정되어 있습니다. 점검 시간 동안 일시적으로 서비스 이용이 제한될 수 있습니다.',
        link: '#',
      },
      {
        id: 'text2',
        date: '2024.01.18',
        category: '업데이트',
        title: '모바일 앱 버전 2.1.0 업데이트',
        description: '사용자 편의성을 개선하고 새로운 기능을 추가한 모바일 앱 업데이트가 배포되었습니다.',
        link: '#',
      },
      {
        id: 'text3',
        date: '2024.01.15',
        category: '이벤트',
        title: '신규 회원 가입 이벤트 진행 중',
        description: '새로 가입하는 회원을 대상으로 특별 혜택을 제공하는 이벤트가 진행 중입니다.',
        link: '#',
      },
    ],
  },
};

export const ManyItems: Story = {
  args: {
    title: 'All News Archive',
    subtitle: '모든 뉴스 아카이브를 확인해보세요. 한 페이지에 3개씩 표시됩니다.',
    newsItems: [
      // 기본 뉴스 항목들을 복제하여 더 많은 데이터 생성
      ...Array.from({ length: 12 }, (_, index) => ({
        id: `news-${index + 1}`,
        date: `2023.${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}.${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        category: ['inPHR 플랫폼', 'ICT 전시회', '디지털 헬스케어', 'AI 헬스케어', '정책 소식', '연구개발'][
          Math.floor(Math.random() * 6)
        ],
        title: `뉴스 제목 ${index + 1}: ${['AI 기반', '웨어러블', '디지털', '스마트', '혁신적인', '차세대'][Math.floor(Math.random() * 6)]} 헬스케어 솔루션`,
        description: `이것은 ${index + 1}번째 뉴스 항목입니다. 페이지네이션 기능을 테스트하기 위한 샘플 뉴스 내용입니다. 실제 뉴스에서는 더 자세한 내용이 포함됩니다.`,
        link: '#',
      })),
    ],
  },
};

export const PaginationTest: Story = {
  args: {
    title: 'Pagination Test',
    subtitle: '페이지네이션 기능을 테스트해보세요.',
    newsItems: [
      // 15개의 뉴스 항목 생성 (5페이지 분량)
      ...Array.from({ length: 15 }, (_, index) => ({
        id: `pagination-test-${index + 1}`,
        date: `2024.01.${String(index + 1).padStart(2, '0')}`,
        category: `카테고리 ${(index % 5) + 1}`,
        title: `페이지네이션 테스트 뉴스 ${index + 1}`,
        description: `이것은 페이지네이션 테스트를 위한 ${index + 1}번째 뉴스입니다. 각 페이지마다 3개씩 표시되어 총 5페이지로 구성됩니다.`,
        link: '#',
      })),
    ],
  },
};
