// import data from './../../public/data';
import Menu from "./Menu"

export default function Pizza(props) {
  console.log('props: ', props );

  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <p>{props.price}</p>
    </div>
  )
}