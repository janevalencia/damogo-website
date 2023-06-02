import { serialize } from 'next-mdx-remote/serialize';
import he from 'he';

const parseSectionsData = async (sections) =>
    await Promise.all(
        sections.map(async ({ sectionDescription, ...section }) => ({
            ...(sectionDescription && {
                sectionDescription: {
                    markdown: sectionDescription,
                    mdx: await serialize(he.decode(sectionDescription)),
                },
            }),
            ...section,
        }))
    );

export { parseSectionsData };
