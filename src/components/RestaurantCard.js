import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, costForTwo, avgRating, sla } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[170px] rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo rounded-lg py-2 text-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
