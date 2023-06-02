import { parseHeroData } from '@/utils/mdx/_parseHeroData';
import { parseSectionsData } from '@/utils/mdx/_parseSectionsData';

const parsePageData = async ({ hero, sections, ...page }) => ({
    ...(hero && {
        hero: await parseHeroData(hero),
    }),
    ...(sections && {
        sections: await parseSectionsData(sections),
    }),
    ...page,
});

export { parsePageData };
