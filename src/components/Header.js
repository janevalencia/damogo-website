import Image from 'next/image';
import { useState, useReducer, useEffect } from 'react';

import { siteConfig } from '@/libs/_siteConfig';

function reducer(state, action) {
    switch (action.type) {
        case 'Beranda':
            return { activeLink: 'Beranda' };
        case 'Restoran':
            return { activeLink: 'Restoran' };
        case 'Supplier':
            return { activeLink: 'Supplier' };
        default:
            return state;
    }
}

const Header = () => {
    // Manage the state of active links in navigation.
    const [state, dispatch] = useReducer(reducer, { activeLink: 'Beranda' });

    // Manage the state of scroll position.
    const [isScrolled, setIsScrolled] = useState(false);

    // Dynamic styling for active links.
    const navLinkStyle = {
        active: 'text-primary-blue',
        inactive: 'text-black',
    };

    // Handle header styling on scroll.
    useEffect(() => {
        window.onscroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsScrolled(true);
            }

            if (offset === 0) {
                setIsScrolled(false);
            }
        }
    }, []);

    const siteTitle = siteConfig.siteMetadata.title;

    return (
        <header className={isScrolled ? 'fixed w-full py-8 bg-white border-b z-20' : 'w-full py-8'}>
            <div className='container flex flex-wrap justify-between gap-8'>
                <span>
                    <Image
                        src='/logo.svg'
                        alt={siteTitle}
                        width={113}
                        height={25}
                    />
                </span>
                <nav>
                    <ul className='flex flex-row gap-12 text-normal-text font-semibold'>
                        <li
                            className='flex flex-col items-center gap-1'
                            onClick={() => dispatch({ type: 'Beranda' })}
                        >
                            <a
                                href='#hero'
                                className={
                                    state.activeLink === 'Beranda'
                                        ? navLinkStyle.active
                                        : navLinkStyle.inactive
                                }
                            >
                                Beranda
                            </a>
                            {state.activeLink === 'Beranda' && (
                                <span className='active-dot'></span>
                            )}
                        </li>
                        <li
                            className='flex flex-col items-center gap-1'
                            onClick={() => dispatch({ type: 'Restoran' })}
                        >
                            <a
                                href='#restoran'
                                className={
                                    state.activeLink === 'Restoran'
                                        ? navLinkStyle.active
                                        : navLinkStyle.inactive
                                }
                            >
                                Restoran
                            </a>
                            {state.activeLink === 'Restoran' && (
                                <span className='active-dot'></span>
                            )}
                        </li>
                        <li
                            className='flex flex-col items-center gap-1'
                            onClick={() => dispatch({ type: 'Supplier' })}
                        >
                            <a
                                href='#supplier'
                                className={
                                    state.activeLink === 'Supplier'
                                        ? navLinkStyle.active
                                        : navLinkStyle.inactive
                                }
                            >
                                Supplier
                            </a>
                            {state.activeLink === 'Supplier' && (
                                <span className='active-dot'></span>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
