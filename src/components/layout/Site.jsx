import Header from "../Header";
import Footer from "../Footer";

const SiteLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default SiteLayout;