import style from "./Barbers.module.css";
import { useEffect, useState } from "react";
import barberOne from "../../assets/images/barberOne.jpg";
import barberTwo from "../../assets/images/barberTwo.jpg";
import barberThree from "../../assets/images/barberThree.jpg";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import BarbersCard from "../../components/BarbersCard/BarbersCard";
import BarbersSlider from "../../components/BarbersSlider/BarbersSlider";

export default function Barbers() {
    const data = [
        {
            id: 1,
            name: "Alessandro Rossi",
            occupation: "MAIN BARBER",
            social: [
                {
                    logo: <FaInstagram />,
                    app: "ig",
                },
                {
                    logo: <FaXTwitter />,
                    app: "x",
                },
                {
                    logo: <FaFacebookF />,
                    app: "fa",
                },
            ],
            image: barberOne,
        },
        {
            id: 2,
            name: "Marco Rossi",
            occupation: "BEARD CARE SPECIALIST",
            social: [
                {
                    logo: <FaInstagram />,
                    app: "ig",
                },
                {
                    logo: <FaXTwitter />,
                    app: "x",
                },
                {
                    logo: <FaFacebookF />,
                    app: "fa",
                },
            ],
            image: barberTwo,
        },
        {
            id: 3,
            name: "Alejandro Vargas",
            occupation: "HAIR COLOR SPECIALIST",
            social: [
                {
                    logo: <FaInstagram />,
                    app: "ig",
                },
                {
                    logo: <FaXTwitter />,
                    app: "x",
                },
                {
                    logo: <FaFacebookF />,
                    app: "fa",
                },
            ],
            image: barberThree,
        },
    ];

    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 991);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 991);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className={style.container} id="barbers">
            <div className={style.titles}>
                <div className={style.titlesContent}>
                    <div className={style.titlesContentTitle}>OUR TEAM</div>
                    <div className={style.titlesContentSubtitle}>Discover our skilled barbers, dedicated to crafting the perfect look for you</div>
                </div>
                <hr className={style.titlesLine}></hr>
            </div>
            <div className={style.barbers}>{isWideScreen ? data.map((e) => <BarbersCard barber={e} key={e.id} />) : <BarbersSlider data={data} />}</div>
        </section>
    );
}
