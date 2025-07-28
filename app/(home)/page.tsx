import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <Link href="/test1">Test1</Link>
      <Link href="/test2">Test2</Link>
      <Link href="/test3">Test3</Link>
    </div>
  );
}
