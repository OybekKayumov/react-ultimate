// import data from './../../public/data';
import Menu from "./Menu"

export default function Pizza(props) {
  console.log('props: ', props );

  if (props.pizzaObj.soldOut) return null

  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
  )
}