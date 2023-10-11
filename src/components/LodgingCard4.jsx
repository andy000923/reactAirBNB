import React from "react";
import "../css/lodgingCard.css";
import { useNavigate } from "react-router-dom";
import  Carousel  from "../components/Carousel";

const imgs = [
    "https://a0.muscache.com/im/pictures/monet/Luxury-28540017/original/42cde801-3346-41c6-a63a-40bd5a2d5867?im_w=720",
];
const LodgingCard4 = (props) => {
    const { id } = props;
    const navigate = useNavigate();

    return (
        <article
            className="lodging-article"
            // onClick={() => {
            //     navigate(`/product/${id}`);
            // }}>
        >
            <Carousel images={imgs} />
            <div className="article-contents">
                <strong>Kabupaten Badung</strong>
                <span>delicious.에 소개</span>
                <span>8월 6일~12일</span>
                <strong>₩6,395,127/박</strong>
                <div className="rate">
                    <span>NEW</span>&nbsp;
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                            display: "block",
                            height: 12,
                            width: 12,
                            fill: "currentcolor",
                        }}>
                        <path
                            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                            fillRule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </article>
    );
};

export default LodgingCard4;