import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store'
import "../components/layout/layout.css"
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Loading } from '../components/Loading'
import { useSsrPageLoading } from '../hooks/useIsSsrPageLoading'

function MyApp({ Component, pageProps }: AppProps) {

 const {isLoading} = useSsrPageLoading()
  return (
    <>
      {isLoading && <Loading />}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>

  )
}

export default MyApp
