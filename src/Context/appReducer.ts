export type AppState = {
  theme?: string;
};

export enum AppContextActionType {
  SET_THEME = 'SET_THEME',
}
type AppAction = { type: AppContextActionType; payload: any };

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppContextActionType.SET_THEME:
      return { ...state, theme: action.payload };

    default:
      return {};
  }
};
