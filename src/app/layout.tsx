import type { Metadata } from 'next';
import { Providers } from './providers';
import ErrorBoundary from '@/components/shared/ErrorBoundary';
import ScrollToTopButton from '@/components/shared/ScrollToTopButton';
import '../index.css';

export const metadata: Metadata = {
  title: 'Pokédex',
  description: 'Pokémon database and information',
  icons: {
    icon: '/pokeapi.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme='light'>
      <body className='bg-[#ebf1ff] min-h-screen' suppressHydrationWarning>
        {/* Skip to main content link for keyboard navigation */}
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-neutral focus:text-white focus:rounded-md focus:shadow-lg'
        >
          Skip to main content
        </a>

        {/* Preload placeholder image to avoid preload warnings */}
        <img
          src='/ditto-placeholder.png'
          alt=''
          className='hidden'
          aria-hidden='true'
          fetchPriority='low'
        />
        <ErrorBoundary>
          <Providers>
            <div
              className='container min-h-screen p-6'
              id='main-content'
              role='main'
            >
              {children}
              <ScrollToTopButton />
            </div>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
