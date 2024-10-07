import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Joshua Rodriguez - Portfolio',
  description: 'This is the portfolio of software developer Joshua Rodriguez.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default async function Page() {
  return (
    <section>
      <div>page</div>
      <div style={{ height: '10000px' }} />
    </section>
  );
}
