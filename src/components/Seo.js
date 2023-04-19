import { NextSeo } from "next-seo";
import { defaultUrl } from "../../next-seo.config";

import { useRouter } from "next/router";

const SEO = ({ seo }) => {
    
    // To get the current page's router path.
    const router = useRouter();

    return (
        <NextSeo
            title={seo.metaTitle}
            description={seo.metaDescription}
            openGraph={{
                title: seo.ogTitle ? seo.ogTitle : seo.metaTitle,
                description: seo.ogDescription ? seo.ogDescription : seo.metaDescription,
                url: defaultUrl + router.asPath,
            }}
            additionalMetaTags={[
                {
                    property: "keywords",
                    content: seo.focusKeywords,
                },
            ]}
            noindex={seo.noIndex}
            nofollow={seo.noFollow}
        />
    );
}

export default SEO;