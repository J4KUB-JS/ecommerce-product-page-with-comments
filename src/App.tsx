import "./App.css";

import { data } from "../constants/data";

import { Logo } from "./assets/logo";
import snickerOne from "./assets/productPhotos/image-product-1.jpg";
import profilePicture from "./assets/avatars/image-amyrobson.png";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Drawer, Navigation, Cart } from "../components";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="font-KumbhSans max-w-screen-xl mx-auto text-left dark:text-gray-200">
        <header className="flex w-full justify-between items-center md:px-10 px-5 py-5 md:border-b-2 border-gray-100">
          <nav className="flex items-center md:gap-10 gap-5">
            <Drawer />
            <Logo />
            <Navigation />
          </nav>
          <div className="flex items-center gap-6">
            {/* hover drop down */}
            <Cart />
            <img
              src={profilePicture}
              className="h-12 rounded-full border-orange-500 border-2 cursor-pointer"
            />
          </div>
        </header>

        <section id="product-page">
          <div id="product-photos" className="h-96 w-full overflow-hidden">
            <img src={snickerOne} />
          </div>
          <div id="product-details" className="p-5">
            <div className=" uppercase dark:text-orange-400 text-orange-500 text-sm tracking-widest">
              Sneaker Company
            </div>
            <div className="my-5 text-4xl font-semibold">
              Fall Limited Edition Sneakers
            </div>
            <p className="text-xl dark:text-gray-400">
              These low-profile sneakers are your perfect casual wear companion. Featuring
              a durable rubber outer sole, they’ll withstand everything the weather can
              offer.
            </p>
            <div className="my-8">
              <div className="flex gap-3 items-start">
                <div className="text-3xl font-bold">$125.00</div>
                <div className="bg-orange-200 text-orange-600 font-bold rounded-lg px-2">
                  50%
                </div>
              </div>
              <div className="dark:text-gray-400 line-through mt-1 text-lg">$250.00</div>
            </div>

            {/* counter do add number of articles */}
            <div className="flex justify-between items-center bg-gray-700 rounded-xl p-1">
              <div
                className="btn p-2 bg-transparent border-none hover:bg-orange-200 hover:text-orange-500 active:bg-orange-300 rounded-xl"
                onClick={() =>
                  setCount((prevState) => {
                    return prevState + 1;
                  })
                }
              >
                <Add fontSize="large" />
              </div>
              <div className="text-gray-50 text-xl ">{count}</div>
              <div
                className="btn p-2 bg-transparent border-none hover:bg-orange-200 hover:text-orange-500 active:bg-orange-300 rounded-xl"
                onClick={() =>
                  setCount((prevState) => {
                    return prevState - 1 < 0 ? prevState : prevState - 1;
                  })
                }
              >
                <Remove fontSize="large" />
              </div>
            </div>
            <div className="btn flex gap-5 dark:bg-orange-600 text-gray-100 rounded-xl mt-2 hover:bg-orange-200 hover:text-orange-500 active:bg-orange-300 p-1">
              <ShoppingCartIcon />
              Add to cart
            </div>
          </div>
        </section>
        <section id="comments">
          {data.comments.map((item, index) => {
            return <div key={index}>{item.content}</div>;
          })}
        </section>
      </div>
      <footer className="font-KumbhSans bg-gray-800 text-gray-50 dark:bg-gray-200 dark:text-gray-800 py-1">
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
