import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

import Button from '@/components/Button';
import { sectionTheme } from '@/libs/_theme';

const SplitReversed = ({
    htmlId,
    smallHeading,
    sectionTitle,
    sectionDescription,
    ctaButton,
    images,
    theme,
}) => {
    return (
        <section id={htmlId} className={sectionTheme.background[theme]}>
            <section className='container py-6 lg:pt-16 lg:pb-0'>
                <div className='flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:items-end lg:gap-11'>
                    <div className='w-full pb-10 lg:w-3/4'>
                        <div>
                            <h3
                                className={
                                    'mb-3 ' + sectionTheme.subheading[theme]
                                }
                            >
                                {smallHeading}
                            </h3>
                            <h2 className={sectionTheme.title[theme]}>
                                {sectionTitle}
                            </h2>
                        </div>
                        <div
                            className={
                                'font-normal text-2xl my-14 ' +
                                sectionTheme.description[theme]
                            }
                        >
                            <MDXRemote {...sectionDescription.mdx} />
                        </div>
                        <Button {...ctaButton} />
                    </div>

                    <div className='relative flex flex-col items-center w-2/5'>
                        {theme === 'White_Yellow' ? (
                            <div className='w-full z-10'>
                                <Image
                                    src={images[0].url}
                                    alt={`${sectionTitle}-image`}
                                    width={500}
                                    height={525}
                                />
                            </div>
                        ) : (
                            <div className='w-2/3 z-10'>
                                <Image
                                    src={images[0].url}
                                    alt={`${sectionTitle}-image`}
                                    width={500}
                                    height={525}
                                />
                            </div>
                        )}

                        <div className='absolute w-full bottom-0'>
                            {theme === 'Transparent' && (
                                <Image
                                    src='/images/bg-circle.png'
                                    alt='Overlay Circle'
                                    width={500}
                                    height={500}
                                />
                            )}

                            {theme === 'Blue' && (
                                <Image
                                    src='/images/ellipse-2.png'
                                    alt='Overlay Circle'
                                    width={500}
                                    height={500}
                                />
                            )}

                            {theme === 'Green' && (
                                <Image
                                    src='/images/ellipse-1.png'
                                    alt='Overlay Circle'
                                    width={500}
                                    height={500}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default SplitReversed;
