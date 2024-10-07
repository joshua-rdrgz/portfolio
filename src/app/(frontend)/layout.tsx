import '@/app/globals.css';
import Sidebar from '@/components/layout/sidebar';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { client } from '@/sanity/lib/client';
import { SidebarQuery } from '@/sanity/lib/queries';
import { League_Spartan, Raleway } from 'next/font/google';

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-league-spartan',
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarData = await client.fetch(SidebarQuery);

  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${raleway.variable} ${leagueSpartan.variable}`}
    >
      <body className='font-raleway'>
        <ThemeProvider attribute='class' defaultTheme='system'>
          <div className='lg:flex'>
            <Sidebar sidebarData={sidebarData} />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
