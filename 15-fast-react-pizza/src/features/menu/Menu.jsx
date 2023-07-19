import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  return <h1>Menu</h1>;
}

// create a loader fn --> fetch data and return it
function loader() {
  const menu = await getMenu();
  return menu;
}


export default Menu;
