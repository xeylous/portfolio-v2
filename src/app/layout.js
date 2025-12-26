import { Poppins, Dosis } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/common/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dosis = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Apurv | Creative Full Stack Engineer",
    template: "%s • Apurv | Creative Full Stack Engineer",
  },
  description: "I enjoy creating frontend solutions with solid foundations, scalability, and excellent user experiences.",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Omopariola Kehinde Philip", "xeylous.xyz", "Apurv", "Portfolio", "Creative Full Stack Developer",
    "Kehinde", "Kehinde Omopariola", "Omopariola", "Apurv Kehinde", "Apurv Philip",
    "Frontend Developer", "Software Engineer", "Web Developer", "JavaScript Developer",
    "React Developer", "Next.js Developer", "Apurv Frontend Developer",
    "Apurv Software Engineer", "Apurv Web Developer", "Apurv JavaScript Developer",
    "Apurv React Developer", "Apurv Next.js Developer"
  ],
  authors: [{ name: "Apurv - Creative Full Stack Developer" }],
  openGraph: {
    type: "website",
    siteName: "Apurv",
    description: "I enjoy creating frontend solutions with solid foundations, scalability, and excellent user experiences.",
    title: {
      default: "Pariola | Creative Frontend Engineer",
      template: "%s • Pariola | Creative Frontend Engineer",
    },
    images: [{ url: "https://pariola.dev/meta/meta-pariola.jpg" }],
    url: "https://pariola.dev",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ipariola",
    title: {
      default: "Pariola | Creative Frontend Engineer",
      template: "%s • Pariola | Creative Frontend Engineer",
    },
    description: "I enjoy creating frontend solutions with solid foundations, scalability, and excellent user experiences.",
    images: ["https://pariola.dev/meta/meta-pariola.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://pariola.dev",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dosis.variable} antialiased`}>
        <SmoothScroll />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
