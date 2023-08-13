import React from "react";
import classes from "./MyPost.module.css";

const MyPost = (props) => {
    return (
        <div className={classes.item}>
            <img src="" alt="" />
            <div>{props.message}</div>
            <span>Likes: {props.likesCounter}</span>
        </div>
    );
};

export default MyPost;
