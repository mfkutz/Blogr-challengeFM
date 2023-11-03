// AppContext.js
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);
  const [product, setProduct] = useState(false);
  const [company, setCompany] = useState(false);
  const [connect, setConnect] = useState(false);

  const handleMenuMobileToggle = () => {
    setMenuMobileOpen(!menuMobileOpen);
  };

  return (
    <AppContext.Provider value={{ menuMobileOpen, handleMenuMobileToggle }}>
      {children}
    </AppContext.Provider>
  );
}
