const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how r u?', likesCounter: 15 },
        { id: 2, message: "It's my first post", likesCounter: 5 },
        { id: 3, message: 'Book cook', likesCounter: 11 },
    ],
    newPostText: 'it-testing',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                message: state.newPostText,
                likesCounter: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreater = () => ({
    type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});
