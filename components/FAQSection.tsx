import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import AnimatedText from './AnimatedText';

export default function FAQSection() {
  const faqs = [
    {
      q: '어떤 데이터를 연동할 수 있나요?',
      a: '삼성헬스, 애플건강 등 모바일 헬스케어 앱 데이터, 스마트 워치, 체중계 등 다양한 웨어러블 기기, 그리고 건강검진 결과 데이터 등을 연동할 수 있습니다.',
    },
    {
      q: '의료 서비스와는 어떻게 다른가요?',
      a: 'inPHR은 의료법을 준수하는 비의료 건강관리 서비스입니다. 질병의 진단 및 치료는 병원에서, 일상에서의 건강 관리는 inPHR과 함께하여 시너지를 낼 수 있습니다.',
    },
    {
      q: '데이터 보안은 안전한가요?',
      a: '네, 사용자의 모든 데이터는 최신 암호화 기술을 통해 안전하게 관리되며, 개인정보보호 규정을 철저히 준수하고 있습니다. 사용자의 동의 없이는 절대 외부에 공유되지 않습니다.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <AnimatedText text="자주 묻는 질문" el="h2" className="mb-12 text-center text-4xl font-bold text-gray-800" />
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden rounded-lg border border-gray-200">
              <button
                className="flex w-full items-center justify-between p-6 text-left text-lg font-medium text-gray-800 hover:bg-gray-50"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span>{faq.q}</span>
                <motion.div animate={{ rotate: activeIndex === index ? 180 : 0 }}>
                  <FiPlus />
                </motion.div>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="p-6 pt-0 text-gray-600">{faq.a}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
