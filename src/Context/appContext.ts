import { createContext, useContext } from 'react';
import { AppState } from 'src/Context/appReducer';

export type GlobalContextType = {
  state: AppState;
  dispatch: React.Dispatch<any>;
};

export const GlobalContext = createContext<GlobalContextType>({
  state: {},
  dispatch: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
