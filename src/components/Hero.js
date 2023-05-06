import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

const Hero = ({ hero }) => {
    return (
        <section id='hero' className='relative pt-28 pb-8'>
            {/* Hero content */}
            <div className='container flex justify-between items-center gap-20'>
                <article className='flex-initial w-[500px]'>
                    <h1 className='prose-strong:text-primary-green'>
                        <MDXRemote {...hero.title.mdx} />
                    </h1>
                    <p>{hero.description}</p>
                </article>
                <Image
                    src={hero.image.url}
                    alt='Makan Cerdas Hero Image'
                    width={484}
                    height={326}
                    className='relative left-[5%]'
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
