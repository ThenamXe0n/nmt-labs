import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/ui/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nameet Labs - Learn Tech the Easy Way",
  description:
    "Nameet Labs is an open-source upskilling, learning, and collaboration platform for developers. Learn MERN Stack, React, Node.js, JavaScript, Full Stack Development, AI, DevOps, DSA, and modern technologies with beginner-friendly tutorials, docs, guides, and coding resources.",
  keywords: [
    "Nameet Labs",
    "Nameet Mandwal",
    "MERN Stack",
    "React JS",
    "Next.js",
    "Node.js",
    "Express JS",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "Web Development",
    "Open Source",
    "Coding Platform",
    "Developer Community",
    "Tech Learning",
    "Programming Tutorials",
    "Coding Tutorials",
    "Developer Docs",
    "Programming Guides",
    "Geek for Geeks Alternative",
    "DSA",
    "System Design",
    "DevOps",
    "Docker",
    "Kubernetes",
    "AWS",
    "Cloud Computing",
    "AI",
    "Artificial Intelligence",
    "Machine Learning",
    "Coding Interview Preparation",
    "Learn React",
    "Learn Node.js",
    "Learn JavaScript",
    "Tech Blog",
    "Programming India",
    "Indore Developers",
    "Open Source Community",
  ],
  authors: [{ name: "Nameet Mandwal", url: "https://nameetlabs.com" }], //need to be updated
  creator: "Nameet Mandwal",
  publisher: "Nameet Labs",
  metadataBase: new URL("https://nameetlabs.com"), //need to be updated
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nameet Labs - Learn Tech the Easy Way",
    description:
      "Open-source platform for upskilling, learning, collaboration, tutorials, documentation, and modern tech education.",
    url: "https://nameetlabs.com",//need to be updated
    siteName: "Nameet Labs",
    locale: "en_IN",
    type: "website",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Nameet Labs" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nameet Labs - Learn Tech the Easy Way",
    description:
      "Learn MERN Stack, React, Node.js, AI, DevOps, DSA, and modern technologies with Nameet Labs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#FC6E20",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <NavBar/>
      {children}</body>
    </html>
  );
}
