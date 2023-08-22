import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";

export const Drawer = () => {
  return (
    <>
      <div className="drawer md:hidden w-auto">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="md:hidden cursor-pointer active:text-orange-200"
          >
            <MenuIcon fontSize="large" />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu px-6 py-5 w-80 h-full text-left text-2xl font-bold space-y-5 bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <label
              className="mb-5 cursor-pointer active:text-orange-200 w-8"
              htmlFor="my-drawer"
            >
              <Close fontSize="large" />
            </label>
            <li className="cursor-pointer active:underline active:text-orange-500 underline-offset-4">
              Collections
            </li>
            <li className="cursor-pointer active:underline active:text-orange-500 underline-offset-4">
              Men
            </li>
            <li className="cursor-pointer active:underline active:text-orange-500 underline-offset-4">
              Women
            </li>
            <li className="cursor-pointer active:underline active:text-orange-500 underline-offset-4">
              About
            </li>
            <li className="cursor-pointer active:underline active:text-orange-500 underline-offset-4">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
