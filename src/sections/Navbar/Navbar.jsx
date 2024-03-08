import style from "./Navbar.module.css";
import logo from "../../assets/images/logo-two-yellow.png";
import { LiaBarsSolid } from "react-icons/lia";
import { useRef, useState, useEffect } from "react";

export default function Navbar() {
    const [isLinksActive, setIsLinksActive] = useState(false);
    const [isTop, setIsTop] = useState(true);
    const links = useRef(null);

    const onBars = () => {
        setIsLinksActive(!isLinksActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsTop(scrollTop === 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`${style.container} ${!isTop ? style.navbarScrolled : ""}`}>
            <div className={style.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={style.bars}>
                <LiaBarsSolid className={style.barsIcon} onClick={onBars} />
            </div>
            <div className={`${style.links} ${isLinksActive ? style.linksActive : ""}`} ref={links}>
                <a href="#home" className={style.linksLink} onClick={onBars}>
                    HOME
                </a>
                <a href="#services" className={style.linksLink} onClick={onBars}>
                    SERVICES
                </a>
                <a href="#barbers" className={style.linksLink} onClick={onBars}>
                    BARBERS
                </a>
                <a href="#reviews" className={style.linksLink} onClick={onBars}>
                    REVIEWS
                </a>
                <a href="#contact" className={style.linksLink} onClick={onBars}>
                    CONTACT
                </a>
            </div>
        </nav>
    );
}
