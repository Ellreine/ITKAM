const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({
                id: state.messagesData.length + 1,
                message: body,
            });
            return state;

        default:
            break;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});
