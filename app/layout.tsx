import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "$SANTA | BNB Rewards",
  description:
    "Meet $SANTA, a community-powered BNB Chain token featuring BNB rewards, automatic liquidity and a festive mission.",
  icons: {
    icon: "/santa-logo.png",
  },
  openGraph: {
    title: "$SANTA | BNB Rewards",
    description: "The season of rewards. Discover $SANTA on BNB Chain.",
    images: ["/santa-banner.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
