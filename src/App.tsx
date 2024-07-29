import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <img
          className="product-image"
          src="images/image-product-mobile.jpg"
          alt="Perfume Bottle"
        />
        <div className="text-content">
          <p className="product-type">PERFUME</p>
          <h1 className="product-name">Gabrielle Essence Eau De Parfum</h1>
          <p className="product-description">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="pricing-info">
            <p>
              <span className="price">$149.99</span>
              <span className="old-price">$169.99</span>
            </p>
          </div>
          <button className="purchase-button">
            <img src="images/icon-cart.svg" className="cart-icon" />
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
