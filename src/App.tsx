import { useState } from "react";
import "./App.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { sneakerReviews } from "../constants/data";
import { Logo } from "./assets/logo";
import snickerOne from "./assets/productPhotos/image-product-1.jpg";
import snickerTwo from "./assets/productPhotos/image-product-2.jpg";
import snickerThree from "./assets/productPhotos/image-product-3.jpg";
import snickerFour from "./assets/productPhotos/image-product-4.jpg";
import snickerFive from "./assets/productPhotos/image-product-5.png";
import snickerSix from "./assets/productPhotos/image-product-6.png";
import snickerSeven from "./assets/productPhotos/image-product-7.png";
import profilePicture from "./assets/avatars/image-amyrobson.png";
import { cartItem, photos } from "./types";

import { Drawer, Navigation, Cart, ProductCarousel } from "../components";
import { Star } from "@mui/icons-material";

//Modify Mockups to include some ideas from mockups
//TODO (Optional): add different sections

function App() {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  const [activeTab, setActiveTab] = useState<"about" | "opinions" | "similar-products">(
    "about"
  );
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
    setCartItems((prevState) => {
      const cartItem: cartItem = {
        cartItemId: prevState.length,
        productName: "Fall Limited Edition Sneakers",
        price: 125,
        size: selectedSize ? selectedSize : 0,
        amount: 1,
      };
      return [...prevState, cartItem];
    });
  };

  const removeItemsFromCart = (itemId: number) => {
    setCartItems((prevState) => {
      return prevState.filter((item) => item.cartItemId !== itemId);
    });
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
            <Cart cartItems={cartItems} removeItemHandler={removeItemsFromCart} />
            <img
              src={profilePicture}
              className="h-10 md:h-12 rounded-full border-orange-500 border-2 cursor-pointer"
            />
          </div>
        </header>

        <section
          id="product-page"
          className="md:grid grid-cols-2 md:px-10 gap-16 md:my-16 my-8 justify-between items-center"
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

            <div>
              <div className="mb-5">
                <div tabIndex={0} className="font-bold text-lg mb-2">
                  Sizes:
                </div>
                <div className="flex flex-wrap gap-4">
                  {[...Array(46).keys()].slice(38, 46).map((size) => (
                    <div
                      className={`btn text-gray-900 hover:text-gray-900 bg-gray-100 hover:bg-orange-200 hover:border-orange-500 ${
                        size === selectedSize
                          ? " btn-outline border-orange-500 bg-orange-200 "
                          : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`py-4 flex gap-5 dark:bg-orange-600 bg-orange-500 text-gray-100 rounded-xl hover:bg-orange-400 active:bg-orange-300 col-span-2 justify-center items-center ${
                  selectedSize === null
                    ? " btn-disabled dark:bg-orange-400 bg-orange-300"
                    : ""
                }`}
                onClick={addItemsToCart}
              >
                <ShoppingCartIcon />
                Add to cart
              </div>
            </div>
          </div>
        </section>
        <section id="about-and-comments" className="w-full px-5">
          <div className="tabs relative">
            <div className="absolute h-[2px] w-full bg-gray-300 bottom-0"></div>
            <a
              className={`tab tab-lg tab-bordered z-10 ${
                activeTab === "about"
                  ? "border-orange-500 text-orange-500"
                  : "border-gray-300 hover:border-gray-900 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("about")}
            >
              Details
            </a>
            <a
              className={`tab tab-lg tab-bordered z-10 ${
                activeTab === "opinions"
                  ? "border-orange-500 text-orange-500"
                  : "border-gray-300 hover:border-gray-900 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("opinions")}
            >
              Opinions
            </a>
            <a
              className={`tab tab-lg tab-bordered z-10 ${
                activeTab === "similar-products"
                  ? "border-orange-500 text-orange-500"
                  : "border-gray-300 hover:border-gray-900 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("similar-products")}
            >
              Similar Products
            </a>
          </div>
          {activeTab === "about" && (
            <div className="p-10">
              <div className="mb-5 text-4xl font-semibold">
                Fall Limited Edition Sneakers
              </div>
              <div className="grid md:grid-cols-2 gap-10 grid-cols-1">
                <div>
                  <div className="font-bold text-lg mb-5">About</div>
                  <p className="max-w-[50ch] text-gray-500 dark:text-gray-400">
                    Introducing the Fall Limited Edition Sneakers – a harmonious blend of
                    style and functionality for the fashion-conscious. Designed as the
                    ultimate companions for your casual fall outings, these low-profile
                    wonders redefine your footwear experience with a meticulously crafted
                    rubber outer sole that's a testament to durability, conquering diverse
                    weather conditions with ease. Beneath the surface, they prioritize
                    comfort, wrapping your feet in plush embrace while allowing
                    breathability. Whether wandering rain-kissed pavements or savoring
                    autumn's crispness, these sneakers offer unmatched resilience. Not
                    just shoes, but a fashion statement – they effortlessly merge
                    practicality and elegance, a coveted addition to your collection. Step
                    into sophistication and durability – step into these limited edition
                    sneakers and conquer fall with every stride.
                  </p>
                </div>
                <div className="">
                  <div className="font-bold text-lg mb-5">Features</div>
                  <p className="max-w-[50ch] text-gray-500 dark:text-gray-400">
                    <b> - Durable Rubber Outer Sole:</b> These sneakers are equipped with
                    a rugged rubber outer sole that is built to withstand various weather
                    conditions, providing exceptional durability and traction on different
                    surfaces.
                  </p>
                  <br />
                  <p className="max-w-[50ch] text-gray-500 dark:text-gray-400">
                    <b> - Low-Profile Design:</b> The sneakers feature a sleek low-profile
                    design that effortlessly blends style and comfort, making them
                    versatile for a wide range of outfits and occasions.
                  </p>
                  <br />
                  <p className="max-w-[50ch] text-gray-500 dark:text-gray-400">
                    <b> - Weather-Resistant Construction:</b> Designed to tackle fall
                    weather challenges, these sneakers are crafted to resist moisture,
                    ensuring your feet stay dry and comfortable even in rainy conditions.
                  </p>
                  <br />
                  <p className="max-w-[50ch] text-gray-500 dark:text-gray-400">
                    <b> - Lightweight Build:</b> Despite their durability, the sneakers
                    maintain a lightweight build that doesn't weigh you down, ensuring
                    easy and comfortable movement throughout the day.
                  </p>
                  <br />

                  <br />
                </div>
              </div>
            </div>
          )}
          {activeTab === "opinions" && (
            <div className="p-10 grid md:grid-cols-2 grid-cols-1 gap-10">
              {sneakerReviews.map((item, index) => {
                return (
                  <div key={index} className="bg-gray-100 rounded-xl px-6 py-4 shadow-md">
                    <div className="font-bold text-lg mb-2">
                      {item.name}
                      <span className="ml-5">
                        <span className={`${item.rating > 1 ? "text-orange-400" : ""}`}>
                          <Star />
                        </span>
                        <span className={`${item.rating > 2 ? "text-orange-400" : ""}`}>
                          <Star />
                        </span>
                        <span className={`${item.rating > 3 ? "text-orange-400" : ""}`}>
                          <Star />
                        </span>
                        <span className={`${item.rating > 4 ? "text-orange-400" : ""}`}>
                          <Star />
                        </span>
                        <span className={`${item.rating > 5 ? "text-orange-400" : ""}`}>
                          <Star />
                        </span>
                      </span>
                    </div>
                    <div>{item.comment}</div>
                  </div>
                );
              })}
            </div>
          )}
          {activeTab === "similar-products" && (
            <div className="p-10 flex flex-wrap gap-6">
              <div className="cursor-pointer">
                <div className="w-64 rounded-xl overflow-hidden h-56">
                  <img src={snickerFive} />
                </div>
                <div className="font-bold text-lg w-[15ch] mt-2 mb-1">
                  Eclipse Shadowstride
                </div>
                <div className="text-sm">$105.00</div>
              </div>
              <div className="cursor-pointer">
                <div className="w-64 rounded-xl overflow-hidden h-56">
                  <img src={snickerSix} />
                </div>
                <div className="font-bold text-lg w-[15ch] mt-2 mb-1">
                  Azure Horizon Walkers
                </div>
                <span className="text-sm line-through mr-2">$220.00</span>
                <span className="text-sm ">$190.00</span>
              </div>
              <div className="cursor-pointer">
                <div className="w-64 rounded-xl overflow-hidden h-56">
                  <img src={snickerSeven} />
                </div>
                <div className="font-bold text-lg w-[15ch] mt-2 mb-1">
                  Radiant Nova Kicks
                </div>
                <div className="text-sm">$155.00</div>
              </div>
            </div>
          )}
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
