import Image from 'next/image'

const Hero = ({ hero }) => {
    return (
        <section className="flex min-h-screen flex-col items-center justify-between p-24">
            {hero.title}
        </section>
    );
}

export default Hero;