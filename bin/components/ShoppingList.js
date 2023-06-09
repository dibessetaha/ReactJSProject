import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../Styles/ShoppingList.css";

function ShoppingList({ cart, updateCart }) {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <div key={id}>
            <PlantItem cover={cover} name={name} water={water} light={light} />
            <button
              onClick={() =>
                name === "monstera" ? updateCart(cart + 1) : null
              }
            >
              Ajouter
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
