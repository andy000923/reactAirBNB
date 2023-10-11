import React, { useState, useEffect, useRef } from "react";
import "../css/categoryItem.css";
import styled from 'styled-components'
import leftArrow from "../imgs/leftArrow.png";
import rightArrow from "../imgs/rightArrow.png";

const CategoryItem = (props) => {
    const { src, name } = props;
    return (     
        <div className="container">
            <img width="30px" height="30px" src={src} alt="categoryItem" />
            <span style={{ margin: "8px 0px" }}>{name}</span>
            
            <button
                className="category-btn"
                style={{ left: 120}}
                onClick>
                <img src={leftArrow} alt="arrow" width="20px" height="20px" />
            </button>
            <button
                className="category-btn"
                style={{ right: 200 }}
                onClick>
                <img src={rightArrow} alt="arrow" width="20px" height="20px" />
            </button>
        </div>
    );
};

export default CategoryItem;
