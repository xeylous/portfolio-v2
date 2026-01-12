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
    "xeylous.xyz", "Apurv", "Portfolio", "Creative Full Stack Developer",
    "Frontend Developer", "Software Engineer", "Web Developer", "JavaScript Developer",
    "React Developer", "Next.js Developer", "Apurv Frontend Developer",
    "Apurv Software Engineer", "Apurv Web Developer", "Apurv JavaScript Developer",
    "Apurv React Developer", "Apurv Next.js Developer"
  ],
  authors: [{ name: "Apurv - Creative Full Stack Developer" }],
  openGraph: {
    type: "website",
    siteName: "Apurv",
    description: "I enjoy creating end-to-end solutions with solid foundations, scalability, and excellent user experiences.",
    title: {
      default: "Apurv | Creative Full Stack Engineer",
      template: "%s • Apurv | Creative Full Stack Engineer",
    },
    images: [{ url: "https://ik.imagekit.io/xeylous/Profile%20pic.png" }],
    url: "https://apurv.xyz",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ipariola",
    title: {
      default: "Apurv | Creative Full Stack Engineer",
      template: "%s • Apurv | Creative Full Stack Engineer",
    },
    description: "I enjoy creating frontend solutions with solid foundations, scalability, and excellent user experiences.",
    images: ["https://ik.imagekit.io/xeylous/Profile%20pic.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://apurv.xyz",
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
