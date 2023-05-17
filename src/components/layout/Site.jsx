import Header from '../Header';
import Footer from '../Footer';

const SiteLayout = ({ children }) => {
    return (
        <>
            {/* Overlay Gradient */}
            <div className='absolute w-[650px] h-[650px] rounded-full left-[-15%] top-[-30%] -z-10 bg-gradient-blue blur-3xl'></div>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default SiteLayout;
