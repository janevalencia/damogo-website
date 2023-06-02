import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const SiteLayout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel='shortcut icon' href='/logo.svg' />
            </Head>
            {/* Overlay Gradient */}
            <div className='absolute w-full sm:w-[650px] h-[650px] rounded-full left-[-15%] top-[-30%] -z-10 bg-gradient-blue blur-[150px]'></div>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default SiteLayout;
