import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

import Button from '@/components/Button';
import { sectionTheme } from '@/libs/_theme';

const StackSplit = ({
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
            <section className='container py-24'>
                <h3
                    className={
                        'text-center mb-3 ' + sectionTheme.subheading[theme]
                    }
                >
                    {smallHeading}
                </h3>
                <h2 className={'text-center ' + sectionTheme.title[theme]}>{sectionTitle}</h2>
                <div className='flex flex-col items-center mt-24 gap-20 lg:flex-row lg:justify-between lg:gap-11'>
                    <div className='relative flex flex-col items-center w-2/5'>
                        <Image
                            src='/images/bg-circle.png'
                            alt='Overlay Circle'
                            width={500}
                            height={500}
                        />
                        <div className='absolute top-[-20%] z-10 w-3/4'>
                            <Image
                                src={images[0].url}
                                alt={`${sectionTitle}-image`}
                                width={500}
                                height={525}
                            />
                        </div>
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <div
                            className={
                                'font-normal text-2xl mb-8 ' +
                                sectionTheme.description[theme]
                            }
                        >
                            <MDXRemote {...sectionDescription.mdx} />
                        </div>
                        <Button {...ctaButton} />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default StackSplit;
