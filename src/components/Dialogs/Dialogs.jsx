import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>   
    )
}

const Message= (props) => {
    return(
    <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = () => {
 return ( 
    <div className={s.dialogs}>
         <div className={s.dialogsItems}>
             <DialogItem name="Sasha" id="1"/>
             <DialogItem name="Sveta" id="2"/>
             <DialogItem name="Masha" id="3"/>
             <DialogItem name="Olga" id="4"/>
             <DialogItem name="Nikita" id="5"/>
         </div>
         <div className={s.messages}>
             <Message message="Hi"/>
             <Message message="Yo"/>
             <Message message="Hello"/>
          </div>
     </div>
 )
    
}

export default Dialogs;