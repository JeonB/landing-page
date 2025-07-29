'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from '../Section';
import { Typography } from '../ui/Typography';
import SectionHeader from '../SectionHeader';
import Image from 'next/image';

interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

interface InPHRNewsSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  newsItems?: NewsItem[];
}

const defaultNewsItems: NewsItem[] = [
  {
    id: 'news1',
    date: '2023.11.21',
    category: 'inPHR 플랫폼',
    title: 'inPHR플랫폼 감염병 격리자 비대면 관리시스템, GS 인증 1등급 획득',
    description: 'inPHRSMART V1.0이 GS 인증 1등급을 획득하며 디지털 헬스케어 전문 기업으로서의 위상을 높였습니다.',
    imageUrl: '/assets/images/news1.png',
    link: '#',
  },
  {
    id: 'news2',
    date: '2023.11.21',
    category: 'ICT 전시회',
    title: '부울경정보시스템, "2023 베트남 ICT 전자전" 참가... 공동 연구개발기관과 공동참 운영',
    description:
      '부울경정보시스템이 베트남에서 개최된 "2023 베트남 ICT 전자전(ICT COMM VIETNAM)"에 참여하여 혁신적인 헬스케어 솔루션을...',
    imageUrl: '/assets/images/news2.png',
    link: '#',
  },
  {
    id: 'news3',
    date: '2023.11.21',
    category: '디지털 헬스케어',
    title: '어묵센스, 감염병 대응 웨어러블 디바이스 개발',
    description:
      '전자부품 업체 어묵센스가 감염병 대응을 위한 웨어러블 디바이스를 개발하여 11일 발표했습니다. 이번 디바이스는 실시간 생체정보...',
    imageUrl: '/assets/images/news3.png',
    link: '#',
  },
  {
    id: 'news4',
    date: '2023.10.15',
    category: 'AI 헬스케어',
    title: 'AI 기반 개인 맞춤형 건강관리 서비스 출시',
    description:
      '인공지능 기술을 활용한 개인 맞춤형 건강관리 서비스가 정식 출시되었습니다. 사용자의 생활 패턴과 건강 데이터를 분석하여...',
    imageUrl: '/assets/images/news4.png',
    link: '#',
  },
  {
    id: 'news5',
    date: '2023.09.28',
    category: '정책 소식',
    title: '디지털 헬스케어 산업 육성을 위한 정부 지원 방안 발표',
    description:
      '정부가 디지털 헬스케어 산업의 경쟁력 강화를 위한 종합 지원 방안을 발표했습니다. 규제 완화와 함께 R&D 지원을 대폭 확대...',
    imageUrl: '/assets/images/news5.png',
    link: '#',
  },
  {
    id: 'news6',
    date: '2023.09.12',
    category: '연구개발',
    title: '웨어러블 기기 활용 정신건강 모니터링 기술 개발',
    description:
      '웨어러블 기기를 통해 수집된 생체 데이터를 분석하여 정신건강 상태를 실시간으로 모니터링하는 기술이 개발되었습니다.',
    imageUrl: '/assets/images/news6.png',
    link: '#',
  },
];

export default function InPHRNewsSection({
  title = 'News & Notice',
  subtitle = 'inPHR 플랫폼의 소식을 확인해보세요.',
  className = '',
  newsItems = defaultNewsItems,
}: InPHRNewsSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // 1440px 이상에서 최대 3개씩 표시

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = newsItems.slice(startIndex, startIndex + itemsPerPage);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section className={className} id="news">
      <SectionHeader title={title} subtitle={subtitle} titleClassName="text-[22px] text-blue-primary" />

      <div className="mt-4 mb-15 flex justify-center">
        <a href="#">
          <Typography variant="body1" align="center" fontSize="base" className="text-gray-100 underline" as="span">
            전체보기
            <Image
              src="/assets/images/arrow-right.png"
              alt="arrow-right"
              width={16}
              height={16}
              className="ml-3 inline pb-1 align-middle"
            />
          </Typography>
        </a>
      </div>

      <motion.div
        key={currentPage} // 페이지가 변경될 때마다 애니메이션 재실행
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12 grid grid-cols-1 gap-8 md:h-[265px] md:grid-cols-2 lg:grid-cols-3"
      >
        {displayedItems.map((news) => (
          <motion.article
            key={news.id}
            variants={cardVariants}
            className="group hover:border-blue-primary border-gray-30 flex-shrink-0 cursor-pointer rounded-tl-[40px] rounded-tr-[12px] rounded-br-[40px] rounded-bl-[12px] border bg-white shadow-sm hover:shadow-xl"
            animate={{ y: 0 }}
            transition={{
              duration: 0.1,
              ease: 'easeOut',
            }}
            whileHover={{
              y: -30,
              transition: { duration: 0.2, ease: 'easeOut' },
            }}
          >
            <div className="p-5 md:p-[30px]">
              <div className="mb-3 flex items-center justify-between">
                <Typography variant="caption" textColor="blue" className="text-sm md:text-base" weight="medium">
                  {news.date}
                </Typography>
              </div>

              <Typography variant="h3" weight="medium" className="mb-6 line-clamp-2 text-base md:text-lg">
                {news.title}
              </Typography>

              {/* 긴 대시선 구분선 */}
              <div className="mb-6">
                <div
                  className="h-[1px] w-full"
                  style={{
                    background:
                      'repeating-linear-gradient(to right, #909090 0, #909090 8px, transparent 1px, transparent 15px)',
                  }}
                ></div>
              </div>

              <Typography
                variant="body2"
                textColor="secondary"
                className="line-clamp-3 text-sm leading-relaxed md:text-base"
              >
                {news.description}
              </Typography>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center space-x-4"
        >
          {/* 이전 페이지 버튼 */}
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`flex h-[34px] w-[34px] items-center justify-center rounded-full transition-all duration-200 ${
              currentPage === 1 ? 'cursor-not-allowed bg-gray-400 opacity-50' : 'bg-gray-400 hover:bg-gray-500'
            }`}
          >
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 페이지 인디케이터 (점들) */}
          <div className="flex items-center space-x-3">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-3 w-3 rounded-full transition-all duration-200 ${
                  page === currentPage ? 'bg-blue-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`페이지 ${page}로 이동`}
              />
            ))}
          </div>

          {/* 다음 페이지 버튼 */}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`flex h-[34px] w-[34px] items-center justify-center rounded-full transition-all duration-200 ${
              currentPage === totalPages
                ? 'cursor-not-allowed bg-gray-400 opacity-50'
                : 'bg-blue-primary hover:bg-blue-600'
            }`}
          >
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      )}
    </Section>
  );
}
