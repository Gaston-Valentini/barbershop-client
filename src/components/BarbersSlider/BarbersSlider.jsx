import style from "./BarbersSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function BarbersSlider({ data }) {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings} className={style.slider}>
            {data.map((e) => (
                <div className={style.container} key={e.id}>
                    <div className={style.image}>
                        <img src={e.image} />
                    </div>
                    <div className={style.data}>
                        <div className={style.dataOccupation}>{e.occupation}</div>
                        <div className={style.dataName}>{e.name}</div>
                        <div className={style.dataSocial}>
                            {e.social.map((a) => (
                                <a href="#" className={style.dataSocialApp} key={a.app}>
                                    {a.logo}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}
