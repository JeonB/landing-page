'use client';

import { motion } from 'framer-motion';
import AnimatedHeader from '../AnimatedHeader';
import Section from '../Section';
import { Typography } from '../ui/Typography';

interface InPHRPlatformSectionProps {
  title?: string;
  centerTitle?: string;
  leftTitle?: string;
  rightTitle?: string;
  description?: string;
  className?: string;
}

export default function InPHRPlatformSection({
  title = 'inPHR Platform',
  centerTitle = 'inPHR\nPlatform',
  leftTitle = '사용자',
  rightTitle = '국내외\n의료기관',
  description = '소프트넷의 inPHR 플랫폼을 통해\n사용자의 의료기관 진료내역과 라이프로그를 분석하여 맞춤형 건강관리 서비스를 제공합니다.',
  className = '',
}: InPHRPlatformSectionProps) {
  return (
    <Section className={className}>
      <div className="text-center">
        <AnimatedHeader text={title} className="mb-16 text-center" />

        <div className="relative mx-auto flex min-h-[300px] items-center justify-center px-4 md:min-h-[400px]">
          {/* 컨테이너 - 원들과 연결선을 포함 */}
          <div className="flex items-center justify-center gap-[25px] sm:gap-[30px] xl:gap-[37px]">
            {/* 왼쪽 원 - 사용자 */}
            <motion.div
              className="relative flex h-[120px] w-[120px] items-center justify-center sm:h-[150px] sm:w-[150px] xl:h-[180px] xl:w-[180px]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative h-full w-full">
                <svg className="h-full w-full" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="90"
                    cy="90"
                    r="85"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Typography
                    variant="body2"
                    weight="semibold"
                    align="center"
                    className="text-blue-primary text-xs whitespace-pre-line sm:text-sm xl:text-base"
                  >
                    {leftTitle}
                  </Typography>
                </div>
              </div>

              {/* 왼쪽 연결선 */}
              <motion.div
                className="absolute top-1/2 left-full h-0.5 w-[25px] -translate-y-1/2 sm:w-[30px] xl:w-[37px]"
                style={{
                  transformOrigin: 'left',
                  borderTop: '2px dashed #60a5fa',
                  height: '2px',
                  background: 'transparent',
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </motion.div>

            {/* 중앙 원 - inPHR Platform */}
            <motion.div
              className="relative flex h-[120px] w-[120px] items-center justify-center sm:h-[150px] sm:w-[150px] xl:h-[180px] xl:w-[180px]"
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className="flex h-full w-full items-center justify-center rounded-full shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 50%, #3b82f6 100%)',
                }}
              >
                <Typography
                  variant="body2"
                  textColor="white"
                  weight="bold"
                  align="center"
                  className="text-xs leading-tight whitespace-pre-line sm:text-sm xl:text-base"
                >
                  {centerTitle}
                </Typography>
              </div>

              {/* 오른쪽 연결선 */}
              <motion.div
                className="absolute top-1/2 left-full h-0.5 w-[25px] -translate-y-1/2 sm:w-[30px] xl:w-[37px]"
                style={{
                  transformOrigin: 'left',
                  borderTop: '2px dashed #60a5fa',
                  height: '2px',
                  background: 'transparent',
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </motion.div>

            {/* 오른쪽 원 - 국내외 의료기관 */}
            <motion.div
              className="relative flex h-[120px] w-[120px] items-center justify-center sm:h-[150px] sm:w-[150px] xl:h-[180px] xl:w-[180px]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative h-full w-full">
                <svg className="h-full w-full" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="90"
                    cy="90"
                    r="85"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Typography
                    variant="body2"
                    weight="semibold"
                    align="center"
                    className="text-blue-primary text-xs whitespace-pre-line sm:text-sm xl:text-base"
                  >
                    {rightTitle}
                  </Typography>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 설명 텍스트 */}
        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Typography
            variant="body1"
            textColor="gray"
            align="center"
            className="text-sm leading-relaxed whitespace-pre-line md:text-base"
          >
            {description}
          </Typography>
        </motion.div>
      </div>
    </Section>
  );
}
