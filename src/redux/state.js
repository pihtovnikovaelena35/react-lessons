let state = {
    profilePage:{
         posts:[
      {id: 1, message: 'Hi, how are you?', likesCount:12 },
      {id: 2, message: 'It is my first post', likesCount:125 }
    ],
         
    },
     dialogsPage:{
        dialogs: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Masha'},
            {id: 4, name: 'Olga'},
            {id: 5, name: 'Nikita'},
           ],
    messages: [
      {id: 1, message:'Hi'},
      {id: 2, message:'How are you?'},
      {id: 3, message:'Hi'},
      {id: 4, message:'Hi'},
      {id: 5, message:'Hi'},
     ]
    }
}

export default state;