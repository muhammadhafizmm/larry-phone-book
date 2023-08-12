import {
  Dispatch,
  ReactNode,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { TFavoriteContactListAction, IInitialState, IAction } from "./types";
import { favoriteContactReducer } from "./reducer";

const initialState: IInitialState = {
  favoriteContactList: [],
};

const AppContext = createContext<{
  state: IInitialState;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => {},
});

const rootReducer = (
  { favoriteContactList }: IInitialState,
  action: TFavoriteContactListAction
) => ({
  favoriteContactList: favoriteContactReducer(favoriteContactList, action),
});

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState, () => {
    if (typeof window === "undefined") return initialState;
    const localData = Object.keys(initialState).reduce((acc, key) => {
      const data = localStorage.getItem(key);
      return {
        ...acc,
        [key]: data ? JSON.parse(data) : {},
      };
    }, {} as typeof initialState);
    return localData as IInitialState;
  });

  useEffect(() => {
    Object.entries(state).forEach((item) => {
      const [key, value] = item;
      localStorage.setItem(key, JSON.stringify(value));
    });
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
