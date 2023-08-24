import { useState } from "react";
import "./App.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { data } from "../constants/data";
import { Logo } from "./assets/logo";
import snickerOne from "./assets/productPhotos/image-product-1.jpg";
import snickerTwo from "./assets/productPhotos/image-product-2.jpg";
import snickerThree from "./assets/productPhotos/image-product-3.jpg";
import snickerFour from "./assets/productPhotos/image-product-4.jpg";
import profilePicture from "./assets/avatars/image-amyrobson.png";
import { cartItem, photos } from "./types";

import { Drawer, Navigation, Cart, ProductCarousel } from "../components";
import { Add, Remove } from "@mui/icons-material";

function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  const [photos, setPhotos] = useState<photos>({
    currentPhoto: { id: 1, src: snickerOne },
    allPhotos: {
      "1": { id: 1, src: snickerOne },
      "2": { id: 2, src: snickerTwo },
      "3": { id: 3, src: snickerThree },
      "4": { id: 4, src: snickerFour },
    },
    photosCount: 4,
  });

  const addItemsToCart = () => {
    setCartItems([
      { productName: "Fall Limited Edition Sneakers", price: 125, amount: count },
    ]);
  };

  const changeCurrentPhoto = (index: number) => {
    switch (true) {
      case index === 0:
        index = photos.photosCount;
        break;
      case index > photos.photosCount:
        index = 1;
        break;
    }
    setPhotos((prevState) => {
      return {
        ...prevState,
        currentPhoto: prevState.allPhotos[index.toString()],
      };
    });
  };

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
            <Cart cartItems={cartItems} />
            <img
              src={profilePicture}
              className="h-10 md:h-12 rounded-full border-orange-500 border-2 cursor-pointer"
            />
          </div>
        </header>

        <section
          id="product-page"
          className="md:grid grid-cols-2 px-10 gap-16 my-16 justify-between items-center"
        >
          {/* Make it full view when onclick on photo */}
          <div id="product-photos" className="w-full relative">
            <ProductCarousel
              products={photos.allPhotos}
              currentProduct={photos.currentPhoto}
              changeCurrentPhoto={changeCurrentPhoto}
              productsCount={photos.photosCount}
            />
          </div>
          <div id="product-details" className="p-5 w-full">
            <div className="uppercase dark:text-orange-400 text-orange-500 text-sm tracking-widest">
              Sneaker Company
            </div>
            <div className="w-96 my-5 text-4xl font-semibold">
              Fall Limited Edition Sneakers
            </div>
            <p className="w-[450px] text-xl dark:text-gray-400">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex justify-around items-center dark:bg-gray-700 bg-gray-100 rounded-xl">
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
                <div className="dark:text-gray-50 text-xl text-gray-800">{count}</div>
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
              <div
                className="p-5 flex gap-5 dark:bg-orange-600 bg-orange-500 text-gray-100 rounded-xl hover:bg-orange-200 hover:text-orange-500 active:bg-orange-300 col-span-2 justify-center items-center"
                onClick={addItemsToCart}
              >
                <ShoppingCartIcon />
                Add to cart
              </div>
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
