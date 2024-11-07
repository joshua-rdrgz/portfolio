import '@/app/globals.css';
import Sidebar from '@/components/layout/sidebar';
import { Toaster } from '@/components/ui/toaster';
import { client } from '@/sanity/lib/client';
import { SidebarQuery } from '@/sanity/lib/queries';
import { DM_Mono } from 'next/font/google';

const dmMono = DM_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
  weight: '400',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarData = await client.fetch(SidebarQuery);

  return (
    <html lang='en' suppressHydrationWarning className={`${dmMono.variable}`}>
      <body className='font-dm-mono'>
        <div className='lg:flex'>
          <Sidebar sidebarData={sidebarData} />
          <main className='px-7'>{children}</main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
