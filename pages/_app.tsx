import type { AppProps } from "next/app"
import RootLayout from "../components/layout/root-layout"
import "../styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}