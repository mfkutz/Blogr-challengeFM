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
  const [productMobile, setProductMobile] = useState(false);
  const [companyMobile, setCompanyMobile] = useState(false);
  const [connectMobile, setConnectMobile] = useState(false);

  console.log("log company", companyMobile);

  const handleMenuMobileToggle = () => {
    setMenuMobileOpen(!menuMobileOpen);
  };
  function handleMenu1() {
    setProduct(true);
    setCompany(false);
    setConnect(false);
  }
  function handleMenu2() {
    setCompany(true);
    setProduct(false);
    setConnect(false);
  }
  function handleMenu3() {
    setConnect(true);
    setCompany(false);
    setProduct(false);
  }
  function closeMenu() {
    setProduct(false);
    setCompany(false);
    setConnect(false);
  }

  function productMobileMenu() {
    setProductMobile(!productMobile);
  }
  function companyMobileMenu() {
    setCompanyMobile(!companyMobile);
  }
  function connectMobileMenu() {
    setConnectMobile(!connectMobile);
  }
  return (
    <AppContext.Provider
      value={{
        menuMobileOpen,
        product,
        company,
        connect,
        productMobile,
        companyMobile,
        connectMobile,
        handleMenuMobileToggle,
        handleMenu1,
        handleMenu2,
        handleMenu3,
        closeMenu,
        productMobileMenu,
        companyMobileMenu,
        connectMobileMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
