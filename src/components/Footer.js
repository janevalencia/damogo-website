import { siteConfig } from '@/libs/_siteConfig';
import { locales } from '@/libs/_locales';

import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Footer = () => {
    const router = useRouter();

    const [activeLang, setActiveLang] = useState('en');

    const handleLang = (locale) => {
        // Switch language.
        router.push(router.asPath, router.asPath, { locale: locale.value });

        // Update active language state.
        setActiveLang(locale.value);
    };

    // Styling.
    const langStyling = {
        active: 'font-bold text-small-text hover:underline',
        inactive: 'font-normal text-small-text hover:underline',
    };

    return (
        <footer className='bg-gradient-to-t from-gradient-blue to-white'>
            <div className='container py-20 '>
                <span>
                    <Image
                        src='/logo.svg'
                        alt={siteConfig.siteMetadata.title}
                        width={113}
                        height={25}
                    />
                </span>
                <section className='flex flex-col-reverse md:flex-row justify-between'>
                    {/* Nav & Contact */}
                    <div className='flex flex-col lg:flex-row lg:gap-36'>
                        <article>
                            <h4 className='footer-title'>Ikuti kami</h4>
                            <nav>
                                <ul className='flex flex-col text-small-text'>
                                    <li>
                                        <a href='#'>Terms of Use</a>
                                    </li>
                                    <li>
                                        <a href='#'>Privacy</a>
                                    </li>
                                    <li>
                                        <a href='#'>Karir</a>
                                    </li>
                                    <li>
                                        <a href='#'>Tentang Kami</a>
                                    </li>
                                    <li>
                                        <a href='#'>Sustainability</a>
                                    </li>
                                </ul>
                            </nav>
                        </article>
                        <article>
                            <h4 className='footer-title'>Hubungi kami</h4>
                            <div className='footer-contact'>
                                <h5 className='footer-contact-title'>Alamat</h5>
                                <p>Jl. Prof. Herman Yohanes No.1212,</p>
                                <p>
                                    Terban, Kec. Gondokusuman, Kota Yogyakarta,
                                </p>
                                <p>Daerah Istimewa Yogyakarta 55223.</p>
                            </div>
                            <div className='footer-contact'>
                                <h5 className='footer-contact-title'>
                                    Jam operasional
                                </h5>
                                <p>Mon - Fri 6:00 am - 8:00 pm</p>
                                <p>Sat & Sun 9:30 am - 6:00 pm</p>
                            </div>
                        </article>
                    </div>

                    {/* Download App */}
                    <section>
                        <h4 className='footer-title'>Download the app</h4>
                        <div className='flex flex-wrap'>
                            <span className='mr-6 hover:cursor-pointer'>
                                <Image
                                    src='/images/google-play-1.png'
                                    alt='Download the app in Apple store'
                                    width={160}
                                    height={48}
                                    priority
                                />
                            </span>
                            <span className='hover:cursor-pointer'>
                                <Image
                                    src='/images/app-store.png'
                                    alt='Download the app in Apple store'
                                    width={160}
                                    height={48}
                                    priority
                                />
                            </span>
                        </div>
                    </section>
                </section>

                {/* Language Switch */}
                <div>
                    <h4 className='footer-title'>Languages</h4>
                    {locales.map((locale, index) => (
                        <button
                            key={locale.label}
                            onClick={() => handleLang(locale)}
                            className={
                                activeLang === locale.value
                                    ? langStyling.active
                                    : langStyling.inactive
                            }
                        >
                            {locale.label} {index === 0 && ' | '}
                        </button>
                    ))}
                </div>

                {/* Copyright Author/Developer */}
                <div className='flex flex-col items-end text-sm'>
                    <p className='font-semibold'>
                        Copyright &copy; {new Date().getFullYear()} developed by{' '}
                        {siteConfig.siteMetadata.author}
                    </p>
                    <div className='flex flex-row justify-start items-center gap-3'>
                        <a
                            href={siteConfig.siteMetadata.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:underline'
                        >
                            Github
                        </a>
                        <a
                            href={siteConfig.siteMetadata.linkedin}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:underline'
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
