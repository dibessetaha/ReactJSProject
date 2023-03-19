import { useState } from "react";
import "../Styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");
  //   const isEnter = inputValue.includes("k");
  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      );
    }
  }
  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleBlur}
          placeholder="Tapez votre email"
        />
      </div>
    </footer>
  );
}

export default Footer;
