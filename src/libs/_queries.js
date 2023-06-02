import { gql } from "graphql-request"

export const pageQuery = gql`
    query PageQuery($slug: String!, $locale: Locale!) {
        page(where: {slug: $slug}, locales: [$locale]) {
            hero: heroSection {
                ... on Hero {
                    __typename
                    title
                    description
                    ctaButton {
                        ... on CtaButton {
                            text
                            path
                            externalUrl
                            theme
                        }
                    }
                    image {
                        url
                    }
                }
            }
            sections {
                ... on Section {
                    htmlId
                    smallHeading
                    sectionTitle
                    sectionDescription
                    ctaButton {
                        ... on CtaButton {
                            text
                            path
                            externalUrl
                            theme
                        }
                    }
                    images {
                        url
                        order
                    }
                    layout
                    theme
                }
            }
            seo {
                metaTitle
                metaDescription
                ogTitle
                ogDescription
                noIndex
                noFollow
                focusKeywords
            }
        }
    }
`