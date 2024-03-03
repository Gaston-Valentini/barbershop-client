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
                <a href="#" className={style.linksLink}>
                    HOME
                </a>
                <a href="#" className={style.linksLink}>
                    SERVICES
                </a>
                <a href="#" className={style.linksLink}>
                    BARBERS
                </a>
                <a href="#" className={style.linksLink}>
                    REVIEWS
                </a>
                <a href="#" className={style.linksLink}>
                    CONTACT
                </a>
            </div>
        </nav>
    );
}
