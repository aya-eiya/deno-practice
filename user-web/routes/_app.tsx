import { type PageProps } from '$fresh/server.ts'
import Header from '../components/Header.tsx'
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>user-web</title>
        <link rel='stylesheet' href='/styles.css' />
      </head>
      <body>
        <Header />
        <div class={'absolute top-0 w-full'}>
          <Component />
        </div>
      </body>
    </html>
  )
}
