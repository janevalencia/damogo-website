import { serialize } from 'next-mdx-remote/serialize';
import he from 'he';

import { parseHeroData } from '@/utils/mdx/_parseHeroData';

const parsePageData = async ({ hero, ...page }) => ({
    ...(hero && {
        hero: await parseHeroData(hero),
    }),
    ...page,
});

export { parsePageData };
