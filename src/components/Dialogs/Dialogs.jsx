import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

     let dialogs = [
         {id: 1, name: 'Sasha'},
         {id: 2, name: 'Sveta'},
         {id: 3, name: 'Masha'},
         {id: 4, name: 'Olga'},
         {id: 5, name: 'Nikita'},
        ];

    let messages = [
        {id: 1, name: 'Sveta'},
        {id: 1, name: 'Sasha'},
        {id: 1, name: 'Vika'},
        {id: 1, name: 'Andrew'},
        {id: 1, name: 'Misha'},
    ];

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />) ;
        
    let messageElements = messages.map(message => <Message message={message.message}/>);


 return ( 
    <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
             </div>

         <div className={s.messages}>
             {messageElements}
             </div>
     </div>
 )
    
}

export default Dialogs;