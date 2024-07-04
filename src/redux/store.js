import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";


const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'I am new here', likeCount: '9'},
                {id: 2, post: 'Have you been in Greece', likeCount: '55'},
                {id: 3, post: 'I want to work', likeCount: '6'},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogPage: {
            messages: [
                {id: 1, message: 'Hi how are you'},
                {id: 2, message: 'Hello'},
                {id: 3, message: ' What do you do?'},
                {id: 4, message: 'Hey yo'},
                {id: 5, message: 'Y0'},
            ],
            newMessageText: 'message',
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
        },
        sidebar: [
            {
                id: 1,
                name: 'Nike',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DwUX8Y8p_MdALmN3ARC5r0I5mpkXJD6rKw&s'
            },
            {
                id: 2,
                name: 'Johnson',
                image: 'data:image/png;base64,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'
            },
            {
                id: 3,
                name: 'January',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxc7EmHUFrqXC1_7QsDbKkMp1JS_uzKzLCLw&s'
            },
        ],
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)

        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;