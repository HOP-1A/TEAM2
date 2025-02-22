import { Header } from "./components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="geistSans variable geistMono variable antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
