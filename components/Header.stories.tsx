import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '상단 고정 헤더 컴포넌트입니다. 로고, 네비게이션 메뉴, 언어 선택 버튼을 포함합니다.',
      },
      story: {
        // docs 탭에서 더 나은 표시를 위한 설정
        height: '200px',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', height: '150px', background: '#f5f5f5' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '기본 헤더 레이아웃입니다. 1440px 기준으로 최대 너비 1280px, 높이 88px로 설정되어 있습니다.',
      },
    },
  },
};

// Docs 전용 스토리 - fixed positioning 문제 해결
export const DocsView: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Docs 탭에서의 헤더 표시용입니다. Fixed positioning이 relative로 변경되어 표시됩니다.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          height: '150px',
          background: '#f5f5f5',
          border: '1px dashed #ccc',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative' }}>
          <Story />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            fontSize: '12px',
            color: '#666',
          }}
        >
          * Docs 탭에서는 fixed positioning이 relative로 표시됩니다
        </div>
      </div>
    ),
  ],
  render: () => (
    <header className="relative bg-gradient-to-r from-blue-600 to-blue-500">
      <div className="mx-auto my-5 px-4 2xl:mx-20">
        <div className="flex h-[88px] items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src="/assets/images/logo_white.png" alt="inPHR" width={100} height={50} />
            </div>
          </div>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden items-center space-x-8 md:flex">
            <div className="group relative">
              <button className="flex items-center space-x-1 text-white transition-colors hover:text-blue-100">
                <span className="font-medium">회사소개</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="group relative">
              <button className="flex items-center space-x-1 text-white transition-colors hover:text-blue-100">
                <span className="font-medium">서비스</span>
              </button>
            </div>

            <div className="group relative">
              <button className="flex items-center space-x-1 text-white transition-colors hover:text-blue-100">
                <span className="font-medium">고객지원</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>

          {/* 언어 선택 버튼 */}
          <div className="flex items-center space-x-4">
            <button className="hidden items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:flex">
              <span className="text-sm">🇰🇷</span>
              <span className="text-sm font-medium">한국어</span>
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* 모바일 메뉴 버튼 */}
            <button className="p-2 text-white md:hidden">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  ),
};

// export const Mobile: Story = {
//   args: {},
//   parameters: {
//     viewport: {
//       defaultViewport: 'mobile1',
//     },
//     docs: {
//       description: {
//         story: '모바일 환경에서의 헤더입니다. 햄버거 메뉴로 네비게이션이 변경됩니다.',
//       },
//     },
//   },
// };

// export const Tablet: Story = {
//   args: {},
//   parameters: {
//     viewport: {
//       defaultViewport: 'tablet',
//     },
//     docs: {
//       description: {
//         story: '태블릿 환경에서의 헤더입니다.',
//       },
//     },
//   },
// };
