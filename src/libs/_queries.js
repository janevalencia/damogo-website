import { gql } from "graphql-request"

export const pageQuery = gql`
    query PageQuery($slug: String!, $locale: Locale!) {
        page(where: {slug: $slug}, locales: [$locale]) {
            heroSection {
                ... on Hero {
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