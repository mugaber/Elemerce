import shopActoinTypes from "./shop.types";

const INITIAL_STATE = {
  collections: []
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActoinTypes.UPDATE_COLLECTOINS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
