const ADD_USER = "ADD-USER";
const DELETE_USER = "DELETE-USER";
const UPDATE_USER = "UPDATE-USER";
const VIEW_USER = "VIEW-USER";
const FOLLOW_USER = 'FOLLOW-USER';
const UN_FOLLOW_USER = 'UN-FOLLOW-USER';
const SHOW_MORE_USERS = 'SHOW-MORE-USERS';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

let initialState = {
    users: [],
    totalUsersCount: 20,
    pageSize: 50,
    currentPage: 1,
    isFetching: false
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
                users: [...action.users]
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
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
export const s1etUsersAC = users => ({type: SET_USERS, users: users});
export const setTotalUsersCountAC = totalUsersCount => ({
    type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount
});
export const setCurrentPageAC = currentPage => ({
    type: SET_CURRENT_PAGE, currentPage: currentPage
});
export const setIsFetchingAC = isFetching => ({type: SET_IS_FETCHING, isFetching});

