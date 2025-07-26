import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ end, duration = 2, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref}>
      {isInView && (
        <CountUp end={end} duration={duration} suffix={suffix} prefix={prefix} enableScrollSpy scrollSpyOnce />
      )}
    </div>
  );
}
