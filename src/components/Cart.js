import { useState } from "react";
import "../Styles/Cart.css";
function Cart({ cart, updateCart }) {
  const monsteraPrice = 8;
  const [isOpen, setIsOpen] = useState(false);

  // const ivyPrice = 10;
  // const flowerPrice = 15;
  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <h2>Panier</h2>
      <div>
        <ul>
          <li>Monstera price : {monsteraPrice} $</li>
        </ul>
      </div>
      <h3>Total : {monsteraPrice * cart}€</h3>
      <button onClick={() => updateCart(0)}>Vider le panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed ">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le pannier
      </button>
    </div>
  );
}

export default Cart;
