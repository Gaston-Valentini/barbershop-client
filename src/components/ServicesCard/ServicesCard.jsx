import style from "./ServicesCard.module.css";

export default function ServicesCard(params) {
    const { icon, titleOne, priceOne, descriptionOne, titleTwo, priceTwo, descriptionTwo, titleThree, priceThree, descriptionThree } = params;

    return (
        <div className={style.container}>
            <div className={style.icon}>{icon}</div>
            <div className={style.services}>
                <div className={style.servicesService}>
                    <div className={style.servicesServiceTitle}>
                        <div className={style.servicesServiceTitleText}>{titleOne}</div>
                        <hr className={style.servicesServiceTitleHr}></hr>
                        <div className={style.servicesServiceTitlePrice}>{priceOne}</div>
                    </div>
                    <div className={style.servicesServiceDescription}>{descriptionOne}</div>
                </div>
                <div className={style.servicesService}>
                    <div className={style.servicesServiceTitle}>
                        <div className={style.servicesServiceTitleText}>{titleTwo}</div>
                        <hr className={style.servicesServiceTitleHr}></hr>
                        <div className={style.servicesServiceTitlePrice}>{priceTwo}</div>
                    </div>
                    <div className={style.servicesServiceDescription}>{descriptionTwo}</div>
                </div>
                <div className={style.servicesService}>
                    <div className={style.servicesServiceTitle}>
                        <div className={style.servicesServiceTitleText}>{titleThree}</div>
                        <hr className={style.servicesServiceTitleHr}></hr>
                        <div className={style.servicesServiceTitlePrice}>{priceThree}</div>
                    </div>
                    <div className={style.servicesServiceDescription}>{descriptionThree}</div>
                </div>
            </div>
        </div>
    );
}
