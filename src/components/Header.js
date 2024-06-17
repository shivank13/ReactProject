import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {

  const onlineStatus = useOnlineStatus();
  const cartItems= useSelector((store)=> store.cart.items)
  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="flex items-center" >
        <ul className="flex">
          <li className="px-4">
            Online Status : {onlineStatus?"✅":"🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
