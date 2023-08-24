import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cartItem } from "../src/types";
import productImage from "../src/assets/productPhotos/image-product-1.jpg";
import { Delete } from "@mui/icons-material";
interface CartProps {
  cartItems: cartItem[];
}

export const Cart = ({ cartItems }: CartProps) => {
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-circle p-2 bg-transparent border-none hover:bg-orange-500 hover:text-orange-50 active:bg-orange-300 relative"
      >
        <div className=" absolute top-0 right-0 bg-orange-500 text-gray-100 text-xs px-2 rounded-full">
          {cartItems.length > 0 &&
            cartItems.reduce((count, cartItem) => {
              return count + cartItem.amount;
            }, 0)}
        </div>
        <ShoppingCartIcon />
      </label>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] p-0 menu drop-shadow-2xl dark:bg-gray-700 bg-gray-100 rounded-xl w-80"
      >
        <div className="border-b-2 border-gray-200 dark:border-gray-100 p-4 font-bold dark:text-gray-200">
          Cart
        </div>
        {/* TODO: Improve styling of cart */}
        {/* TODO: Full width on mobile */}
        <div className="">
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              return (
                <div className="flex w-full p-3">
                  <img src={productImage} className="h-10" />
                  <div>
                    <div>{item.productName}</div>
                    <div>
                      {item.price} x {item.amount} <span>{item.price * item.amount}</span>
                    </div>
                  </div>
                  <Delete />
                </div>
              );
            })
          ) : (
            <div className="py-16 min-h-16 font-bold text-gray-500 text-center dark:text-gray-300">
              Your cart is empty.
            </div>
          )}
          {cartItems.length > 0 && <div className="btn w-full m-3">Check out</div>}
        </div>
      </div>
    </div>
  );
};
