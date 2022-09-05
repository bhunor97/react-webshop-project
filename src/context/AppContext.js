import { createContext } from "react";

const myContext = createContext();
export default myContext;

export function myContextProvider({ children }) {
  return <myContext.Provider value="">{children}</myContext.Provider>;
}
