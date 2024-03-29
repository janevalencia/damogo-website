import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Button from './Button';

const Hero = ({ hero }) => {
    return (
        <section id='hero' className='relative lg:pt-28 pb-8'>
            {/* Hero content */}
            <div className='container flex flex-col items-center gap-10 lg:flex-row md:justify-between md:gap-20'>
                <article className='w-full lg:w-[550px]'>
                    <h1 className='prose-strong:text-primary-green'>
                        <MDXRemote {...hero.title.mdx} />
                    </h1>
                    <p className='font-normal text-primary-grey text-normal-text'>{hero.description}</p>
                    <div className='flex flex-col lg:flex-row gap-6 mt-10'>
                        {hero.ctaButton && hero.ctaButton.map((btn) => (
                            <Button key={btn.text} {...btn} />
                        ))}
                    </div>
                </article>
                <Image
                    src={hero.image.url}
                    alt='Makan Cerdas Hero Image'
                    width={484}
                    height={326}
                    className='relative lg:left-[5%]'
                />
            </div>
            {/* Overlay */}
            <div className='hidden lg:block absolute bottom-0 right-0 -z-10'>
                <Image
                    src='/images/hero-rect.png'
                    alt='Overlay'
                    width={666}
                    height={391}
                />
            </div>
        </section>
    );
};

export default Hero;
