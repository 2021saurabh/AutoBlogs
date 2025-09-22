import './globals.css'

export const metadata = {
  title: "Auto Blog",
  description: "Automotive news and reviews",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">{children}</body>
    </html>
  );
}
