import client from '@/libs/_hygraph'
import { pageQuery } from '@/libs/_queries'
import { parsePageData } from '@/utils/mdx/_parsePageData'

import { PageLayout } from '@/components/layout'

export default function Home({ page }) {
  return <PageLayout {...page} />
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
