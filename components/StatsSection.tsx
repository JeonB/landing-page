import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';

export default function StatsSection() {
  const stats = [
    { value: 10000, suffix: '+', label: '누적 사용자' },
    { value: 98, suffix: '%', label: '서비스 만족도' },
    { value: 50, suffix: '+', label: '연동 파트너' },
    { value: 15, prefix: '평균 ', suffix: '%', label: '건강 지표 개선' },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-gray-800 py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-4xl font-bold text-blue-400 md:text-5xl">
                <AnimatedCounter end={stat.value} duration={3} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="mt-2 text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
