import { motion } from 'framer-motion';
import AnimatedHeader from './AnimatedHeader';
import { Typography } from './ui';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  titleClassName?: string;
}

const SectionHeader = ({ title, subtitle, titleClassName }: SectionHeaderProps) => {
  return (
    <div className="text-center">
      <AnimatedHeader text={title} className={`${titleClassName} mb-4`} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Typography variant="body1" align="center" className="text-gray-80">
          {subtitle.split('\\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </Typography>
      </motion.div>
    </div>
  );
};

export default SectionHeader;
