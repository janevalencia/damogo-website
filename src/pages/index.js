import client from '@/libs/_hygraph'
import { pageQuery } from '@/libs/_queries'

import Hero from '@/components/Hero'
import SEO from '@/components/Seo'

export default function Home({ page, locale }) {
  console.log(page)

  console.log(locale)

  return (
    <>
      <SEO seo={page.seo} />
      <Hero hero={page.heroSection} />
    </>
  )
}

export async function getStaticProps({locale}) {
  const hygraph = client()

  const { page } = await hygraph.request(pageQuery, {
    locale,
    slug: "index",
  })

  return {
    props: {
      page,
      locale,
    }
  }
}
