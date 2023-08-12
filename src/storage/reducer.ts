import {
  FavoriteContactActionType,
  TContact,
  TFavoriteContactListAction,
} from "./types";

export const favoriteContactReducer = (
  state: TContact[],
  action: TFavoriteContactListAction
) => {
  switch (action.type) {
    case FavoriteContactActionType.ADD:
      return [...state, action.payload];
    case FavoriteContactActionType.REMOVE:
      return [
        ...state.filter(
          (favoriteContact) => favoriteContact.id !== action.payload.id
        ),
      ];
    case FavoriteContactActionType.SET:
      return [...action.payload];
    default:
      return state;
  }
};
