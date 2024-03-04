import style from "./BarbersCard.module.css";

export default function BarbersCard({ barber }) {
    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={barber.image} />
            </div>
            <div className={style.data}>
                <div className={style.dataOccupation}>{barber.occupation}</div>
                <div className={style.dataName}>{barber.name}</div>
                <div className={style.dataSocial}>
                    {barber.social.map((a) => (
                        <a href="#" className={style.dataSocialApp} key={a.app}>
                            {a.logo}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
