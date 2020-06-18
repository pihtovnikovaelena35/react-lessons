import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
        <NavLink to="/dialogs/1">Sasha</NavLink>
    </div>   
    )
}

const Dialogs = () => {
 return (
     <div className={s.dialogs}>
         <div className={s.dialogsItems}>
             <div className={s.dialog + ' ' + s.active}>
                 <NavLink to="/dialogs/1">Sasha</NavLink>
             </div>
             <div className={s.dialog}>
             <NavLink to="/dialogs/2">Sveta</NavLink>
             </div>
             <div className={s.dialog}>
             <NavLink to="/dialogs/3">Misha</NavLink>
             </div>
             <div className={s.dialog}>
             <NavLink to="/dialogs/4">Masha</NavLink>
             </div>
         </div>
         <div className={s.messages}>
         <div className={s.messag}>Hi</div>
         <div className={s.messag}>Yo</div>
         <div className={s.messag}>Hi</div>
          </div>
     </div>
 )
    
}

export default Dialogs;