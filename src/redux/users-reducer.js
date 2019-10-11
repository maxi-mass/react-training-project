import {usersAPI} from "../api/api";

const FOLLOW_USER = 'FOLLOW-USER';
const UN_FOLLOW_USER = 'UN-FOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_FOLLOWING_IN_PROGRESS = 'SET-FOLLOWING-IN-PROGRESS';

let initialState = {
    users: [],
    totalUsersCount: 20,
    pageSize: 50,
    currentPage: 1,
    isFetching: false,
    followingInProgress: {userId: null, isFetching: false}
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
        case SET_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: {
                    userId: action.userId,
                    isFetching: action.isFetching
                }
            };
        default:
            return state;
    }
};

export const requestUsers = ({currentPage, pageSize}) => dispatch => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers({currentPage, pageSize}).then(response => {
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(setIsFetching(false));
    });
};


export const unFollow = userId => dispatch => {
    dispatch(setFollowingInProgress({
        userId,
        isFetching: true
    }));
    usersAPI.unFollowUser(userId).then(response => {
        if (response.resultCode === 0) {
            dispatch(unFollowUser(userId));
        }
        dispatch(setFollowingInProgress({
            userId,
            isFetching: false
        }));
    });
};

export const follow = userId => dispatch => {
    dispatch(setFollowingInProgress({
        userId,
        isFetching: true
    }));
    usersAPI.followUser(userId).then(response => {
        if (response.resultCode === 0) {
            dispatch(followUser(userId));
        }
        dispatch(setFollowingInProgress({
            userId,
            isFetching: false
        }));
    });
};

export const followUser = userId => ({type: FOLLOW_USER, userId});
export const unFollowUser = userId => ({type: UN_FOLLOW_USER, userId});
export const setUsers = users => ({type: SET_USERS, users});
export const setTotalUsersCount = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsFetching = isFetching => ({type: SET_IS_FETCHING, isFetching});
export const setFollowingInProgress = ({userId, isFetching}) => ({type: SET_FOLLOWING_IN_PROGRESS, userId, isFetching});
