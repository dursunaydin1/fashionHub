import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext({
  products: [],
  currency: "$",
  delivery_free: 0,
});

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_free = 10;

  const value = {
    products,
    currency,
    delivery_free,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;