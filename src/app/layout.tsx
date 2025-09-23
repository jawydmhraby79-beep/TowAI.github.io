import SciFiHeader from '@/components/SciFiHeader';
import SciFiFooter from '@/components/SciFiFooter';
import { useSciFiTheme } from '@/hooks/useSciFiTheme';
import '../styles/globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  const { theme } = useSciFiTheme();

  return (
    <html lang="en">
      <body className={`bg-gradient-to-b from-[${theme.blue}] to-[#C1E8FF]`}>
        <SciFiHeader />
        {children}
        <SciFiFooter />
      </body>
    </html>
  );
}
