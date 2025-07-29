import { ReactNode } from 'react';

const Section = ({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`px-4 py-24 sm:px-6 lg:px-8 ${className}`}>
    <div className="container mx-auto">{children}</div>
  </section>
);

export default Section;
