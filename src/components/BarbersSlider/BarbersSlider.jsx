import style from "./BarberSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BarbersSlider({ data }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
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
                                <div className={style.dataSocialApp} key={a.app}>
                                    {a.logo}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}
