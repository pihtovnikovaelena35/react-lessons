import React from 'react';
import s from './Dialogs.module.css';
const Dialogs = () => {
 return (
     <div className={s.dialogs}>
         <div className={s.dialogsItems}>
             <div className={s.dialog + ' ' + s.active}>
                 Sasha
             </div>
             <div className={s.dialog}>
                Sveta
             </div>
             <div className={s.dialog}>
                 Misha
             </div>
         </div>
         <div className={s.messages}>
         <div className={s.messag}>Hi</div>
         <div className={s.messag}>Yo</div>
         <div className={s.messag}>Hi</div>
     </div>
     </div>
 );

    
}

export default Dialogs;