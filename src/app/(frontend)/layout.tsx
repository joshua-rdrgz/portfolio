import '@/app/globals.css';
import Sidebar from '@/components/layout/sidebar';
import { Toaster } from '@/components/ui/toaster';
import { client } from '@/sanity/lib/client';
import { SidebarQuery } from '@/sanity/lib/queries';
import { Metadata } from 'next';
import { Athiti } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Joshua Rodriguez - Portfolio',
  description: 'This is the portfolio of software developer Joshua Rodriguez.',
  icons: {
    icon: '/favicon.svg',
  },
};

const athiti = Athiti({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-athiti',
  weight: '400',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarData = await client.fetch(SidebarQuery);

  return (
    <html lang='en' suppressHydrationWarning className={`${athiti.variable}`}>
      <body className='font-athiti'>
        <div className='lg:flex'>
          <Sidebar sidebarData={sidebarData} />
          <main className='px-7'>{children}</main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
