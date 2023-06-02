import Hero from '@/components/Hero';
import SEO from '@/components/Seo';
import { Stack, StackSplit, Split, SplitReversed } from '@/components/sections';

const PageLayout = ({ seo, sections, ...page }) => {
    return (
        <>
            {seo && <SEO {...seo} />}

            {page.hero && <Hero hero={page.hero} />}

            {sections && (
                <>
                    {sections.map((section) => {
                        switch (section.layout) {
                            case 'Stack_Split':
                                return <StackSplit key={section.sectionTitle} {...section} />;
                            case 'Stack':
                                return <Stack key={section.sectionTitle} {...section} />;
                            case 'Split':
                                return <Split key={section.sectionTitle} {...section} />;
                            case 'Split_Reversed':
                                return <SplitReversed key={section.sectionTitle} {...section} />;
                            default:
                                return null;
                        }
                    })}
                </>
            )}
        </>
    );
};

export default PageLayout;
