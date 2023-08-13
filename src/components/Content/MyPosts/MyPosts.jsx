import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import classes from './MyPosts.module.css';
import MyPost from './Post/MyPost';



const MyPosts = (props) => {
    let postsElements = props.postsData.map((el) => (
        <MyPost
            message={el.message}
            likesCounter={el.likesCounter}
            id={el.id}
        />
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreater())
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    };

    return (
        <div className={classes.myPosts}>
            My Posts
            <div className={classes.newPost}>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                />
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={classes.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
