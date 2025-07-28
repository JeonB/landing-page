import { useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import AnimatedText from './AnimatedText';

export default function HowItWorksSection() {
  const steps = [
    { title: '데이터 연동', description: '웨어러블 기기, 건강검진 결과 등 다양한 데이터를 손쉽게 연동합니다.' },
    { title: 'AI 분석 및 리포트', description: '수집된 데이터를 AI가 분석하여 개인 맞춤형 건강 리포트를 생성합니다.' },
    { title: '맞춤 솔루션 제공', description: '분석 결과를 바탕으로 식단, 운동, 수면 등 맞춤형 솔루션을 추천합니다.' },
    { title: '지속적인 모니터링', description: '건강 상태를 지속적으로 트래킹하며 변화에 맞는 피드백을 제공합니다.' },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  return (
    <section ref={ref} className="bg-slate-100 py-24">
      <div className="container mx-auto px-4">
        <AnimatedText text="inPHR 작동 방식" el="h2" className="mb-12 text-center text-4xl font-bold text-gray-800" />
        <div className="relative mx-auto max-w-2xl">
          <motion.div className="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 bg-gray-300">
            <motion.div className="h-full w-full origin-top bg-blue-500" style={{ scaleY: scrollYProgress }} />
          </motion.div>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <motion.div
                  className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 150 : -150 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <h3 className="mb-2 text-2xl font-semibold text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
                <div className="z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white shadow-lg">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
