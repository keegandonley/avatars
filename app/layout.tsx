import "../styles/globals.css";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-gray-900 h-screen">
      <body>{children}</body>
    </html>
  );
}
