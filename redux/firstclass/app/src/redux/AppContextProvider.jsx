import React from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children, store }) => {
  const { dispatch, getState } = store;
  const value = { dispatch, getState };
  const [state, setState] = React.useState(0);
  const forceupdate = () => setState((prev) => prev + 1);

  store.subscribe(forceupdate);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export { AppContextProvider };
