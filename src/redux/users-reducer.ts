import { usersAPI } from "../api/api";
const FOLLOW_USER = "users/FOLLOW-USER";
const UN_FOLLOW_USER = "users/UN-FOLLOW-USER";
const SET_USERS = "users/SET-USERS";
const SET_TOTAL_USERS_COUNT = "users/SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE";
const SET_IS_FETCHING = "users/SET-IS-FETCHING";
const SET_FOLLOWING_IN_PROGRESS = "users/SET-FOLLOWING-IN-PROGRESS";

let initialState = {
  users: [] as Array<any>,
  totalUsersCount: 20,
  pageSize: 20,
  currentPage: 1,
  isFetching: false,
  followingInProgress: { userId: null as null | number, isFetching: false }
};
type TInitialState = typeof initialState;

export const usersReducer = (
  state: TInitialState = initialState,
  action: any
): TInitialState => {
  switch (action.type) {
    case FOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((user: any) => {
          if (user.id === action.userId && !user.followed) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    }
    case UN_FOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((user: any) => {
          if (user.id === action.userId && user.followed) {
            return { ...user, followed: false };
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

export const requestUsers = (pageParams: any) => async (dispatch: any) => {
  const { currentPage, pageSize } = pageParams;
  dispatch(setIsFetching(true));
  dispatch(setCurrentPage(currentPage));

  let response = await usersAPI.getUsers({ currentPage, pageSize });
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
  dispatch(setIsFetching(false));
};

const followUnFollow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(
    setFollowingInProgress({
      userId,
      isFetching: true
    })
  );
  let response = await apiMethod(userId);
  if (response.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(
    setFollowingInProgress({
      userId,
      isFetching: false
    })
  );
};

export const unFollow = (userId: number) => (dispatch: any) => {
  return followUnFollow(
    dispatch,
    userId,
    usersAPI.unFollowUser.bind(usersAPI),
    unFollowUser
  );
};

export const follow = (userId: number) => (dispatch: any) => {
  return followUnFollow(
    dispatch,
    userId,
    usersAPI.followUser.bind(usersAPI),
    followUser
  );
};

type TFollowUserAction = {
  type: typeof FOLLOW_USER;
  userId: number;
};
type TUnFollowUserAction = {
  type: typeof UN_FOLLOW_USER;
  userId: number;
};
type TSetUsersAction = {
  type: typeof SET_USERS;
  users: Array<any>;
};
type TSetTotalUsersCountAction = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};
type TSetCurrentPageAction = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
type TSetIsFetchingAction = {
  type: typeof SET_IS_FETCHING;
  isFetching: boolean;
};
type TSetFollowingInProgressAction = {
  type: typeof SET_FOLLOWING_IN_PROGRESS;
  userId: number;
  isFetching: boolean;
};
export const followUser = (userId: number): TFollowUserAction => ({
  type: FOLLOW_USER,
  userId
});
export const unFollowUser = (userId: number): TUnFollowUserAction => ({
  type: UN_FOLLOW_USER,
  userId
});
export const setUsers = (users: Array<any>): TSetUsersAction => ({
  type: SET_USERS,
  users
});
export const setTotalUsersCount = (
  totalUsersCount: number
): TSetTotalUsersCountAction => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount
});
export const setCurrentPage = (currentPage: number): TSetCurrentPageAction => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setIsFetching = (isFetching: boolean): TSetIsFetchingAction => ({
  type: SET_IS_FETCHING,
  isFetching
});
export const setFollowingInProgress = (
  params: any
): TSetFollowingInProgressAction => {
  const { userId, isFetching } = params;
  return {
    type: SET_FOLLOWING_IN_PROGRESS,
    userId,
    isFetching
  };
};
