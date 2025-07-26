import { motion } from 'framer-motion';
import { FiCpu, FiShield } from 'react-icons/fi';
import AnimatedHeader from './AnimatedHeader';
import Section from './Section';

export default function TechAndSecuritySection() {
  return (
    <Section className="bg-gray-900 text-white">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <AnimatedHeader text="최고의 기술력과 철저한 보안" className="text-white" />
          <p className="mt-4 text-lg text-gray-300">
            당신의 소중한 건강 데이터를 안전하게 지키는 것을 최우선으로 생각합니다.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-4">
              <FiCpu className="h-8 w-8 flex-shrink-0 text-blue-400" />
              <div>
                <h4 className="font-bold">독자적인 AI 엔진</h4>
                <p className="text-gray-400">수백만 건의 데이터를 학습한 AI가 개인 맞춤형 인사이트를 도출합니다.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FiShield className="h-8 w-8 flex-shrink-0 text-blue-400" />
              <div>
                <h4 className="font-bold">국제 표준 데이터 보안</h4>
                <p className="text-gray-400">
                  모든 데이터는 암호화되어 전송 및 저장되며, 국제 정보보호 표준을 준수합니다.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <motion.div
            className="inline-block rounded-full bg-blue-500/10 p-12"
            whileInView={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2 }}
            viewport={{ once: true }}
          >
            <FiShield size={100} className="text-blue-400" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
