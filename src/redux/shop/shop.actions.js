import shopActoinTypes from "./shop.types";

export const updateCollections = collectionsMap => ({
  type: shopActoinTypes.UPDATE_COLLECTOINS,
  payload: collectionsMap
});
