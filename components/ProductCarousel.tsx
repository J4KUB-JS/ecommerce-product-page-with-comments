import { photo, photos } from "../src/types";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

interface ProductCarouselProps {
  products: photos["allPhotos"];
  currentProduct: photo;
  changeCurrentPhoto: (index: number) => void;
  productsCount: number;
}

export const ProductCarousel = ({
  products,
  currentProduct,
  changeCurrentPhoto,
  productsCount,
}: ProductCarouselProps) => {
  const getProductNumberToSlide = (index: number) => {
    switch (true) {
      case index === 0:
        index = productsCount;
        break;
      case index > productsCount:
        index = 1;
        break;
    }
    return index;
  };
  // TODO: Refactor not to use href and id
  return (
    <>
      <div className="carousel w-[500px] h-auto md:rounded-2xl relative">
        {Object.values(products).map((product) => {
          return (
            <div id={`item${product.id}`} className="carousel-item relative w-full">
              <img src={product.src} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 md:hidden">
                <a
                  href={`#item${getProductNumberToSlide(product.id - 1)}`}
                  className="btn border-none btn-circle flex justify-center items-center"
                  onClick={() => changeCurrentPhoto(Number(currentProduct.id) - 1)}
                >
                  <KeyboardArrowLeft fontSize="large" />
                </a>
                <a
                  href={`#item${getProductNumberToSlide(product.id + 1)}`}
                  className="btn border-none btn-circle flex justify-center items-center"
                  onClick={() => changeCurrentPhoto(Number(currentProduct.id) + 1)}
                >
                  <KeyboardArrowRight fontSize="large" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[500px] md:grid grid-cols-4 mt-6 hidden gap-5">
        {Object.values(products).map((product) => {
          return (
            <a
              href={`#item${product.id}`}
              className={`h-auto w-auto overflow-hidden rounded-xl bg-gray-200 cursor-pointer ${
                currentProduct.id === product.id ? "border-2 border-orange-500" : ""
              }`}
              onClick={() => changeCurrentPhoto(product.id)}
            >
              <img
                src={product.src}
                className={
                  product.id === currentProduct.id ? "opacity-50" : "hover:opacity-50 "
                }
              />
            </a>
          );
        })}
      </div>
    </>
  );
};
