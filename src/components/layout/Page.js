import Hero from '@/components/Hero';
import SEO from '@/components/Seo';

const PageLayout = ({ seo, ...page }) => {
    return (
        <>
            {seo && <SEO {...seo} />}
            {page.hero && <Hero hero={page.hero} />}
        </>
    );
};

export default PageLayout;
