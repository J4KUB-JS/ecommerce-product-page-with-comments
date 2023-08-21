import "./App.css";

import { data } from "../constants/data";

import logo from "./assets/logo.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import profilePicture from "./assets/avatars/image-amyrobson.png";

import { Drawer, Navigation } from "../components";

function App() {
  return (
    <>
      <div className="font-KumbhSans max-w-screen-xl mx-auto text-left">
        <header className="flex w-full justify-between items-center md:px-10 px-5 py-5 md:border-b-2 border-gray-100">
          <nav className="flex items-center md:gap-10 gap-5">
            <Drawer />
            <img src={logo} />
            <Navigation />
          </nav>
          <div className="flex items-center gap-6">
            {/* hover drop down */}
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-circle p-2 bg-transparent border-none hover:bg-orange-500 hover:text-orange-50 active:bg-orange-300"
              >
                <ShoppingCartIcon />
              </label>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] p-0 menu drop-shadow-2xl bg-base-100 rounded-xl w-80"
              >
                <div className="border-b-2 border-gray-100 p-4 font-bold ">Cart</div>
                <div className="py-16 min-h-16 font-bold text-gray-500 text-center">
                  Your cart is empty.
                </div>
              </div>
            </div>
            <img
              src={profilePicture}
              className="h-12 rounded-full border-orange-500 border-2 cursor-pointer"
            />
          </div>
        </header>

        <section id="product-page" className="px-5">
          <div id="product-photos"></div>
          <div id="product-details">
            <div>Sneaker Company</div>
            <div> Fall Limited Edition Sneakers</div>
            <p>
              These low-profile sneakers are your perfect casual wear companion. Featuring
              a durable rubber outer sole, they’ll withstand everything the weather can
              offer.
            </p>
            <div> $125.00</div>
            <div>50%</div>
            <div> $250.00</div>
            {/* counter do add number of articles */}
            <div>0</div>
            <div> Add to cart</div>
          </div>
        </section>
        <section id="comments">
          {data.comments.map((item, index) => {
            return <div key={index}>{item.content}</div>;
          })}
        </section>
      </div>
      <footer className="font-KumbhSans bg-gray-800 text-gray-50 py-1">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6"
          target="_blank"
        >
          <u>Frontend Mentor</u>
        </a>
        . Coded by{" "}
        <a href="https://github.com/J4KUB-JS">
          <u>Jakub Spirydon</u>
        </a>
        .
      </footer>
    </>
  );
}

export default App;
