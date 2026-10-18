import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Habib Hot & Cool | AC, Cooling & Solar Panel Care',
  description: 'Professional air conditioner installation, repair, maintenance, new and used AC buying and selling, and solar panel washing. 20+ years of experience.',
  keywords: ['AC repair', 'air conditioning', 'AC maintenance', 'used AC', 'solar panel cleaning', 'Habib Hot and Cool'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
