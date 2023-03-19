import Banner from "./Banner";
// import Cart from "./Cart";
// import QuestionForm from "./QuestionForm";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import Cart from "./Cart";
import "../Styles/Layout.css";
import { useState } from "react";

function App() {
  const title = "LA MAISON JUNGLE";
  const [cart, updateCart] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Banner>
          <img src={logo} alt="logo" className="lmj-logo" />
          <h1 className="lmj-title">{title}</h1>
        </Banner>
        <div className="lmj-layout-inner">
          <Cart cart={cart} updateCart={updateCart} />
          <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
        <Footer />
        {/* <QuestionForm /> */}
      </header>
    </div>
  );
}

export default App;
