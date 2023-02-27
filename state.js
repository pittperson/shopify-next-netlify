import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [cartId, setCartId] = useState(null);
  let [cartCount, setCartCount] = useState(0);

  return (
    <AppContext.Provider value={{ cartId, setCartId, cartCount, setCartCount }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
