import '@/styles/globals.css'

import { DefaultSeo } from 'next-seo'
import { defaultSEO } from '../../next-seo.config'

import { SiteLayout } from '@/components/layout'

import { Noto_Sans } from 'next/font/google'

// Default font is set to Noto Sans.
const noto_sans = Noto_Sans({
  subsets: ['latin'],
  style: ['normal'],
  weight: ["300", "400", "500", "600"],
  preload: true,
  adjustFontFallback: true,
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
                :root {
                    --font-primary: ${noto_sans.style.fontFamily};
                }
      `}</style>
      <DefaultSeo {...defaultSEO} />
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </>
  )
}
