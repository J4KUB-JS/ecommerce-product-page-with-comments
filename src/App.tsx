import "./App.css";

function App() {
  return (
    <>
      <div className="font-KumbhSans">
        <header>
          <nav>
            <div>{/* logo */}</div>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          {/* cart icon + on hover drop down*/}
          {/* profile */}
        </header>

        <section id="product-page">
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
        <section id="comments">{/* map thro comments */}</section>
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
