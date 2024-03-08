import style from "./Contact.module.css";
import Map from "../../components/Map/Map";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdMessage } from "react-icons/md";

export default function Contact() {
    return (
        <section className={style.container} id="contact">
            <div className={style.titles}>
                <div className={style.titlesContent}>
                    <div className={style.titlesContentTitle}>CONTACT US</div>
                    <div className={style.titlesContentSubtitle}>Get in touch with us through any means</div>
                </div>
                <hr className={style.titlesLine}></hr>
            </div>
            <div className={style.form}>
                <div className={style.formMap}>
                    <Map />
                </div>
                <form className={style.formData} onSubmit={(e) => e.preventDefault}>
                    <div className={style.formDataSection}>
                        <div className={style.formDataSectionTitle}>
                            <FaUserAlt />
                            <div>Name</div>
                        </div>
                        <input className={style.formDataSectionInput} placeholder="Name..."></input>
                    </div>
                    <div className={style.formDataSection}>
                        <div className={style.formDataSectionTitle}>
                            <FaPhoneAlt />
                            <div>Phone</div>
                        </div>
                        <input className={style.formDataSectionInput} placeholder="Phone..."></input>
                    </div>
                    <div className={style.formDataSection}>
                        <div className={style.formDataSectionTitle}>
                            <MdEmail />
                            <div>Email</div>
                        </div>
                        <input className={style.formDataSectionInput} placeholder="Email..."></input>
                    </div>
                    <div className={style.formDataSection}>
                        <div className={style.formDataSectionTitle}>
                            <MdMessage />
                            <div>Message</div>
                        </div>
                        <textarea className={style.formDataSectionTextarea} placeholder="Write your message..."></textarea>
                    </div>
                    <div className={style.formDataSubmit}>REACH OUT</div>
                </form>
            </div>
        </section>
    );
}
