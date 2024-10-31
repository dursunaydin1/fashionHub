import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_free, getCartCount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1="CART" text2="TOTALS" />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartCount()}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_free}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between font-extrabold">
          <p>Total</p>
          <p>
            {currency}
            {getCartCount() === 0 ? 0 : getCartCount() + delivery_free}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
