import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

import { CategoryType } from "../types";

interface State {
  category: CategoryType;
}

const initialState: State = {
  category: "전체",
};

type Action = { type: "SET_CATEGORY"; category: CategoryType };

const UIContext = createContext<State | any>(undefined);

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_CATEGORY": {
      return {
        category: action.category,
      };
    }
    default:
      throw new Error("unhandled action type");
  }
}

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const setCategory = useCallback(
    (category: CategoryType) => dispatch({ type: "SET_CATEGORY", category }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      setCategory,
    }),
    [state, setCategory]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error("useUI must be used within a UIProvider");
  return context;
};
