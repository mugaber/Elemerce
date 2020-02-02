import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
// the bug of the user logging in but the signout not appearing
// was only becasue of the capital letter of CurrentUser
// while it sould be currentUser
