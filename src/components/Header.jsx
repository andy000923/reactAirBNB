import React, { useState, useRef } from "react";
import "../css/header.css";
import logo from "../imgs/airGlobe.png";
import { Link } from "react-router-dom";
import  SignupModal  from "../components/SignupModal.jsx";
import Modal from "./Modal";
import { FaAirbnb } from "react-icons/fa";
const Header = () => {
    const [openMemberInfo, setOpenMemberInfo] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const memberRef = useRef();

    const openSignupModal = () => {
        setIsSignupOpen(true);
    };

    const openSearchModal = () => {
        setIsSearchOpen(true);
    };

    const closeSignupModal = () => {
        setIsSignupOpen(false);
    };

    const closeSearchModal = () => {
        setIsSearchOpen(false);
    };

    return (
        <main id="main-page">
                    <nav className="main-navi">
                        <div className="logo">
                            <a href="https://www.airbnb.co.kr/">
                                <FaAirbnb /> airbnb
                            </a>
                        </div>
                        <div className="search">
                            <button className="button">
                                <div><b>검색 시작하기</b></div>
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
                            <div className="item">
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
        
            <SignupModal
                modalStatus={isSignupOpen}
                closeModal={closeSignupModal}
                width={500}
            />
            </main>
            
    );
};

export default Header;
