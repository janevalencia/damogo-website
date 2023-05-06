import client from '@/libs/_hygraph'
import { pageQuery } from '@/libs/_queries'

import Hero from '@/components/Hero'
import SEO from '@/components/Seo'
import { parsePageData } from '@/utils/mdx/_parsePageData'

export default function Home({ page }) {
  console.log(page)

  return (
    <>
      <SEO seo={page.seo} />
      <Hero hero={page.hero} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const hygraph = client()

  const { page } = await hygraph.request(pageQuery, {
    locale,
    slug: "index",
  })

  const parsedPage = await parsePageData(page)

  return {
    props: {
      page: parsedPage
    }
  }
}
