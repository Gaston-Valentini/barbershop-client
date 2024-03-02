import style from "./Navbar.module.css";
import logo from "../../assets/images/logo-two-yellow.png";
import { LiaBarsSolid } from "react-icons/lia";

export default function Navbar() {
    return (
        <nav className={style.container}>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <div className={style.bars}>
                <LiaBarsSolid className={style.barsIcon} />
            </div>
            <div className={style.links}>
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
