import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Musko Properties and Real Estate | Land • Invest • Develop • Build • Grow',
  description:
    'Institutional real estate firm in Abuja, Nigeria specializing in selling authenticated estate lands in Gwagwalada, strategic high-yield land banking, and transparent drone inspections. Land / Invest / Develop / Build / Grow.',
  keywords: [
    'Musko Properties',
    'Musko Real Estate',
    'Gwagwalada Land for Sale',
    'Abuja Estate Lands',
    'Land Banking in Abuja',
    'UniAbuja Estate Plots',
    'FCDA Right of Occupancy',
    'AGIS Title Verification',
    'Nigeria Diaspora Real Estate',
    'Gwagwalada Commercial Land'
  ],
  icons: {
    icon: '/musko-logo.jpg',
    apple: '/musko-logo.jpg',
  },
  openGraph: {
    title: 'Musko Properties and Real Estate (Abuja, Nigeria)',
    description:
      'Verified lands for master-planned estates and defensive capital land banking in Gwagwalada, Abuja backed by unassailable AGIS titles.',
    type: 'website',
    url: 'https://muskoproperties.ng',
    images: [{ url: '/musko-logo.jpg' }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/musko-logo.jpg" type="image/jpeg" />
      </head>
      <body className="bg-[#07111F] text-[#8FA2BF] font-sans antialiased selection:bg-[#E5A823] selection:text-[#07111F]">
        {children}
      </body>
    </html>
  );
}
