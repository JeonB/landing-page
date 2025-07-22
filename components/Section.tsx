import { ReactNode } from 'react';

export default function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section className={`px-4 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
}
