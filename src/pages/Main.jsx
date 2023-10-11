import React, { Component, useState, useRef } from "react";
import styled from "styled-components"
import "../css/Main.css";
import  Footer  from "../components/Footer"
import  LodgingCard  from "../components/LodgingCard"
import  LodgingCard1  from "../components/LodgingCard1"
import  LodgingCard2  from "../components/LodgingCard2"
import  LodgingCard3  from "../components/LodgingCard3"
import  LodgingCard4  from "../components/LodgingCard4"
import  LodgingCard5  from "../components/LodgingCard5"
import  LodgingCard6  from "../components/LodgingCard6"
import  LodgingCard7  from "../components/LodgingCard7"
import  LodgingCard8  from "../components/LodgingCard8"
import { FaAirbnb } from "react-icons/fa";
import  SignupModal  from "../components/SignupModal";
import Modal from "../components/Modal";
import CategoryItem from "../components/CategoryItem";
import CategoryItem2 from "../components/CategoryItem2";
import { BrowserRouter, Link } from "react-router-dom";
import airGlobe from "../imgs/airGlobe.png";
import airFilter from "../imgs/airFilter.png";
const NewComponent =  () => {
    const [openMemberInfo, setOpenMemberInfo] = useState(false);
    const [openGlobeInfo, setOpenGlobeInfo] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const openSignupModal = () => {
        setIsSignupOpen(true);
        setOpenMemberInfo(false);
    };
    const closeSignupModal = () => {
        setIsSignupOpen(false);
    };
    const closeModal=() => {
        setOpenGlobeInfo(false);
        setOpenFilter(false);
    }
    const memberRef = useRef();
    const StyledMember = styled.div`
        position: absolute;
        top:75px;
        right:150px;
        width:250px;
        background-color: white;
        z-index: 1;
        border-radius: 12px;
        box-shadow: 0px -3px 10px #cccccc;
        padding:8px 0px;
    `;
    const StyledGlobe = styled.div`
        position: absolute;
        align-items: center;
        left: 50%;
        transform: translateX(-50%);
        width:1031px;
        background-color: white;
        z-index: 1;
        border-radius: 12px;
        box-shadow: 0px -3px 10px #cccccc;
        padding:8px 0px;
    `;
    const StyledFilter = styled.div`
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width:779px;
        background-color: white;
        z-index: 1;
        border-radius: 12px;
        box-shadow: 0px -3px 10px #cccccc;
        padding:8px 0px;
    `;

const category_list = [
    "디자인",
    "국립공원",
    "B&B",
    "기상천외한 숙소",
];
const category_list2 =[
"셰어하우스",
"동굴",
"서핑",
"초소형 주택",
];
const category_img = [
    "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
    "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
    "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
    "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
];
const category_img2 = [
"https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg",
    "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
    "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
    "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
];
        return (

            <div>                
                <main id="main-page">
                    <nav className="main-navi">
                        <div className="logo">
                            <a href="https://www.airbnb.co.kr/">
                                <FaAirbnb /> airbnb
                            </a>
                        </div>
                        <div className="search">
                            <button className="button">
                                <div><p1 style={{ fontWeight: "bold" }}>어디든지</p1> | <p1 style={{ fontWeight: "bold" }}>언제든 일주일</p1> | 게스트추가</div>
                                <div className="rButton">
                                    <i className="fas fa-search" />
                                </div>
                            </button>                            
                        </div>
                        <div className="search1">
                            <button className="button">
                                <div className="rButton">
                                    <i className="fas fa-search" />
                                </div>
                                <p1 style={{ fontWeight: "bold" }}>어디로 여행가세요?</p1>
                                <svg className="carousel-btn1"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                display: "block",
                                height: 20,
                                width: 20,
                                fill: "currentcolor",
                            }}
                            aria-hidden="true"
                            role="presentation"
                            focusable="false">
                            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                            </svg>
                            </button>
                            
                        </div>
                        <div className="menu">
                            <div className="item">
                            <Link
                            to="/host"
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}>
                            <div className="host-btn" style={{ fontWeight: "bold" }}>호스트 되기</div>
                        </Link>
                            </div>
                            <div className="item"
                            onClick={() => {
                                setOpenGlobeInfo(!openGlobeInfo);
                            }}>
                                <i
                                    className="fas fa-globe"
                                    onclick="window.open() "
                                />
                            </div>
                            <button className="item"
                            onClick={() => {
                                setOpenMemberInfo(!openMemberInfo);
                            }}>
                                <i className="fas fa-bars" />
                                <i className="fas fa-user-circle" />
                            </button>
                        </div>
                    </nav>
                    <div id="category-container">   
                        {category_list.map((data, idx) => (
                            <CategoryItem
                                name={data}
                                src={category_img[idx]}
                            />              
                        ))}
                        {category_list2.map((data, idx) => (
                            <CategoryItem2 id="list2"
                                name={data}
                                src={category_img2[idx]}
                            />              
                        ))}

                        <div id="filter-wrap" onClick={() => {
                                setOpenFilter(!openFilter);
                            }}>
                            <button id="filter">
                            <svg
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                display: "block",
                                height: 20,
                                width: 20,
                                fill: "currentcolor",
                            }}
                            aria-hidden="true"
                            role="presentation"
                            focusable="false">
                            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                            </svg>
                            <span>필터</span>
                            </button>
                        </div>
                    </div>
                    
                        {openGlobeInfo&&(
                            <StyledGlobe>
                                <div className="x-btn" onClick={closeModal}>
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{
                                            display: "block",
                                            fill: "none",
                                            height: 16,
                                            width: 16,
                                            stroke: "currentcolor",
                                            strokeWidth: 3,
                                            overflow: "visible",
                                        }}>
                                        <path d="m6 6 20 20"></path>
                                        <path d="m26 6-20 20"></path>
                                    </svg>
                                </div>
                                <img src={airGlobe}/>
                            </StyledGlobe>
                        )}
                        {openFilter&&(
                            <StyledFilter>
                                <div className="x-btn" onClick={closeModal}>
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{
                                            display: "block",
                                            fill: "none",
                                            height: 16,
                                            width: 16,
                                            stroke: "currentcolor",
                                            strokeWidth: 3,
                                            overflow: "visible",
                                        }}>
                                        <path d="m6 6 20 20"></path>
                                        <path d="m26 6-20 20"></path>
                                    </svg>
                                </div>
                                <img src={airFilter}/>
                            </StyledFilter>
                        )}
                        {openMemberInfo && (
                            <StyledMember>
                                <div
                                className="memberInfoContainer"
                                ref={memberRef}>
                                <div
                                    style={{
                                        paddingBottom: 8,
                                        borderBottom: "1px solid #cccccc",
                                    }}>
                                    <button
                                        style={{ fontWeight: "bold" }}
                                        onClick={openSignupModal}>
                                        회원 가입
                                    </button>
                                    <button onClick={openSignupModal}>
                                        로그인
                                    </button>
                                </div>
                                <div style={{ paddingTop: 8 }}>
                                    <button><Link to="/host" style={{ textDecoration: 'none' }}>숙소 호스트 되기</Link></button>
                                    <button><a href="https://www.airbnb.co.kr/host/experiences?from_nav=1" style={{ textDecoration: 'none' }}>체험 호스팅하기</a></button>
                                    <button><a href="https://www.airbnb.co.kr/help?audience=guest" style={{textDecoration: 'none' }}> 도움말</a></button>
                                </div>
                            </div>
                            </StyledMember>
                        )}
                        <SignupModal
                modalStatus={isSignupOpen}
                closeModal={closeSignupModal}
                width={500}
            />
                    <div id="main">              
                        <LodgingCard1 />
                        <LodgingCard />
                        <LodgingCard2 />
                        <LodgingCard3 />
                        <LodgingCard4 />
                        <LodgingCard5 />
                        <LodgingCard6 />
                        <LodgingCard7 />
                        <LodgingCard8 />
                    </div>                
                </main>
                <Footer/>
                <div className="show-map-btn-container">
                <button>
                    <div>
                        <span>지도 표시하기</span>
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                                display: "block",
                                height: 16,
                                width: 16,
                                marginLeft: 8,
                                fill: "rgb(255,255,255)",
                            }}>
                            <path d="M31.245 3.747a2.285 2.285 0 0 0-1.01-1.44A2.286 2.286 0 0 0 28.501 2l-7.515 1.67-10-2L2.5 3.557A2.286 2.286 0 0 0 .7 5.802v21.95a2.284 2.284 0 0 0 1.065 1.941A2.29 2.29 0 0 0 3.498 30l7.515-1.67 10 2 8.484-1.886a2.285 2.285 0 0 0 1.802-2.245V4.247a2.3 2.3 0 0 0-.055-.5zM12.5 25.975l-1.514-.303L9.508 26H9.5V4.665l1.514-.336 1.486.297v21.349zm10 1.36l-1.515.337-1.485-.297V6.025l1.514.304L22.493 6h.007v21.335z"></path>
                        </svg>
                    </div>
                </button>
            </div>
            </div>
        );
    };

export default NewComponent;