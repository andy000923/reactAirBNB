import React from "react";
import "../css/lodgingCard.css";
import { useNavigate } from "react-router-dom";
import  Carousel  from "../components/Carousel";
import { Provider, useSelector, useDispatch } from 'react-redux';
const imgs = [
    "https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720",
    "https://a0.muscache.com/im/pictures/monet/Select-34444025/original/622a7f24-1a55-4468-82b5-fb3abc83020f?im_w=720",
    "https://a0.muscache.com/im/pictures/monet/Select-34444025/original/68e860ea-a095-4651-b911-0394d9844316?im_w=720",
    "https://a0.muscache.com/im/pictures/monet/Select-34444025/original/5b038cc8-222e-43ba-8aef-187efe91e787?im_w=720",
    "https://a0.muscache.com/im/pictures/monet/Select-34444025/original/9e8d63dc-a594-4364-9be4-daf83610fd8c?im_w=720",
    "https://a0.muscache.com/im/pictures/monet/Select-34444025/original/50792eb2-a43e-4dde-8410-8eda79fa94ae?im_w=720",
    "https://a0.muscache.com/im/pictures/monet/Select-34444025/original/620f8ead-9c72-4471-bbf7-06d369ca6587?im_w=720",
];

function LodgingCard (props) {
    const navigate = useNavigate();
    return (
        <article
            className="lodging-article">       
            <Carousel images ={imgs} />
            <div className="article-contents"
            onClick={() => {
            navigate(`/product`);
            }}>
                <strong>Raelingen, 노르웨이</strong>
                <span>Venuereport에 소개</span>
                <span>10월 9일~14일</span>
                <strong>₩684,841/박</strong>
                <div className="rate">
                    <span>4.95</span>&nbsp;
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

export default LodgingCard;