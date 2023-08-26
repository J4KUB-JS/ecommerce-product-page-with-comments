import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Delete } from "@mui/icons-material";

import { cartItem } from "../src/types";
import productImage from "../src/assets/productPhotos/image-product-1.jpg";

interface CartProps {
  cartItems: cartItem[];
  removeItemHandler: (itemId: number) => void;
}

export const Cart = ({ cartItems, removeItemHandler }: CartProps) => {
  return (
    <div className="dropdown dropdown-hover dropdown-end">
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
        className="dropdown-content z-[1] p-0 menu drop-shadow-2xl dark:bg-gray-700 bg-gray-100 rounded-xl w-96"
      >
        <div className="border-b-2 border-gray-200 dark:border-gray-100 p-4 font-bold dark:text-gray-200">
          Cart
        </div>
        <div className="p-5">
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              return (
                <div className="flex gap-5 justify-between items-center w-full">
                  <img src={productImage} className="h-10 rounded-md" />
                  <div>
                    <div className="text-gray-500 text-lg">{item.productName}</div>
                    <div className="font-bold">
                      Size: {item.size} - Price: ${item.price}
                    </div>
                  </div>
                  <div
                    className="text-gray-500 cursor-pointer"
                    onClick={() => removeItemHandler(item.cartItemId)}
                  >
                    <Delete />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-16 min-h-16 font-bold text-gray-500 text-center dark:text-gray-300">
              Your cart is empty.
            </div>
          )}
          {cartItems.length > 0 && (
            <div className="btn w-full bg-orange-500 text-gray-100 font-bold mt-6 hover:bg-orange-400 hover:text-orange-50 active:bg-orange-300 relative">
              Check out
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
