import React from "react";
import "../css/lodgingCard.css";
import { useNavigate } from "react-router-dom";
import  Carousel  from "../components/Carousel";

const imgs = [
    "https://a0.muscache.com/im/pictures/a306c273-67ff-479d-98f3-7a2850564684.jpg?im_w=720",
];
const LodgingCard7 = (props) => {
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
                <strong>Nugara, 오스트레일리아</strong>
                <span>디자인: Rosevevear Stephenson</span>
                <span>6월 15일~20일</span>
                <strong>₩965,324/박</strong>
                <div className="rate">
                    <span>5.0</span>&nbsp;
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

export default LodgingCard7;