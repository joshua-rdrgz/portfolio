import Link from 'next/link';
import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { SidebarQuery } from '@/sanity/lib/queries';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Joshua Rodriguez - Portfolio',
  description: 'This is the portfolio of software developer Joshua Rodriguez.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default async function Page() {
  const results = await client.fetch(SidebarQuery);

  return (
    <section className='container mx-auto grid grid-cols-1 gap-6 p-12'>
      <Sidebar data={results} />
      <h1 className='text-4xl font-bold'>Home</h1>
      <hr />
      <Link href='/posts'>Posts index &rarr;</Link>
    </section>
  );
}
