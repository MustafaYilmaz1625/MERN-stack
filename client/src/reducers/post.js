import * as types from "../actions/types";

const initialState = {
  post: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
