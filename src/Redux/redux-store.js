import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { messagesReducer } from './messages-reducer';
import { profileReducer } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
});

let store = configureStore(reducers);

export default store;
