export interface IInitialState {
  favoriteContactList: TContact[];
}

export interface IAction {
  favoriteContactList: TFavoriteContactListAction;
}

export type TContact = {
  id: number;
  created_at: string;
  first_name: string;
  last_name: string;
  phones: TNumber[];
};

export type TNumber = {
  number: string;
};

// Reducer Types
export enum FavoriteContactActionType {
  SET = "SET_FAVORITE_CONTACT",
  ADD = "ADD_FAVORITE_CONTACT",
  REMOVE = "REMOVE_FAVORITE_CONTACT",
}

export type TFavoriteContactListAction =
  | { type: FavoriteContactActionType.SET; payload: TContact[] }
  | { type: FavoriteContactActionType.ADD; payload: TContact }
  | { type: FavoriteContactActionType.REMOVE; payload: TContact };
