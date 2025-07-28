'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import AnimatedHeader from '../AnimatedHeader';
import Section from '../Section';
import { Typography } from '../ui/Typography';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

interface InPHRCareSectionProps {
  title?: string;
  appDescription?: string;
  webDescription?: string;
  appImage?: string;
  webImage?: string;
  className?: string;
}

export default function InPHRCareSection({
  title = 'inPHR CARE',
  appDescription = 'inPHRCare는 사용자의 PHR 데이터 수집 편리성을 향상시킨 국내 최초 개인건강기록 플랫폼으로 우수한 의료기관과 함께 맞춤 헬스 컨설팅 플랫폼입니다.\n환자의료은 진료 및 검진 기록, 생활습관, 질병 관련 데이터, 복용한 약, IoT 데이터 등을 입력하고 관리할 수 있습니다.\n의사의원은 안전 어디서든 환자 정보를 공유할 수 있으며 빠르고 정확하게 환자를 진료 할 수 있습니다.',
  webDescription = '웹에이지를 통해서 병원,병원,병원계,산소포화도,섭취량 등 나의 건강상태를 그래프로 한눈에 확인할 수 있습니다.\n\ninPHRCare 웹사이트로 이동 →',
  appImage = '/assets/images/inphrcare_app.png',
  webImage = '/assets/images/inphrcare_web.png',
  className = '',
}: InPHRCareSectionProps) {
  const [activeTab, setActiveTab] = useState('app');

  return (
    <Section className={className}>
      <div className="text-center">
        <AnimatedHeader text={title} className="text-blue-primary mb-8 text-center" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Tabs defaultValue="app" value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* 탭 버튼들 */}
            <div className="mb-12 flex justify-center">
              <TabsList className="grid w-fit grid-cols-2 bg-transparent p-0">
                <TabsTrigger
                  value="app"
                  className="relative border-0 bg-transparent px-6 py-3 text-lg font-semibold text-gray-500 hover:text-gray-700 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
                >
                  <Typography variant="h4" weight="semibold" className="text-inherit">
                    APP
                  </Typography>
                  {activeTab === 'app' && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-900"
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  className="relative border-0 bg-transparent px-6 py-3 text-lg font-semibold text-gray-500 hover:text-gray-700 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
                >
                  <Typography variant="h4" weight="semibold" className="text-inherit">
                    WEB
                  </Typography>
                  {activeTab === 'web' && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-gray-900"
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </TabsTrigger>
              </TabsList>
            </div>

            {/* APP 탭 콘텐츠 */}
            <TabsContent value="app" className="mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* APP 이미지 */}
                <div className="relative mx-auto max-w-6xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Image
                      src={appImage}
                      alt="inPHR Care APP"
                      width={1200}
                      height={800}
                      className="h-auto w-full rounded-2xl shadow-2xl"
                      priority
                    />
                  </motion.div>
                </div>

                {/* APP 설명 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mx-auto max-w-4xl"
                >
                  <Typography
                    variant="body1"
                    align="center"
                    className="leading-relaxed whitespace-pre-line text-gray-600"
                  >
                    {appDescription}
                  </Typography>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* WEB 탭 콘텐츠 */}
            <TabsContent value="web" className="mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* WEB 이미지 */}
                <div className="relative mx-auto max-w-6xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Image
                      src={webImage}
                      alt="inPHR Care WEB"
                      width={1200}
                      height={800}
                      className="h-auto w-full rounded-2xl shadow-2xl"
                    />
                  </motion.div>
                </div>

                {/* WEB 설명 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mx-auto max-w-4xl"
                >
                  <Typography
                    variant="body1"
                    align="center"
                    className="leading-relaxed whitespace-pre-line text-gray-600"
                  >
                    {webDescription}
                  </Typography>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </Section>
  );
}
