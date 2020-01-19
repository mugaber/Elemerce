import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsData = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = urlId =>
  createSelector([selectCollections], collections => collections[urlId]);
