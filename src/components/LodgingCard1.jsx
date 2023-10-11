import React from "react";
import "../css/lodgingCard.css";
import { useNavigate } from "react-router-dom";
import  Carousel  from "../components/Carousel";

const imgs = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3d966c94-4c87-479b-8eeb-4889e9fb6ac9.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/eeffdea4-bbcf-4a05-bcb9-579a03bf41ab.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/9d4c4d58-b9e6-4a2d-9883-eb2df68c0ba0.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3c44f9fd-0a88-41dd-acb5-ebf58bde739f.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/39cdf5aa-a5d6-4f55-893c-73bf310dd598.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/9f680175-524d-47f7-9814-a88b9bc42096.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/4e9d046b-0499-4d12-ada5-401fa81102da.jpeg?im_w=720",
];
const LodgingCard1 = (props) => {
    
    const navigate = useNavigate();

    return (
        <article
            className="lodging-article"
            onClick={() => {
            navigate(`/product`);
            }}>
        

            <Carousel images={imgs} />
            <div className="article-contents">
                <strong>Terrasini, 이탈리아</strong>
                <span>Conde Nast Traveler에 소개</span>
                <span>6월 7일~12일</span>
                <strong>₩455,623/박</strong>
                <div className="rate">
                    <span>4.91</span>&nbsp;
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

export default LodgingCard1;