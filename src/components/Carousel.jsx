import React, { useState, useEffect, useRef, Fragment } from "react";
import "../css/carousel.css";
import leftArrow from "../imgs/leftArrow.png";
import rightArrow from "../imgs/rightArrow.png";
import Counter from "./Counter";
import { useSelector, useDispatch } from 'react-redux';

const Carousel = (props) => {
    const { images } = props;
    const ref = useRef();
    const [curSlide, setCurSlide] = useState(0);
    const totalSlide = images.length - 1;
    const width = ref.current?.scrollWidth;

    const moveLeft = () => {
        if (curSlide === 0) setCurSlide(totalSlide);
        else setCurSlide(curSlide - 1);
    };

    const moveRight = () => {
        if (curSlide >= totalSlide) setCurSlide(0);
        else setCurSlide(curSlide + 1);
    };

    useEffect(() => {
        ref.current.style.transition = "all 0.7s ease-in-out";
        ref.current.style.transform = `translate(${
            (-width / images.length) * curSlide
        }px)`;
    }, [curSlide]);
    
    return (
        <div className="carousel-wrap">
            <div
                className="carousel-container"
                ref={ref}
                style={{ width: `${images.length * 100}%` }}
                >
                {images.map((data, idx) => (
                    <div key={idx} className="carousel-image-view">
                        <div
                            className="carousel-image"
                            style={{ backgroundImage: `url(${data})` }}></div>
                    </div>
                ))}
            </div>
            <div>                
                <Counter/>
            </div>
            
            <button
                className="carousel-btn"
                style={{ left: 10 }}
                onClick={moveLeft}>
                <img src={leftArrow} alt="arrow" width="20px" height="20px" />
            </button>
            <button
                className="carousel-btn"
                style={{ right: 10 }}
                onClick={moveRight}>
                <img src={rightArrow} alt="arrow" width="20px" height="20px" />
            </button>
            {/* </div> */}
        </div>
    );
};

export default Carousel;
