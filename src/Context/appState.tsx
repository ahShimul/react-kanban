import * as React from 'react';
import { GlobalContext } from 'src/Context/appContext';
import { AppContextActionType, appReducer } from 'src/Context/appReducer';

const AppState: React.FC<any> = (props) => {
  const [state, dispatch] = React.useReducer(appReducer, {});
  React.useEffect(() => {
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    dispatch({ type: AppContextActionType.SET_THEME, payload: theme });
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>{props.children}</GlobalContext.Provider>
  );
};
export default AppState;
