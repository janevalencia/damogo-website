import Image from 'next/image';

import { sectionTheme } from '@/libs/_theme';

const Stack = ({
    smallHeading,
    sectionTitle,
    images,
    theme,
}) => {
    return (
        <section className={sectionTheme.background[theme]}>
            <section className='container py-24'>
                <h3
                    className={
                        'text-center mb-3 ' + sectionTheme.subheading[theme]
                    }
                >
                    {smallHeading}
                </h3>
                <h2 className={'text-center mb-16 ' + sectionTheme.title[theme]}>
                    {sectionTitle}
                </h2>
                <div className='flex flex-col gap-28 md:flex-row justify-between items-center'>
                    {images.map((image) => (
                        <Image 
                            key={image.order}
                            src={image.url}
                            alt={`damogo-partner-${image.order}`}
                            width={143}
                            height={143}
                        />
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Stack;
