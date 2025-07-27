import { motion } from 'motion/react';
import AnimatedHeader from './AnimatedHeader';
import Section from './Section';

export default function HowItWorksSection() {
  const steps = ['데이터 연결', 'AI 분석', '솔루션 확인', '건강 개선'];
  return (
    <Section>
      <AnimatedHeader text="작동 원리" className="text-center" />
      <p className="mt-4 text-center text-lg text-gray-600">단 4단계로 건강 관리가 쉬워집니다.</p>
      <div className="relative mt-16">
        <div className="absolute top-1/2 left-0 h-1 w-full bg-gray-200" aria-hidden="true" />
        <motion.div
          className="absolute top-1/2 left-0 h-1 w-full bg-blue-600"
          style={{ transformOrigin: 'left' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 'all' }}
        />
        <div className="relative grid grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-2xl font-bold text-blue-600">
                {index + 1}
              </div>
              <h3 className="mt-4 font-semibold text-gray-800">{step}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
