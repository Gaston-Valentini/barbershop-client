import style from "./Footer.module.css";
import logo from "../../assets/images/logo-yellow.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className={style.container}>
            <hr />
            <div className={style.footer}>
                <div className={style.footerSection}>
                    <div className={style.footerSectionLogo}>
                        <img src={logo} />
                    </div>
                </div>
                <div className={style.footerSection}>
                    <div className={style.footerSectionTitle}>OPEN</div>
                    <div className={style.footerSectionOpen}>
                        MONDAY - FRIDAY
                        <br />
                        9AM - 6AM
                    </div>
                </div>
                <div className={style.footerSection}>
                    <div className={style.footerSectionTitle}>OUR BRANCHES</div>
                    <div className={style.footerSectionBranches}>
                        <div className={style.footerSectionBranchesPlaces}>
                            <div>03502 Cornellana 1, Benidorm</div>
                            <div>03503 Adolfo Suárez 18, Benidorm</div>
                            <div>03502 Camilo Bentley 4, Benidorm</div>
                        </div>
                        <div className={style.footerSectionBranchesNumbers}>
                            <div>623 222 666</div>
                            <div>623 222 666</div>
                            <div>623 222 666</div>
                        </div>
                    </div>
                </div>

                <div className={style.footerSection}>
                    <div className={style.footerSectionTitle}>FOLLOW US</div>
                    <div className={style.footerSectionSocial}>
                        <a href="#">
                            <FaInstagram />
                        </a>
                        <a href="#">
                            <FaXTwitter />
                        </a>
                        <a href="#">
                            <FaFacebookF />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
