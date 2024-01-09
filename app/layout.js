import './globals.css'

export const metadata = {
	title: 'Dashboard'
}

export default function RootLayout({ children }) {
  return (
	  <html lang="en">
		  <link rel="icon" href="./favicon.ico" sizes="any" />
		  <body>{children}</body>
    </html>
  )
}
