import "./globals.css";

interface MetaDataTypes {
  title: string;
  description: string;
  url: string;
  image: string;
  keywords: string;
  robots: string;
  httpEquiv: string;
  content: string;
  language: string;
  revisitAfter: string;
  author: string;
}
export const metadata: MetaDataTypes = {
  title: "Kannu Mandora | Full Stack Developer",
  description:
    "Hi, it's me Kannu Mandora. I want to be a Full Stack Developer. I am currently focused on my skills in React, Node, and Express. I am also learning about MySQL and MongoDB. I am also a computer student at the College of SETH G.L. BIHANI S.D. P.G. COLLEGE at Sriganganagar.",
  keywords:
    "Kannu, Kannu Mandora, Mandora,Web Developer, Full Stack, MERN Stack, Stack, Full Stack Developer",
  robots: "index, follow",
  httpEquiv: "Content-Type",
  content: "text/html; charset=utf-8",
  language: "English",
  revisitAfter: "1 days",
  author: "Kannu Mandora",
  url: "https://mandorakannu.tech",
  image: "https://mandorakannu.tech/images/main.webp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
