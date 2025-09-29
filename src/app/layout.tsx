import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'MemePulse — the playful memecoin landing with easy buy steps',
  description: 'MemePulse makes memecoin hype accessible: clear buy steps, shareable visuals, simple tokenomics, and a community-first vibe.',
  keywords: ['memecoin', 'cryptocurrency', 'buy MEME', 'tokenomics', 'community', 'crypto landing'],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'MemePulse — the playful memecoin landing with easy buy steps',
    description: 'MemePulse makes memecoin hype accessible: clear buy steps, shareable visuals, simple tokenomics, and a community-first vibe.',
    type: 'website',
    url: '/',
    siteName: 'MemePulse',
    images: [{
      url: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759132788818-b4073fda.jpg',
      width: 1200,
      height: 630,
      alt: 'MemePulse — the playful memecoin landing'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MemePulse — the playful memecoin landing with easy buy steps',
    description: 'MemePulse makes memecoin hype accessible: clear buy steps, shareable visuals, simple tokenomics, and a community-first vibe.',
    images: ['https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759132788818-b4073fda.jpg']
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' }
};

export const metadata;

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        {children}
      </body>
    </html>
  );
}