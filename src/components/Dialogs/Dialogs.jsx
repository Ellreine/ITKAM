import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Messages/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/messages-reducer';

const Dialogs = (props) => {
    let state = props.store.getState().messagesPage;
    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messagesData.map(m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
