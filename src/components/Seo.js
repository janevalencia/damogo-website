import { NextSeo } from 'next-seo';
import { defaultUrl } from '../../next-seo.config';

import { useRouter } from 'next/router';

const SEO = ({
    metaTitle,
    metaDescription,
    focusKeywords,
    ogTitle,
    ogDescription,
    noIndex,
    noFollow,
}) => {
    // To get the current page's router path.
    const router = useRouter();

    return (
        <NextSeo
            title={metaTitle}
            description={metaDescription}
            openGraph={{
                title: ogTitle ? ogTitle : metaTitle,
                description: ogDescription ? ogDescription : metaDescription,
                url: defaultUrl + router.asPath,
                images: [
                    {
                        url: '/logo.svg',
                        width: 113,
                        height: 25,
                    },
                ],
            }}
            additionalMetaTags={[
                {
                    name: 'keywords',
                    content: focusKeywords,
                },
            ]}
            noindex={noIndex}
            nofollow={noFollow}
        />
    );
};

export default SEO;
