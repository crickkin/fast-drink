import './globals.css';

export const metadata = {
  title: 'Fast Drinks',
  description: 'Drink do seu jeito, na sua hora',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}