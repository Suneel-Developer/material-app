"use client";
import "./globals.css";
interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main >
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
