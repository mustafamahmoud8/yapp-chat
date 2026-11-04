import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SessionProvider } from "@/components/shared/SessionContext";

export const metadata: Metadata = {
  title: "Yapp — End-to-End Encrypted Messaging",
  description:
    "Yapp is a secure, real-time messaging app with end-to-end encryption. Your messages are encrypted in your browser and can only be read by you and your recipient.",
  keywords: ["messaging", "encrypted", "secure", "E2EE", "chat", "privacy"],
  authors: [{ name: "Mustafa Mahmoud" }],
  openGraph: {
    title: "Yapp — Encrypted Messaging",
    description: "Secure, real-time, end-to-end encrypted messaging.",
    type: "website",
    url: "https://yapp-mvp.vercel.app",
    siteName: "Yapp",
  },
  twitter: {
    card: "summary",
    title: "Yapp — Encrypted Messaging",
    description: "Secure, real-time, end-to-end encrypted messaging.",
  },
};

export const viewport: Viewport = {
  themeColor: "#111b21",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
