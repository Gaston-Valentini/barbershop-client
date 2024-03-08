import style from "./Header.module.css";
import logo from "../../assets/images/logo-yellow.png";
import background from "../../assets/videos/header.mp4";

export default function Header() {
    return (
        <section className={style.container} id="home">
            <div className={style.overlay}></div>
            <video src={background} muted autoPlay loop />
            <div className={style.logo}>
                <img src={logo} />
            </div>
        </section>
    );
}
