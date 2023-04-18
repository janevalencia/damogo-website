const url = process.env.SITE_URL || 'https://makan-cerdas-next.vercel.app';
const seo = {
    title: undefined,
    titleTemplate: 'Makan Cerdas | %s',
    defaultTitle: 'Makan Cerdas',
    openGraph: {
        siteName: 'Makan Cerdas',
        type: 'website',
        url,
    },
    twitter: {
        handle: '@makancerdas',
        site: '@makancerdas',
        cardType: 'summary_large_image',
    },
}

export { seo as defaultSEO, url as defaultUrl }