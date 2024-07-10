const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
    messages: [
        {id: 1, message: 'Hi how are you'},
        {id: 2, message: 'Hello'},
        {id: 3, message: ' What do you do?'},
        {id: 4, message: 'Hey yo'},
        {id: 5, message: 'Y0'},
    ],
    dialogs: [
        {
            id: 1,
            name: 'Kolja',
            image: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png'
        },
        {
            id: 2,
            name: 'Andrij',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9R_sZCRYvvXR11cw_43LUcuKnW2JvPbhZhqp3IAuzyrm_9eaENsZ5Jm-iQX3MrIs0u8g&usqp=CAU'
        },
        {
            id: 3,
            name: 'Slava',
            image: 'https://i.pinimg.com/736x/cc/cc/4d/cccc4d3c17d97e05226c10c30d8d7689.jpg'
        },
        {id: 4, name: 'Lesja', image: 'https://cs13.pikabu.ru/post_img/2023/10/28/2/1698456437194820220.jpg'},
        {
            id: 5,
            name: 'Natalja',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUzWuOeW36e5ioWIAFAtt30yfNEZn5fx6XW8tIUTDKnbX9uwXgjGRyj2C7uMHTfPeQ1w&usqp=CAU'
        },
        {
            id: 6,
            name: 'Misha',
            image: 'https://eduodessa.wordpress.com/wp-content/uploads/2017/06/photo-833032.jpg?w=604'
        },
        {id: 7, name: 'Nina', image: 'https://i.pinimg.com/736x/6c/5f/a6/6c5fa66441d2d4f478542b14469a9931.jpg'},
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessageObj = {
                id: 7,
                message: action.formData,
            }
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessageObj)
            stateCopy.newMessageText = '';
            return stateCopy;
        default:
            return state
    }
}
export default dialogReducer;

export const addMessageActionCreator = (formData) => ({type: ADD_MESSAGE, formData});

