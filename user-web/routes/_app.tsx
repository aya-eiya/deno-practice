import { type PageProps } from '$fresh/server.ts'
import Header from '../components/layout/Header.tsx'
export default function App({ Component }: PageProps) {
  return (
    <html className={'scroll-smooth'}>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Deno & Fresh Sample Page</title>
        <link rel='stylesheet' href='/styles.css' />
      </head>
      <body>
        <Header />
        <div className={'absolute top-0 w-full'}>
          <Component />
        </div>
      </body>
    </html>
  )
}
