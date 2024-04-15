import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  fetchMenu= async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=55473&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
    const json = await data.json();
    console.log(json);
  }

  return (
    <div className="menu-container">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Noodles</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
