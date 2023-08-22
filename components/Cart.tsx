import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Cart = () => {
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-circle p-2 bg-transparent border-none hover:bg-orange-500 hover:text-orange-50 active:bg-orange-300"
      >
        <ShoppingCartIcon />
      </label>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] p-0 menu drop-shadow-2xl dark:bg-gray-700 rounded-xl w-80"
      >
        <div className="border-b-2 border-gray-100 p-4 font-bold dark:text-gray-200">
          Cart
        </div>
        <div className="py-16 min-h-16 font-bold text-gray-500 text-center dark:text-gray-300">
          Your cart is empty.
        </div>
      </div>
    </div>
  );
};
