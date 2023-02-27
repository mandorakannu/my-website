import "./globals.css";
import { Source_Sans_Pro } from "next/font/google";
const sans_pro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: "600",
});
interface MetaDataTypes {
  title: string;
  description: string;
  url: string;
  keywords: string[];
  robots: Object;
  httpEquiv: string;
  content: string;
  language: string;
  revisitAfter: string;
  author: string;
  siteName: string;
  images: Array<Object>;
  type: string;
  twitter: Object;
  verification: Object;
}
export const metadata: MetaDataTypes = {
  title: "Kannu Mandora | Full Stack Developer",
  description:
    "Hi, it's me Kannu Mandora. I want to be a Full Stack Developer. I am currently focused on my skills in React, Node, and Express. I am also learning about MySQL and MongoDB. I am also a computer student at the College of SETH G.L. BIHANI S.D. P.G. COLLEGE at Sriganganagar.",
  keywords:
    ["Kannu", "Kannu Mandora", "Mandora","Web Developer", "Full Stack", "MERN Stack", "Stack", "Full Stack Developer", "Mandora Kannu", "tech blogger", "developer", "web development", "software engineering", "programming languages"],
  httpEquiv: "Content-Type",
  content: "text/html; charset=utf-8",
  language: "English",
  revisitAfter: "1 days",
  author: "Kannu Mandora",
  url: "https://mandorakannu.tech",
  siteName: "Kannu Mandora | Full Stack Developer",
  images: [
    {
      url: "https://mandorakannu.tech/images/main.webp",
      width: 800,
      height: 600,
      alt: "Kannu Mandora | Full Stack Developer",
    },
    {
      url: 'https://mandorakannu.tech/images/main.webp',
      width: 1800,
      height: 1600,
      alt: 'Kannu Mandora | Full Stack Developer',
    },
  ],
  type: "website",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kannu Mandora | Full Stack Developer',
    description: 'This is my personal website. I am a developer who shares insightful on web development, software engineering, and programming languages.',
    siteId: '@mandorakannu',
    creator: '@KannuMandora',
    creatorId: '1467726470533754880',
    images: ['https://mandorakannu.tech/images/main.webp'],
  },
  verification: {
    google: '_RMbn1Udckop0qHdoAu_PoiGFWqwB19CecNEqZfHxAE',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <html lang="en">
      <body className={sans_pro.className} >{children}</body>
    </html>
    </>
  );
}
