import React, { useState } from "react";
import LikeButton from "./LikeButton";
import RedLikeButton from "./RedLikeButton";
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrease = () => {
    setCount(prevCount => prevCount + 1);
    };
    const onDecrease = () => {
        setCount(prevCount => prevCount - 1);
    };
    return (
    <div>
        <src onClick={onIncrease}><LikeButton/></src>       
        {count===1?<src onClick={onDecrease}><RedLikeButton/></src>: <></>}
    </div>
    );

};

export default Counter;