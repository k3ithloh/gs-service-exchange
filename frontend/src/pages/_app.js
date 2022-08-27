import '../../styles/globals.css';
import '../../styles/FinancialDataOptionsBar.css';
import { SessionProvider } from "next-auth/react"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <style jsx global>{`body {background:white;}`}</style>
    </SessionProvider>
  )
}

// MyApp.getInitialProps = async (appContext) => {
//   let pageProps = {};
//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(appContext.ctx);
//   }
//   return { ...pageProps};
// }
