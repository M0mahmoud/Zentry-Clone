import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import Button from "../Button";
import { TiLocationArrow } from "../Icons";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

export default function Navbar() {
    const navRef = useRef(null);
    const { y } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        if (y === 0) {
            setIsNavVisible(true);
            navRef.current.classList.remove("floating-nav");
        } else if (y > lastScrollY) {
            setIsNavVisible(false);
            navRef.current.classList.add("floating-nav");
        } else if (y < lastScrollY) {
            setIsNavVisible(true);
            navRef.current.classList.add("floating-nav");
        }
        setLastScrollY(y);
    }, [y, lastScrollY]);

    useEffect(() => {
        gsap.to(navRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible]);
    return (
        <div
            ref={navRef}
            className="fixed inset-x-0 z-50 h-16 transition-all duration-700 border-none top-4 sm:inset-x-6"
        >
            <header className="absolute w-full -translate-y-1/2 top-1/2">
                <nav className="flex items-center justify-between p-4 size-full">
                    <div className="flex items-center gap-7">
                        <img src="/img/logo.png" alt="logo" className="w-10" />
                        <Button
                            id={"products"}
                            title={"Products"}
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 flex items-center justify-center gap-1"
                        />
                    </div>

                    {/* Links */}
                    <div className="flex items-center h-full">
                        <div className="hidden md:block">
                            {navItems.map((el, idx) => (
                                <a
                                    key={idx}
                                    href={`#${el.toLocaleLowerCase()}`}
                                    className="nav-hover-btn"
                                >
                                    {el}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
