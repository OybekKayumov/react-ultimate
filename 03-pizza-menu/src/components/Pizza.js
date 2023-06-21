// import data from './../../public/data';
import Menu from "./Menu"

export default function Pizza(props) {
  console.log('props: ', props );

  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  )
}