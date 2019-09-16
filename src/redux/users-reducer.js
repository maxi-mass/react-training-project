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

export const addUser = () => ({type: ADD_USER});
export const updateUser = userId => ({type: UPDATE_USER, userId});
export const deleteUser = userId => ({type: DELETE_USER, userId});
export const viewUser = userId => ({type: VIEW_USER, userId});
export const followUser = userId => ({type: FOLLOW_USER, userId});
export const unFollowUser = userId => ({type: UN_FOLLOW_USER, userId});
export const showMoreUsers = currentPage => ({type: SHOW_MORE_USERS, currentPage: currentPage});
export const setUsers = users => ({type: SET_USERS, users});
export const s1etUsers = users => ({type: SET_USERS, users});
export const setTotalUsersCount = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsFetching = isFetching => ({type: SET_IS_FETCHING, isFetching});

