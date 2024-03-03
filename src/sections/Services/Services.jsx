import style from "./Services.module.css";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import { GiBeard } from "react-icons/gi";
import { RiScissors2Fill } from "react-icons/ri";
import { MdInvertColors } from "react-icons/md";

export default function Services() {
    return (
        <section className={style.container}>
            <div className={style.titles}>
                <hr className={style.titlesLine}></hr>
                <div className={style.titlesContent}>
                    <div className={style.titlesContentTitle}>OUR SERVICES</div>
                    <div className={style.titlesContentSubtitle}>Enjoy a variety of our best services that will make your value instantly increase</div>
                </div>
            </div>
            <div className={style.services}>
                <ServicesCard icon={<RiScissors2Fill />} titleOne="CLASSIC HAIRCUT" priceOne="12€" descriptionOne="Timeless style for a polished look. Expertly perfected contours and textures." titleTwo="DELUXE HAIRCUT" priceTwo="20€" descriptionTwo="Luxury cuts with exclusive details. From relaxing massages to top-notch finishes." titleThree="KIDS HAIRCUT" priceThree="8€" descriptionThree="Fun, modern cuts for the little ones. Cheerful, comfortable experiences for a unique adventure." />
                <ServicesCard
                    icon={<GiBeard />}
                    titleOne="TRIM & SHAPE"
                    priceOne="15€"
                    descriptionOne="Precision grooming for a well-defined and polished beard. Elevate your style with clean lines."
                    titleTwo="FULL BEARD REVIVAL"
                    priceTwo="20€"
                    descriptionTwo="Unleash your beard's potential for $Y, expert maintenance for a robust and cared-for look."
                    titleThree="BEARD DESIGN & ARTISTY"
                    priceThree="25€"
                    descriptionThree="Elevate your beard game with creative designs and intricate detailing. Make a bold statement with a personalized work of art."
                />
                <ServicesCard icon={<MdInvertColors />} titleOne="HAIR COLOR" priceOne="20€" descriptionOne="Transform your look with vibrant, personalized color." titleTwo="FACE FACIAL" priceTwo="12€" descriptionTwo="Rejuvenate with a tailored facial for refreshed, glowing skin." titleThree="HAIR WASH" priceThree="10€" descriptionThree="Elevate your routine with an invigorating wash and soothing scalp massage." />
            </div>
        </section>
    );
}
