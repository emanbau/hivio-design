import '../styles/globals.scss'
import { NavbarContextProvider } from '../contexts/NavbarContext'

function MyApp({ Component, pageProps }) {
  return (
    <NavbarContextProvider>
      <Component {...pageProps} />
    </NavbarContextProvider>
  )
}

export default MyApp
