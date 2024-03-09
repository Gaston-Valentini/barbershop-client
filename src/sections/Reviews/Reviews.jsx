import style from "./Reviews.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoStarSharp } from "react-icons/io5";
import React, { useState, useEffect } from "react";

export default function Reviews() {
    const [reviews, setReviews] = useState([]);

    const fetchPlaceIdAndReviews = async () => {
        await fetch("https://barbershop-server-production.up.railway.app/api/getReviews")
            .then((res) => res.json())
            .then((reviews) => setReviews(reviews));
    };

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
    };

    useEffect(() => {
        fetchPlaceIdAndReviews();
    }, []);

    return (
        <section className={style.container} id="reviews">
            <div className={style.titles}>
                <hr className={style.titlesLine}></hr>
                <div className={style.titlesContent}>
                    <div className={style.titlesContentTitle}>WHAT OUR CUSTOMER SAY</div>
                    <div className={style.titlesContentSubtitle}>What customer think about us?</div>
                </div>
            </div>
            <div className={style.reviews}>
                {reviews.length > 0 ? (
                    <Slider {...settings}>
                        {reviews.map((e) => (
                            <div key={e.time} className={style.reviewsReview}>
                                <div className={style.reviewsReviewAuthor}>
                                    <div className={style.reviewsReviewAuthorPhoto}>
                                        <img src={e.profile_photo_url} />
                                    </div>
                                    <div className={style.reviewsReviewAuthorName}>{e.author_name}</div>
                                </div>
                                <div className={style.reviewsReviewContent}>
                                    <div className={style.reviewsReviewContentText}>" {e.text} "</div>
                                    <div className={style.reviewsReviewContentRating}>
                                        {Array.from({ length: e.rating }, (_, index) => (
                                            <IoStarSharp key={index} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p className={style.reviewsVoid}>No hay reseñas disponibles para Barbershop.</p>
                )}
            </div>
        </section>
    );
}
