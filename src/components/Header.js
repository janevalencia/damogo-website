import Image from "next/image"
import { siteConfig } from "@/libs/_siteConfig"
import { useReducer } from "react"

function reducer(state, action) {
    switch (action.type) {
        case "Beranda":
            return { activeLink: "Beranda" }
        case "Restoran":
            return { activeLink: "Restoran" }
        case "Supplier":
            return { activeLink: "Supplier" }
        default:
            return state
    }
}

const Header = () => {
    // Manage the state of active links in navigation.
    const [state, dispatch] = useReducer(reducer, { activeLink: "Beranda" })

    // Dynamic styling for active links.
    const navLinkStyle = {
        active: "text-primary-blue",
        inactive: "text-black",
    }

    const siteTitle = siteConfig.siteMetadata.title;

    return (
        <header className="container flex flex-wrap md:flex-row justify-between py-8">
            <span>
                <Image 
                    src="/logo.svg"
                    alt={siteTitle}
                    width={113}
                    height={25}
                />
            </span>
            <nav>
                <ul className="flex flex-row gap-12 text-normal-text font-semibold">
                    <li
                        className="flex flex-col items-center gap-1"
                        onClick={() => dispatch({ type: "Beranda" })}
                    >
                        <a
                            href="#hero"
                            className={
                                state.activeLink === "Beranda"
                                    ? navLinkStyle.active
                                    : navLinkStyle.inactive
                            }
                        >
                            Beranda
                        </a>
                        {state.activeLink === "Beranda" && (
                            <span className="active-dot"></span>
                        )}
                    </li>
                    <li
                        className="flex flex-col items-center gap-1"
                        onClick={() => dispatch({ type: "Restoran" })}
                    >
                        <a
                            href="#restoran"
                            className={
                                state.activeLink === "Restoran"
                                    ? navLinkStyle.active
                                    : navLinkStyle.inactive
                            }
                        >
                            Restoran
                        </a>
                        {state.activeLink === "Restoran" && (
                            <span className="active-dot"></span>
                        )}
                    </li>
                    <li
                        className="flex flex-col items-center gap-1"
                        onClick={() => dispatch({ type: "Supplier" })}
                    >
                        <a
                            href="#supplier"
                            className={
                                state.activeLink === "Supplier"
                                    ? navLinkStyle.active
                                    : navLinkStyle.inactive
                            }
                        >
                            Supplier
                        </a>
                        {state.activeLink === "Supplier" && (
                            <span className="active-dot"></span>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header