import { NextSeo } from "next-seo";
import { defaultUrl } from "../../next-seo.config";

import { useRouter } from "next/router";

const SEO = ({ page }) => {

    const router = useRouter();

    return (
        <NextSeo
            title={page.seo?.metaTitle || page.title}
            description={page.seo?.metaDescription || page.subtitle}
            openGraph={{
                title: page.seo?.ogTitle || page.seo?.metaTitle || "",
                description: page.seo?.ogDescription || page.seo?.metaDescription || "",
                url: defaultUrl + router.asPath,
            }}
            additionalMetaTags={[
                {
                    property: "keywords",
                    content: page.seo?.focusKeywords || "",
                },
            ]}
            noindex={page.seo?.noIndex || false}
            nofollow={page.seo?.noFollow || false}
        />
    );
}

export default SEO;