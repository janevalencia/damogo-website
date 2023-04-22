import { siteConfig } from "@/utils/_siteConfig"
import { locales } from "@/libs/_locales";

import { useState } from "react";
import { useRouter } from "next/router";
import Image from 'next/image'

const Footer = () => {
    const router = useRouter()

    const [activeLang, setActiveLang] = useState('en');

    const siteTitle = siteConfig.siteMetadata.title

    const handleLang = (locale) => {
        // Switch language.
        router.push(router.asPath, router.asPath, { locale: locale.value })

        // Update active language state.
        setActiveLang(locale.value)
    }

    // Styling.
    const langStyling = {
        active: 'font-bold text-small-text hover:underline',
        inactive: 'font-normal text-small-text hover:underline',
    }

    return (
        <footer className="container py-20">
            <h3 className="site-logo">{siteTitle}</h3>
            <div className="flex flex-col-reverse md:flex-row justify-between">
                {/* Nav & Contact */}
                <section className="flex flex-col lg:flex-row lg:gap-36">
                    <div>
                        <h4 className="footer-title">Ikuti kami</h4>
                        <nav>
                            <ul className="flex flex-col text-small-text">
                                <li>
                                    <a href="#">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="#">Privacy</a>
                                </li>
                                <li>
                                    <a href="#">Karir</a>
                                </li>
                                <li>
                                    <a href="#">Tentang Kami</a>
                                </li>
                                <li>
                                    <a href="#">Sustainability</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h4 className="footer-title">Hubungi kami</h4>
                        <div className="footer-contact">
                            <h5 className="footer-contact-title">Alamat</h5>
                            <p>Jl. Prof. Herman Yohanes No.1212,</p>
                            <p>Terban, Kec. Gondokusuman, Kota Yogyakarta,</p>
                            <p>Daerah Istimewa Yogyakarta 55223.</p>
                        </div>
                        <div className="footer-contact">
                            <h5 className="footer-contact-title">Jam operasional</h5>
                            <p>Mon - Fri 6:00 am - 8:00 pm</p>
                            <p>Sat & Sun 9:30 am - 6:00 pm</p>
                        </div>
                    </div>
                </section>

                {/* Download App */}
                <section>
                    <h4 className="footer-title">Download the app</h4>
                    <div className="flex flex-wrap">
                        <Image
                            src="/images/google-play-1.png"
                            alt="Download the app in Apple store"
                            width={160}
                            height={48}
                            className="mr-6"
                            priority
                        />
                        <Image
                            src="/images/app-store.png"
                            alt="Download the app in Apple store"
                            width={160}
                            height={48}
                            priority
                        />
                    </div>
                </section>
            </div>

            {/* Language Switch */}
            <div>
                <h4 className="footer-title">Languages</h4>
                {locales.map((locale, index) => (
                    <button
                        key={locale.label}
                        onClick={() => handleLang(locale)}
                        className={activeLang === locale.value ? langStyling.active : langStyling.inactive}
                    >
                        {locale.label} {index === 0 && " | "}
                    </button>
                ))}
            </div>
        </footer>
    );
}

export default Footer;