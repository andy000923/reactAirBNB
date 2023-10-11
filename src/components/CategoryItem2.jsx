import React, { useState, useEffect, useRef } from "react";
import "../css/categoryItem.css";
import styled from 'styled-components'
import leftArrow from "../imgs/leftArrow.png";
import rightArrow from "../imgs/rightArrow.png";

const CategoryItem2 = (props) => {
    const { src, name } = props;
    return (     
        <div className="container1">
            <img width="30px" height="30px" src={src} alt="categoryItem" />
            <span style={{ margin: "8px 0px" }}>{name}</span>   
        </div>
    );
};

export default CategoryItem2;