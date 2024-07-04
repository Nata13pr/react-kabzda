const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    users: [
        // {
        //     id: 1,
        //     photoURL: 'https://upload.wikimedia.org/wikipedia/ru/5/5c/%D0%9D%D0%B8%D0%BD%D0%B0_%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%B0%D1%8F_%D0%BF%D0%BB%D0%B5%D0%BD%D0%BD%D0%B8%D1%86%D0%B0.jpg',
        //     followed: true,
        //     fullName: 'Nina',
        //     status: "I am archeologist",
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoURL: 'https://upload.wikimedia.org/wikipedia/ru/5/5c/%D0%9D%D0%B8%D0%BD%D0%B0_%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%B0%D1%8F_%D0%BF%D0%BB%D0%B5%D0%BD%D0%BD%D0%B8%D1%86%D0%B0.jpg',
        //     followed: false,
        //     fullName: 'Misha',
        //     status: "I am  new in archeology",
        //     location: {city: 'Washington', country: 'USA'}
        // },
        // {
        //     id: 3,
        //     photoURL: 'https://upload.wikimedia.org/wikipedia/ru/5/5c/%D0%9D%D0%B8%D0%BD%D0%B0_%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%B0%D1%8F_%D0%BF%D0%BB%D0%B5%D0%BD%D0%BD%D0%B8%D1%86%D0%B0.jpg',
        //     followed: true,
        //     fullName: 'Slava',
        //     status: "I am a student",
        //     location: {city: 'Madrid', country: 'Spain'}
        // },
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;

    }
}

export default usersReducer;

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})