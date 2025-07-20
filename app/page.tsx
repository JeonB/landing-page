import Link from 'next/link';

export default function Home() {
  return (
    <div className="mt-10 flex justify-center gap-4 py-4 text-center">
      <Link href="/preview-1">prview-1</Link>
      <Link href="/preview-2">prview-2</Link>
      <Link href="/preview-3">preview-3</Link>
      <Link href="/preview-4">preview-4</Link>
      <Link href="/preview-5">preview-5</Link>
    </div>
  );
}
