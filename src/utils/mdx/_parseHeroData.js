import { serialize } from 'next-mdx-remote/serialize';
import he from 'he';

const parseHeroData = async ({ title, ...hero }) => ({
    ...(title && {
        title: {
            markdown: title,
            mdx: await serialize(he.decode(title)),
        },
    }),
    ...hero,
});

export { parseHeroData };
