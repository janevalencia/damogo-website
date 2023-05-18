import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Button from './Button';

const Hero = ({ hero }) => {
    return (
        <section id='hero' className='relative lg:pt-28 pb-8'>
            {/* Hero content */}
            <div className='container flex flex-col gap-10 md:flex-row md:justify-between items-center md:gap-20'>
                <article className='w-full lg:w-[500px]'>
                    <h1 className='prose-strong:text-primary-green'>
                        <MDXRemote {...hero.title.mdx} />
                    </h1>
                    <p>{hero.description}</p>
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
            <div className='absolute bottom-0 right-0 -z-10'>
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
