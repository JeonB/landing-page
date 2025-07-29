'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from './ui';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-primary fixed top-0 right-0 left-0 z-50 mx-auto my-5 rounded-2xl border border-white 2xl:mx-20">
      <div className="flex h-[88px] items-center justify-between rounded-2xl px-8 shadow-md">
        <div className="flex">
          {/* 로고 */}
          <div className="flex items-center">
            <div className="flex items-center">
              <Image
                src="/assets/images/logo_white.png"
                alt="inPHR"
                width={120}
                height={100}
                priority={true}
                quality={100}
                unoptimized={true}
                sizes="(max-width: 768px) 100px, 120px"
                className="h-auto max-h-[60px] w-auto object-contain"
              />
            </div>
          </div>

          {/* 데스크톱 메뉴 */}
          <nav className="ml-10 hidden items-center justify-between space-x-0 md:flex 2xl:w-96">
            <div className="group relative flex-1 text-center">
              <button className="flex w-full items-center justify-center space-x-1 text-white transition-colors hover:text-blue-100">
                <Typography as="span" variant="body2" weight="bold" textColor="white">
                  회사소개
                </Typography>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="group relative flex-1 text-center">
              <button className="flex w-full items-center justify-center space-x-1 text-white transition-colors hover:text-blue-100">
                <Typography as="span" variant="body2" weight="bold" textColor="white">
                  서비스
                </Typography>
              </button>
            </div>

            <div className="group relative flex-1 text-center">
              <button className="flex w-full items-center justify-center space-x-1 text-white transition-colors hover:text-blue-100">
                <Typography as="span" variant="body2" weight="bold" textColor="white">
                  고객지원
                </Typography>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
        {/* 언어 선택 버튼 */}
        <div className="flex items-center">
          <button className="hidden items-center justify-between space-x-2 rounded-full border border-white bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:flex md:h-9 md:w-36">
            <Typography as="span" variant="caption">
              🇰🇷
            </Typography>
            <Typography as="span" variant="caption" weight="regular" textColor="white" fontSize="base">
              한국어
            </Typography>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* 모바일 메뉴 버튼 */}
          <button className="p-2 text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 left-0 border-t border-blue-400 bg-blue-600 shadow-lg md:hidden">
          <div className="space-y-2 px-4 py-2">
            <Link href="#" className="block py-2 transition-colors hover:text-blue-100">
              <Typography variant="body2" textColor="white" weight="bold">
                회사소개
              </Typography>
            </Link>
            <Link href="#" className="block py-2 transition-colors hover:text-blue-100">
              <Typography variant="body2" textColor="white">
                서비스
              </Typography>
            </Link>
            <Link href="#" className="block py-2 transition-colors hover:text-blue-100">
              <Typography variant="body2" textColor="white">
                고객지원
              </Typography>
            </Link>
            <div className="border-t border-blue-400 pt-2">
              <button className="flex items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white">
                <Typography as="span" variant="caption">
                  🇰🇷
                </Typography>
                <Typography as="span" variant="caption" weight="regular" textColor="white">
                  한국어
                </Typography>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
