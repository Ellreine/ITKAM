import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const navLinkClasses = (navData) => (navData.isActive ? s.active : s.dialog);

const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink className={navLinkClasses} to={path}>
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;
