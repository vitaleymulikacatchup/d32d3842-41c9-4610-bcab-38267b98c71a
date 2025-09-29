"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import CyclopsHero from '@/components/sections/layouts/hero/SplitHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import BaseFooter from '@/components/sections/layouts/footer/BaseFooter';

const theme: SiteTheme = {
  styleVariant: 'funAndTrendy',
  colorTemplate: 1,
  textAnimation: 'slide',
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id='nav' data-section='nav'>
        <NavbarStyleApple
          logoSrc='https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1759132790787-ba37dac5.jpg'
          logoAlt='MemePulse logo'
          brandName='MemePulse'
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'Footer', id: 'footer' },
          ]}
        />
      </div>
      <div id='hero' data-section='hero'>
        <CyclopsHero
          title='Welcome to MemePulse'
          subtitle='Your playful entry into the world of memecoins!'
          primaryButtonText='Buy MEME'
          secondaryButtonText='Learn More'
          characterImage='https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759132788818-b4073fda.jpg'
          characterImageAlt='MemePulse Mascot'
        />
      </div>
      <div id='about' data-section='about'>
        <BaseAbout
          title='About MemePulse'
          descriptions={[
            'MemePulse is the most vibrant memecoin in the crypto space!',
            'Our mission is to make cryptocurrency accessible and fun for everyone.',
            'Join our community and be part of the meme revolution!'
          ]}
        />
      </div>
      <div id='how-to-buy' data-section='how-to-buy'>
        <HowToBuy2D variant='reveal' />
      </div>
      <div id='tokenomics' data-section='tokenomics'>
        <PatternTokenomics
          title='MemePulse Tokenomics'
          description='A brief overview of our token distribution and metrics.'
          kpiItems={[
            { value: '1M', description: 'Total Supply', icon: 'DollarSign' },
            { value: '500K', description: 'Circulating Supply', icon: 'DollarSign' },
            { value: '200K', description: 'Market Cap', icon: 'DollarSign' }
          ]}
        />
      </div>
      <div id='footer' data-section='footer'>
        <BaseFooter
          columns={[
            { title: 'Quick Links', items: [
              { label: 'Home', onClick: () => {} },
              { label: 'About', onClick: () => {} },
              { label: 'How to Buy', onClick: () => {} },
              { label: 'Tokenomics', onClick: () => {} }
            ]},
            { title: 'Resources', items: [
              { label: 'Documentation', onClick: () => {} },
              { label: 'Support', onClick: () => {} },
              { label: 'Community', onClick: () => {} }
            ]},
            { title: 'Follow Us', items: [
              { label: 'Twitter', onClick: () => {} },
              { label: 'Discord', onClick: () => {} },
              { label: 'Telegram', onClick: () => {} }
            ]},
          ]}
          copyrightText='© 2023 MemePulse. All Rights Reserved.'
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}