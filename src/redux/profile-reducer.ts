import { profileAPI } from "../api/api";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const SET_STATUS = "profile/SET-STATUS";
const DELETE_POST = "profile/DELETE-POST";

type TPost = {
  id: number;
  message: string;
  likeCount: number;
};

let initialState = {
  posts: [
    { id: 1, message: "Hello, how are you?", likeCount: 1 },
    {
      id: 3,
      message: "Hi, it's my firs post on this platform!!!",
      likeCount: 2
    },
    { id: 5, message: "some text 11", likeCount: 2 },
    { id: 8, message: "some text 2", likeCount: 3 },
    { id: 11, message: "some text 3", likeCount: 5 }
  ] as Array<TPost>,
  userProfile: null,
  status: ""
};
type TInitialState = typeof initialState;

export const profileReducer = (
  state: TInitialState = initialState,
  action: any
): TInitialState => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          { id: 5, message: action.postText, likeCount: 10 },
          ...state.posts
        ]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((el, i) => el.id !== action.postId)
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response));
};

export const getProfileStatus = (userId: number) => async (dispatch: any) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateProfileStatus = (status: any) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);
  if (response.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

type TAddPostAction = {
  type: typeof ADD_POST;
  postText: string;
};
type TDeletePostAction = {
  type: typeof DELETE_POST;
  postId: number;
};
type TSetUserProfile = {
  type: typeof SET_USER_PROFILE;
  userProfile: any;
};
type TSetStatus = {
  type: typeof SET_STATUS;
  status: string;
};
export const addPost = (postText: string): TAddPostAction => ({
  type: ADD_POST,
  postText
});
export const deletePost = (postId: number): TDeletePostAction => ({
  type: DELETE_POST,
  postId
});
export const setUserProfile = (userProfile: any): TSetUserProfile => ({
  type: SET_USER_PROFILE,
  userProfile
});
export const setStatus = (status: string): TSetStatus => ({
  type: SET_STATUS,
  status
});
