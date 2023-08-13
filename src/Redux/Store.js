import { messagesReducer } from './messages-reducer';
import { profileReducer } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how r u?', likesCounter: 15 },
                { id: 2, message: "It's my first post", likesCounter: 5 },
                { id: 3, message: 'Book cook', likesCounter: 11 },
            ],
            newPostText: 'it-testing',
        },
        messagesPage: {
            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How r ur?' },
                { id: 3, message: 'Yo!' },
                { id: 4, message: 'Some text' },
                { id: 5, message: 'lets tell about travel' },
            ],
            dialogsData: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Valera' },
            ],
            newMessageBody: '',
        },
        sidebar: {},
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );
        this._state.messagesPage = messagesReducer(
            this._state.messagesPage,
            action
        );
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

export default store;
