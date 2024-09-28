// import styles from './page.module.css';

export const metadata = {
  title: 'My Precious To-do',
  description: 'This shows the usecase of useState "which a hook in react" inside my next.js todo app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
