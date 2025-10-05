import './globals.css'

export const metadata = {
  title: "Auto Blog",
  description: "Automotive news and reviews",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">{children}</body>
    </html>
  );
}
