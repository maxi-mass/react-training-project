const ADD_USER = "ADD-USER";
const DELETE_USER = "DELETE-USER";
const UPDATE_USER = "UPDATE-USER";
const VIEW_USER = "VIEW-USER";
const FOLLOW_USER = 'FOLLOW-USER';
const UN_FOLLOW_USER = 'UN-FOLLOW-USER';
const SHOW_MORE_USERS = 'SHOW-MORE-USERS';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId && !user.followed) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        }
        case UN_FOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId && user.followed) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
};

export const addUserAC = () => ({type: ADD_USER});
export const updateUserAC = userId => ({type: UPDATE_USER, userId: userId});
export const deleteUserAC = userId => ({type: DELETE_USER, userId: userId});
export const viewUserAC = userId => ({type: VIEW_USER, userId: userId});
export const followUserAC = userId => ({type: FOLLOW_USER, userId: userId});
export const unFollowUserAC = userId => ({type: UN_FOLLOW_USER, userId: userId});
export const showMoreUsersAC = currentPage => ({type: SHOW_MORE_USERS, currentPage: currentPage});
export const setUsersAC = users => ({type: SET_USERS, users: users});
