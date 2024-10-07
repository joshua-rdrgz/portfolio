import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sanity Studio',
  description: 'Sanity Studio for Joshua Rodriguez Portfolio',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
