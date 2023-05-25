import LoadingIndicator from '@/components/UI/LoadingIndicator'
import './globals.css'
import NavBar from './layouts/NavBar'

export const metadata = {
  title: 'Luffysfightclub',
  description: 'life on the streets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-default-bg text-default-text">

        <article className="m-5 md:m-20">
          <header className="z-[999] sticky top-0 bg-default-bg md:static">
            <NavBar />
          </header>

          <main className=" md:ml-64">
            {children}
          </main>

          <footer className="md:ml-64">

          </footer>
        </article>

      </body>
    </html>
  )
}
