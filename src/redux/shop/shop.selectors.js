import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// to extract the data from the collections object

export const selectCollectionsData = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = urlId =>
  createSelector([selectCollections], collections => collections[urlId]);
