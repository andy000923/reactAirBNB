import React from "react";
import Header from "../components/Header.jsx"
import "../css/product.css";
import { useNavigate } from "react-router-dom";
import airCalendar from "../imgs/airCalendar.png";
import airMap2 from "../imgs/airMap2.png";
const Product = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header/>            
            <main>
                <div className="product-container">
                    <div>
                        <strong className="title" 
                            style={{
                                        display: "flex",
                                        marginTop: 8,}}><svg
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{
                                            display: "block",
                                            height: 25,
                                            width: 25,
                                            fill: "currentcolor",
                                            marginTop: 12,
                                                marginRight: 12,
                                        }}>
                                        <path d="M9 0a1 1 0 0 1 .993.883L10 1v5h5a1 1 0 0 1 .993.883L16 7v8a1 1 0 0 1-.883.993L15 16H7a1 1 0 0 1-.993-.883L6 15v-5H1a1 1 0 0 1-.993-.883L0 9V1A1 1 0 0 1 .883.007L1 0h8zm1.729 7l-1.393.495.233.217.13.132c.125.127.227.245.308.352l.073.103.048.073.045.077H7.308v1.309h1.207l.166.52.09.266.112.29a6.294 6.294 0 0 0 1.109 1.789c-.495.315-1.119.607-1.87.87l-.331.112-.346.108-.445.134L7.72 15l.407-.125.386-.128c1.007-.349 1.836-.752 2.486-1.214.57.405 1.277.764 2.12 1.08l.369.134.386.128.406.125.72-1.153-.445-.134-.26-.08-.345-.115c-.783-.27-1.43-.57-1.94-.895a6.3 6.3 0 0 0 1.068-1.694l.128-.32.114-.33.165-.521h1.208V8.449H11.64l-.093-.231a3.696 3.696 0 0 0-.554-.917l-.126-.149-.14-.152zm1.35 2.758l-.042.133-.076.224-.103.264A4.985 4.985 0 0 1 11 11.76a4.952 4.952 0 0 1-.743-1.127l-.115-.254-.103-.264-.076-.224-.042-.133h2.158zM9 1H1v8h5V7c0-.057.005-.113.014-.167H3.827L3.425 8H2l2.257-6h1.486l1.504 4H9V1zM5 3.411L4.253 5.6h1.502L5 3.411z"></path>
                                    </svg>
                                    컨테이너 스위트: 육지와 바다 사이에 위치</strong>
                        <div className="under-title">
                            <div className="tag"  style={{
                                            display: "flex",
                                            marginTop: 8,
                                        }}>
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
                                                marginTop: 4,
                                                marginRight: 4,
                                            }}>
                                            <path
                                                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                                fillRule="evenodd"></path>
                                        </svg>
                                        <span>4.91 · </span>&nbsp;<u>후기 23개</u>&nbsp;<span>· 슈퍼호스트 ·</span>&nbsp;
                                <u>Terrasini ,Sicilia, 이탈리아</u>
                            </div>
                            <div className="under-title-button-container">
                                <div className="under-title-button">
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
                                            strokeWidth: 2,
                                            overflow: "visible",
                                        }}>
                                        <g fill="none">
                                            <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                                            <path d="M16 3v23V3z"></path>
                                            <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                                        </g>
                                    </svg>
                                    <span style={{ marginLeft: 8 }}>
                                        공유하기
                                    </span>
                                </div>
                                <div className="under-title-button">
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
                                            strokeWidth: 2,
                                            overflow: "visible",
                                        }}>
                                        <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                                    </svg>
                                    <span style={{ marginLeft: 8 }}>저장</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="image-container">
                        <div style={{ flex: 2 }}>
                            <img
                                id="main-image"
                                className="main-image"
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3d966c94-4c87-479b-8eeb-4889e9fb6ac9.jpeg?im_w=960"
                                alt="main"
                            />
                        </div>
                        <div className="sub-image-container">
                            <img
                                className="sub-image"
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/eeffdea4-bbcf-4a05-bcb9-579a03bf41ab.jpeg?im_w=480"
                                alt="sub"
                            />
                            <img
                                style={{ paddingTop: 8 }}
                                className="sub-image"
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/9d4c4d58-b9e6-4a2d-9883-eb2df68c0ba0.jpeg?im_w=480"
                                alt="sub"
                            />
                        </div>
                        <div className="sub-image-container">
                            <img
                                style={{ borderTopRightRadius: 12 }}
                                className="sub-image"
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3c44f9fd-0a88-41dd-acb5-ebf58bde739f.jpeg?im_w=480"
                                alt="sub"
                            />
                            <img
                                style={{
                                    borderBottomRightRadius: 12,
                                    paddingTop: 8,
                                }}
                                className="sub-image"
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/39cdf5aa-a5d6-4f55-893c-73bf310dd598.jpeg?im_w=480"
                                alt="sub"
                            />
                        </div>
                        <button className="show-all-imgs">
                            <div>
                                <svg
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style={{
                                        display: "block",
                                        height: 16,
                                        width: 16,
                                        fill: "currentcolor",
                                    }}>
                                    <path
                                        d="m3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                                        fillRule="evenodd"></path>
                                </svg>
                                <span>사진 모두 보기</span>
                            </div>
                        </button>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                        }}>
                        <div style={{ width: "60%" }}>
                            <section id="profile">
                                <div style={{ width: "80%" }}>
                                    <h2>Vittorio Emanuele님이 호스팅하는 복토 주택</h2>
                                    <ol
                                        style={{
                                            padding: 0,
                                            display: "flex",
                                            listStyleType: "none",
                                        }}>
                                        <li>
                                            <span>최대 인원 2명</span>
                                        </li>
                                        <li>
                                            <span> · </span>
                                            <span>침실 1개</span>
                                        </li>
                                        <li>
                                            <span> · </span>
                                            <span>침대 1개</span>
                                        </li>
                                        <li>
                                            <span> · </span>
                                            <span>욕실 1개</span>
                                        </li>
                                    </ol>
                                </div>
                                <div className="profile-img-container">
                                    <img
                                        className="profile-img"
                                        src="https://a0.muscache.com/im/pictures/user/82b4c3a0-d592-4cc8-b12b-06969fbee837.jpg?im_w=240"
                                        alt="profile"
                                    />
                                </div>
                            </section>
                            <section id="feature">
                                <div>
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{
                                            display: "block",
                                            height: 24,
                                            width: 24,
                                            fill: "currentcolor",
                                        }}>
                                        <path d="m1.66675 2.67728c0-1.29010774 1.19757945-2.22892485 2.43214873-1.95293212l.14254843.03728562 11.76455284 3.5293665 11.7747926-3.3852093c1.1836744-.3403064 2.3638086.45712676 2.5321485 1.63303369l.0152796.14287691.0051793.1462187v23.09468c0 .8279727-.5091718 1.5640524-1.2698418 1.8619846l-.155411.0536419-12.6207 3.7862c-.1499506.0449851-.3078242.0539821-.4609439.026991l-.1137505-.026991-12.62071315-3.786204c-.79308169-.2379357-1.35183119-.937138-1.41857691-1.7513494l-.00671274-.1642731zm1.99999664.00000464v23.24528886l12.33325336 3.6994265 12.3334-3.6994076v-23.0946724l-12.0569924 3.46639925c-.1474472.0423911-.3021582.05014891-.4521925.02334213l-.1114623-.02658488zm21.66607876 17.47821536v2.088l-9.333 2.8v-2.087zm0-6v2.088l-9.333 2.8v-2.087zm0-5.999v2.087l-9.333 2.8v-2.087z"></path>
                                    </svg>
                                    <div>
                                        <strong>언론 소개:</strong>
                                        <span>
                                        Condé Nast Traveler, June 2021
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{
                                            display: "block",
                                            height: 36,
                                            width: 36,
                                            fill: "currentcolor",
                                        }}>
                                        <path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path>
                                    </svg>
                                    <div>
                                        <strong>
                                        Vittorio Emanuele님은 슈퍼호스트입니다
                                        </strong>
                                        <span>
                                            슈퍼호스트는 풍부한 경험과 높은
                                            평점을 자랑하며 게스트가 숙소에서
                                            편안히 머무를 수 있도록 최선을
                                            다하는 호스트입니다.
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{
                                            display: "block",
                                            height: 24,
                                            width: 24,
                                            fill: "currentcolor",
                                        }}>
                                        <path d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z"></path>
                                    </svg>
                                    <div>
                                        <strong>6월 15일 전까지 무료로 취소하실 수 있습니다.</strong>
                                    </div>
                                </div>
                            </section>
                            <section id="aircover">
                                <img
                                    style={{ marginBottom: 16 }}
                                    width="98px"
                                    height="26px"
                                    src="https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg"
                                    alt="aircover"
                                />
                                <span style={{ marginBottom: 16 }}>
                                    모든 예약에는 호스트가 예약을 취소하거나
                                    숙소 정보가 정확하지 않은 경우 또는 체크인에
                                    문제가 있는 상황에 대비한 무료 보호
                                    프로그램이 포함됩니다.
                                </span>
                                <button className="more-btn">
                                    더 알아보기
                                </button>
                            </section>
                            <section id="description">
                                <div className="translation">
                                    <svg
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{
                                            display: "block",
                                            height: 16,
                                            width: 16,
                                            fill: "currentcolor",
                                            marginRight: 12,
                                        }}>
                                        <path d="M9 0a1 1 0 0 1 .993.883L10 1v5h5a1 1 0 0 1 .993.883L16 7v8a1 1 0 0 1-.883.993L15 16H7a1 1 0 0 1-.993-.883L6 15v-5H1a1 1 0 0 1-.993-.883L0 9V1A1 1 0 0 1 .883.007L1 0h8zm1.729 7l-1.393.495.233.217.13.132c.125.127.227.245.308.352l.073.103.048.073.045.077H7.308v1.309h1.207l.166.52.09.266.112.29a6.294 6.294 0 0 0 1.109 1.789c-.495.315-1.119.607-1.87.87l-.331.112-.346.108-.445.134L7.72 15l.407-.125.386-.128c1.007-.349 1.836-.752 2.486-1.214.57.405 1.277.764 2.12 1.08l.369.134.386.128.406.125.72-1.153-.445-.134-.26-.08-.345-.115c-.783-.27-1.43-.57-1.94-.895a6.3 6.3 0 0 0 1.068-1.694l.128-.32.114-.33.165-.521h1.208V8.449H11.64l-.093-.231a3.696 3.696 0 0 0-.554-.917l-.126-.149-.14-.152zm1.35 2.758l-.042.133-.076.224-.103.264A4.985 4.985 0 0 1 11 11.76a4.952 4.952 0 0 1-.743-1.127l-.115-.254-.103-.264-.076-.224-.042-.133h2.158zM9 1H1v8h5V7c0-.057.005-.113.014-.167H3.827L3.425 8H2l2.257-6h1.486l1.504 4H9V1zM5 3.411L4.253 5.6h1.502L5 3.411z"></path>
                                    </svg>
                                    <span>
                                        일부 정보는 자동 번역되었습니다.&nbsp;
                                    </span>
                                    <button className="more-btn">
                                        원문 보기
                                    </button>
                                </div>
                                <div
                                    style={{
                                        paddingTop: 32,
                                        textOverflow: "ellipsis",
                                    }}>
                                    <span
                                        style={{
                                            display: "block",
                                            lineHeight: "24px",
                                        }}>
                                        세련되고 따뜻한 보물 상자로, 자연과 독특한 스타일로 둘러싸여 있습니다.<br/>
                                        <br/>카스텔람마레 만의 해안이 내려다보이는 멋진 계곡의 테라시니에 위치한 컨테이너 스위트는 울창한 찔레배로 둘러싸여 있으며 주변 지역과 완벽한 조화를 이루며 풍경과 어우러집니다....
                                    </span>
                                    <button
                                        style={{ marginTop: 16 }}
                                        className="more-btn">
                                        더 보기 &gt;
                                    </button>
                                </div>
                            </section>
                            <section id="amenities-container">
                                <div style={{ paddingBottom: 24 }}>
                                    <h2>숙소 편의시설</h2>
                                </div>
                                <div>
                                    <div className="amenities-item">
                                        <svg
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="presentation"
                                            focusable="false"
                                            style={{
                                                display: "block",
                                                height: 24,
                                                width: 24,
                                                fill: "currentcolor",
                                                marginRight: 16,
                                            }}>
                                            <path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"></path>
                                        </svg>
                                        <span>무선 인터넷</span>
                                    </div>
                                    <div className="amenities-item">
                                        <svg
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="presentation"
                                            focusable="false"
                                            style={{
                                                display: "block",
                                                height: 24,
                                                width: 24,
                                                fill: "currentcolor",
                                                marginRight: 16,
                                            }}>
                                            <path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.693-5l.42 1.119C29.253 15.036 30 16.426 30 18v9c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2H8v2c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-9c0-1.575.746-2.965 1.888-3.882L4.308 13H2v-2h3v.152l1.82-4.854A2.009 2.009 0 0 1 8.693 5h14.614c.829 0 1.58.521 1.873 1.297L27 11.151V11h3v2h-2.307zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v5h24zm-3-10h.557l-2.25-6H8.693l-2.25 6H25zm-15 7h12v-2H10v2z"></path>
                                        </svg>
                                        <span>건물 내 무료 주차</span>
                                    </div>
                                    <div className="amenities-item">
                                        <svg
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="presentation"
                                            focusable="false"
                                            style={{
                                                display: "block",
                                                height: 24,
                                                width: 24,
                                                fill: "currentcolor",
                                                marginRight: 16,
                                            }}>
                                            <path d="M9.5 2a4.5 4.5 0 0 1 3.527 7.295c.609.215 1.173.55 1.66.988l.191.182L17.414 13H31v2h-2v14a2 2 0 0 1-1.85 1.995L27 31H5a2 2 0 0 1-1.995-1.85L3 29V15H1v-2h2.1a5.009 5.009 0 0 1 2.955-3.608A4.5 4.5 0 0 1 9.5 2zm7.085 13H5v14h22V15h-7.586l3.293 3.294-1.414 1.414zM9.5 4a2.5 2.5 0 0 0-1 4.792V11H8a3.001 3.001 0 0 0-2.83 2h9.415l-1.121-1.121a3 3 0 0 0-1.923-.872L11.343 11H10.5V8.792A2.5 2.5 0 0 0 9.5 4zm15.486-3a6.957 6.957 0 0 1-1.803 4.07l-.445.463A8.971 8.971 0 0 0 20.354 11H18.35a10.975 10.975 0 0 1 3.202-7.118A4.961 4.961 0 0 0 22.974 1zm2.007 0h2.004a10.96 10.96 0 0 1-3.202 7.124A4.974 4.974 0 0 0 24.373 11h-2.012a6.97 6.97 0 0 1 1.804-4.064l.444-.462A8.958 8.958 0 0 0 26.993.999z"></path>
                                        </svg>
                                        <span>전용 온수 욕조</span>
                                    </div>
                                    <div className="amenities-item">
                                        <svg
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="presentation"
                                            focusable="false"
                                            style={{
                                                display: "block",
                                                height: 24,
                                                width: 24,
                                                fill: "currentcolor",
                                                marginRight: 16,
                                            }}>
                                            <path d="M17 1v4.03l4.026-2.324 1 1.732L17 7.339v6.928l6-3.464V5h2v4.648l3.49-2.014 1 1.732L26 11.381l4.026 2.325-1 1.732L24 12.535l-6 3.464 6 3.465 5.026-2.902 1 1.732L26 20.618l3.49 2.016-1 1.732L25 22.351V27h-2v-5.804l-6-3.465v6.929l5.026 2.902-1 1.732L17 26.97V31h-2v-4.031l-4.026 2.325-1-1.732L15 24.66v-6.929l-6 3.464V27H7v-4.65l-3.49 2.016-1-1.732 3.489-2.016-4.025-2.324 1-1.732 5.025 2.901 6-3.464-6-3.464-5.025 2.903-1-1.732L6 11.38 2.51 9.366l1-1.732L7 9.648V5h2v5.803l6 3.464V7.339L9.974 4.438l1-1.732L15 5.03V1z"></path>
                                        </svg>
                                        <span>에어컨</span>
                                    </div>
                                    <div className="amenities-item">
                                        <svg
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="presentation"
                                            focusable="false"
                                            style={{
                                                display: "block",
                                                height: 24,
                                                width: 24,
                                                fill: "currentcolor",
                                                marginRight: 16,
                                            }}>
                                            <path d="M7.5 2a4.5 4.5 0 0 1 4.473 4H14v2H8V6h1.95a2.5 2.5 0 0 0-4.945.336L5 6.5V16h26v2h-2v5a5.001 5.001 0 0 1-3 4.584V30h-2v-2H8v2H6v-2.416a5.002 5.002 0 0 1-2.995-4.349L3 23v-5H1v-2h2V6.5A4.5 4.5 0 0 1 7.5 2zm19.499 16h-22L5 23a3 3 0 0 0 2.65 2.98l.174.015L8 26h16a3 3 0 0 0 2.995-2.824L27 23z"></path>
                                        </svg>
                                        <span>욕조</span>
                                    </div>
                                </div>
                                <div style={{ marginTop: 24 }}>
                                    <button className="more-amenities">
                                        편의시설 35개 모두 보기
                                    </button>
                                </div>
                            </section>
                            <section id="accommodation-container">
                                <div>
                                    <h2>접근성 편의</h2>
                                </div>
                                <div style={{ paddingTop: 8 }}>
                                    <span
                                        style={{ color: "rgb(113, 113, 113)" }}>
                                        호스트가 제공하고 에어비앤비에서 검토한 정보입니다.<br/><br/>
                                    </span>
                                </div>
                                <div>
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-45465864-Amenities/original/54184098-ccb8-42a8-be2f-dbc9f15fd6d8.jpeg?im_w=320" width="320" height="200"></img>
                                </div>
                                <b>게스트 출입구 및 주차장</b><br/>
                                게스트 출입구까지 통로에 조명 있음<br/><br/>
                                <button
                                        className="observation-btn2">
                                        <b>기능 세부정보 모두 보기</b>
                                </button>
                            </section>
                            <section>
                                <img src={airCalendar}/>
                            </section>
                        </div>
                        <div id="sticky-view-container">
                            <div className="sticky-view">
                                <div className="sticky-view-text">
                                    <span style={{ fontSize: 22 }}>
                                    ₩404,001
                                    </span>
                                    <span style={{ fontSize: 15 }}>
                                    /박
                                    </span>
                                    <div
                                        style={{
                                            display: "flex",
                                            marginTop: 8,
                                        }}>
                                        <svg
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="presentation"
                                            focusable="false"
                                            style={{
                                                display: "block",
                                                height: 18,
                                                width: 18,
                                                fill: "currentcolor",
                                                marginRight: 8,
                                            }}>
                                            <path
                                                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                                fillRule="evenodd"></path>
                                        </svg>
                                        <span>4.91  ·</span>&nbsp;
                                        <u>후기 23개</u>
                                    </div>
                                </div>
                                <div className="sticky-view-option-container">
                                    <div className="sticky-view-option">
                                        <button className="checkin-btn">
                                            <div
                                                style={{
                                                    borderRight:
                                                        "1px solid #cccccc",
                                                }}>
                                                <span style={{ fontSize: 12 }}>
                                                    체크인
                                                </span>
                                                <br />
                                                <span style={{ fontSize: 12 }}>2022. 6. 22.</span>
                                            </div>
                                            <div>
                                                <span style={{ fontSize: 12 }}>
                                                    체크아웃
                                                </span>
                                                <br />
                                                <span style={{ fontSize: 12 }}>2022. 6. 27.</span>
                                            </div>
                                        </button>
                                        <button className="guest-btn">
                                            <div>
                                                <span style={{ fontSize: 12 }}>
                                                    인원
                                                </span>
                                                <br />
                                                <span>게스트 1명</span>
                                            </div>
                                            <div className="arrow">&gt;</div>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="observation-btn"
                                        >
                                        <b>예약하기</b>
                                    </button>
                                </div>
                                <div className="observation-div">
                                <br/><span>예약 확정 전에는 요금이 청구되지 않습니다.</span><br/><br/>
                                    <u>₩404,001 x 5박</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₩2,020,005<br/><br/>
                                    <u>서비스 수수료</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₩285,184<br/><br/>
                                </div>
                                <div className="observation-div2">
                                    <br/><b>총 합계&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₩2,305,189</b>
                                </div>
                            </div>
                            
                            <div className="report-btn">
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
                                        fill: "currentcolor",
                                        marginRight: 16,
                                    }}>
                                    <path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l.115-.006a1 1 0 0 0 .847-1.269L27.039 14l1.923-6.724A1 1 0 0 0 28 6z"></path>
                                </svg>
                                <span>숙소 신고하기</span>
                            </div>
                        </div>
                    </div>
                    <section id="review-container">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: 22,
                                marginBottom: 32,
                            }}>
                            <svg
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{
                                    display: "block",
                                    height: 18,
                                    width: 18,
                                    fill: "currentcolor",
                                    marginRight: 8,
                                }}>
                                <path
                                    d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                    fillRule="evenodd"></path>
                            </svg>
                            <h2 style={{ fontSize: 22 }}>4.91 · 후기 23개</h2>
                        </div>
                        <div className="review-feature-container">
                            <div className="review-feature-wrap">
                                <div className="review-feature">
                                    <span>청결도</span>
                                    <div className="review-feature-rating">
                                        <div>
                                            <div className="outer"></div>
                                            <div className="inner"></div>
                                        </div>
                                        <span className="rating">4.8</span>
                                    </div>
                                </div>
                            </div>
                            <div className="review-feature-wrap">
                                <div className="review-feature">
                                    <span>정확성</span>
                                    <div className="review-feature-rating">
                                        <div>
                                            <div className="outer"></div>
                                            <div className="inner"></div>
                                        </div>
                                        <span className="rating">4.9</span>
                                    </div>
                                </div>
                            </div>
                            <div className="review-feature-wrap">
                                <div className="review-feature">
                                    <span>의사소통</span>
                                    <div className="review-feature-rating">
                                        <div>
                                            <div className="outer"></div>
                                            <div className="inner"></div>
                                        </div>
                                        <span className="rating">4.9</span>
                                    </div>
                                </div>
                            </div>
                            <div className="review-feature-wrap">
                                <div className="review-feature">
                                    <span>위치</span>
                                    <div className="review-feature-rating">
                                        <div>
                                            <div className="outer"></div>
                                            <div className="inner"></div>
                                        </div>
                                        <span className="rating">4.6</span>
                                    </div>
                                </div>
                            </div>
                            <div className="review-feature-wrap">
                                <div className="review-feature">
                                    <span>체크인</span>
                                    <div className="review-feature-rating">
                                        <div>
                                            <div className="outer"></div>
                                            <div className="inner"></div>
                                        </div>
                                        <span className="rating">5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="review-feature-wrap">
                                <div className="review-feature">
                                    <span>가격 대비 만족도</span>
                                    <div className="review-feature-rating">
                                        <div>
                                            <div className="outer"></div>
                                            <div className="inner"></div>
                                        </div>
                                        <span className="rating">4.6</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="review-comment-container">
                            <div>
                            <div className="review-profile">
                                <img
                                    className="profile-img"
                                    src="https://a0.muscache.com/im/pictures/user/f67362d4-7acb-4140-8be3-634fbf0ffa4a.jpg?aki_policy=profile_large"
                                    alt="profile"
                                />
                                <div className="review-nickname">
                                    <strong>앤디</strong>
                                    <span>2022년 6월</span>
                                </div>
                            </div>
                            <span style={{ marginTop: 20, marginBottom: 20}}>
                                컨테이너 스위트는 정말 좋았어요!
                            </span>
                        </div>
                            <div>
                                <button className="more-amenities">
                                    후기 23개 모두 보기
                                </button>
                            </div>
                        </div>
                    </section>
                    <section id="hosting-area">
                        <div style={{ paddingBottom: 24 }}>
                            <h2>호스팅 지역</h2>
                        </div>
                        <div style={{ marginBottom: 32 }}>
                            <img src={airMap2}/>
                        </div>
                        <div>
                            <div style={{ marginBottom: 16 }}>
                                <strong>Terrasini, Sicilia, 이탈리아</strong>
                            </div>
                            <span>
                                팔레르모 중심지에서 차로 50분 이내에 테라시니로
                                이동할 수 있습니다.<br/>
                                자유 시간 동안 원하는 모든 것을 찾을 수 있습니다. 바다와 산, 아름다운 해변, 자연 보호구역, 감시탑, 좋은 음식, 인기 있는 전통, 아직 살아 있는 작은 정박지, 석양, 매혹적인 전망.
                            </span>
                        </div>
                        <div style={{ marginTop: 16 }}>
                            <button className="more-btn">더 보기 &gt;</button>
                        </div>
                    </section>
                    <section id="host-info-container">
                        <div className="host-profile">
                            <div style={{ marginRight: 16 }}>
                                <img
                                    className="profile-img"
                                    src="https://a0.muscache.com/im/pictures/user/82b4c3a0-d592-4cc8-b12b-06969fbee837.jpg?im_w=240"
                                    alt="profile"
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}>
                                <strong>호스트: Vittorio Emanuele님</strong>
                                <span
                                    style={{ paddingTop: 8, color: "#717171" }}>
                                    회원 가입일: 2020년 9월
                                </span>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: "flex", marginBottom: 36 }}>
                                <div
                                    className="host-badge"
                                    style={{ padding: "0px 12px" }}>
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
                                            fill: "currentcolor",
                                            marginRight: 8,
                                        }}>
                                        <path
                                            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                            fillRule="evenodd"></path>
                                    </svg>
                                    <span>후기 23개</span>
                                </div>
                                <div
                                    className="host-badge"
                                    style={{ padding: "0px 12px" }}>
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
                                            fill: "currentcolor",
                                        }}>
                                        <path d="M16 .798l.555.37C20.398 3.73 24.208 5 28 5h1v12.5C29 25.574 23.21 31 16 31S3 25.574 3 17.5V5h1c3.792 0 7.602-1.27 11.445-3.832L16 .798zm7 9.08l-9.5 9.501-4.5-4.5L6.879 17l6.621 6.621L25.121 12 23 9.879z"></path>
                                    </svg>
                                    <span>본인 인증 완료</span>
                                </div>
                                <div
                                    className="host-badge"
                                    style={{ padding: "0px 12px" }}>
                                    
                                    <span>슈퍼호스트</span>
                                </div>
                            </div>
                            <div style={{ width: "50%" }}>
                                <div style={{ marginBottom: 16 }}>
                                    <strong>
                                        Vittorio Emanuele님은 슈퍼호스트입니다.
                                    </strong>
                                </div>
                                <span>
                                    슈퍼호스트는 풍부한 경험과 높은 평점을
                                    자랑하며 게스트가 숙소에서 편안히 머무를 수
                                    있도록 최선을 다하는 호스트입니다.
                                </span>
                            </div>
                            <ul className="host-ul">
                                <li>언어: English, Italiano</li>
                                <li>응답률: 97%</li>
                                <li>응답시간: 1시간 이내</li>
                            </ul>
                            <div style={{ marginTop: 32 }}>
                                <button className="more-amenities">
                                    호스트에게 연락하기
                                </button>
                            </div>
                            <div style={{ display: "flex", marginTop: 24 }}>
                                <svg
                                    viewBox="0 0 48 48"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style={{
                                        display: "block",
                                        height: 24,
                                        width: 24,
                                        stroke: "currentcolor",
                                        fill: "rgb(227,28,95)",
                                        marginRight: 16,
                                    }}>
                                    <g>
                                        <g stroke="none">
                                            <path
                                                d="m25 5 .5846837.00517475c4.2905015.07574932 8.8374917.98334075 13.644943 2.73687823l.7703733.28794702v27.3705076l-.0084766.1301365c-.0392237.2994207-.2122236.5656263-.4699074.7230756l-.1154775.0605995-11.4234694 5.0774159c.0623636-.7458456-.0433445-1.4943022-.3209346-2.2783707-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487l-.3317555-.6369277c-.4686141-.9115826-.8248653-1.6297768-1.3147672-2.2052384-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-.4956822.9653459-.9868615 1.9338929-1.47282629 2.9041739l.00159179-19.0721502.769087-.28647781c4.798406-1.75037189 9.3373349-2.65799308 13.6207364-2.73688762z"
                                                fillOpacity=".2"></path>
                                            <path d="m25 1c5.5985197 0 11.5175072 1.27473768 17.7548231 3.81642897.7027419.28641855 1.1783863.94329535 1.2386823 1.69066764l.0064946.16143432v28.73197667c0 1.8999458-1.0758761 3.6285379-2.7638433 4.4721215l-.2054644.0969363-15.0427818 6.6856808c-.4614217.2050763-1.8621146.3276624-2.7955525.3430957l-.192358.0016581.0009065-1.0005013c.6483674-.0069073 1.2843321-.1330366 1.8784107-.3747752.8327784-.3388673 1.5457548-.8939986 2.0790671-1.5885618l13.2600311-5.8942194c1.023196-.4547538 1.7028179-1.4383245 1.7751735-2.5449525l.0064111-.1964822v-28.73197667l-.6916987-.27704554c-5.7517231-2.26330416-11.1871718-3.39148539-16.3083013-3.39148539-5.1211255 0-10.5565697 1.12817946-16.3082877 3.39148006l-.6917123.27707479-.00030284 24.49382405c-.68067737 1.4079172-1.34834149 2.8151846-2.00083161 4.2173468l.00113445-28.71117085c0-.81311953.4922453-1.5453083 1.24525131-1.85215622 6.23725069-2.54166294 12.15623339-3.81639863 17.75474869-3.81639863z"></path>
                                        </g>
                                        <path
                                            d="m15.999908 41.6930234.6867258-.8851772c1.5957359-2.0328613 2.5919668-3.8873951 2.9612752-5.511912.2804314-1.2318637.2318527-2.5167089-.4804505-3.5591688-.6801015-.9952012-1.8642067-1.5894421-3.1673665-1.5894421-1.3033438 0-2.487633.5940563-3.1675505 1.5890729-.7099111 1.039137-.761802 2.3201055-.4810025 3.5580612.3689403 1.6247015 1.3653552 3.4796045 2.9616432 5.5133888l.6867258.8851772.6447715.7192179c1.1495113 1.2599236 2.1735278 2.122579 3.2227536 2.7149739.8151649.4602182 1.6400823.7413704 2.4521191.8358878.8812245.1033783 1.7585848-.0123685 2.559765-.3383795 1.6422905-.6682672 2.8186673-2.1775911 3.0700251-3.9387151.1205267-.8438258.0264975-1.6854363-.2876078-2.572644-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487-.6486357-1.2222643-1.0477537-2.1388241-1.6465227-2.8421661-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-2.1326775 4.1534098-4.1819984 8.3660775-6.09128759 12.5211487-.28227155.6306079-.79308369 1.6933742-1.04168139 2.3948702-.3141053.8872077-.40813448 1.7288182-.28760784 2.5731978.25117384 1.7609394 1.42736664 3.2700787 3.06965711 3.9385305.81939715.3333951 1.69418134.4397272 2.55958102.3385641.81295679-.0948866 1.63805829-.3760388 2.45248709-.8360724 1.0492258-.5922103 2.0732422-1.4550503 3.2227536-2.7149739z"
                                            fill="none"
                                            strokeWidth="2"></path>
                                    </g>
                                </svg>
                                <span style={{ fontSize: 12}}>
                                    안전한 결제를 위해 에어비앤비 웹사이트나 앱<br/>
                                    외부에서 송금하거나 대화를 나누지 마세요.
                                </span>
                            </div>
                        </div>
                    </section>
                    <section id="notice">
                        <div style={{ paddingBottom: 24 }}>
                            <h2>알아두어야 할 사항</h2>
                        </div>
                        <div className="notice-content">
                            <div>
                                <div style={{ marginBottom: 12 }}>
                                    <strong>숙소 이용 규칙</strong>
                                </div>
                                <div>
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
                                            fill: "currentcolor",
                                            marginRight: 12,
                                        }}>
                                        <path d="M16 1C7.716 1 1 7.716 1 16s6.716 15 15 15 15-6.716 15-15S24.284 1 16 1zm7.895 22.954l-9.526-5.5a1.5 1.5 0 0 1-.743-1.154l-.007-.145v-11h3V16.29l8.776 5.067-1.5 2.598z"></path>
                                    </svg>
                                    <span>체크인: 오후 3:00 이후</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ marginBottom: 12 }}>
                                    <strong>건강과 안전</strong>
                                </div>
                                <div>
                                    
                                    <span>
                                        에어비앤비 코로나19 방역 수칙을
                                        준수하셔야 합니다.
                                    </span>
                                </div>
                                <div>
                                    
                                    <span>일산화탄소 경보기 없음</span>
                                </div>
                                <div>
                                    
                                    <span>화재경보기 없음</span>
                                </div>
                                <div>
                                    
                                    <span>보안 카메라/녹화 장치&nbsp;<u><b>더 보기</b></u></span>
                                </div>
                                <div style={{ marginTop: 24 }}>
                                    <button className="more-btn">
                                        더 보기 &gt;
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div style={{ marginBottom: 12 }}>
                                    <strong>환불 정책</strong>
                                </div>
                                <div>
                                    <span>6월 15일 전까지 무료 취소 가능</span>
                                </div>
                                <div style={{ marginTop: 24 }}>
                                    <button className="more-btn">
                                        더 보기 &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            
        </div>
    );
};

export default Product;
