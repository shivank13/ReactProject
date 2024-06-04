const RestaurantCategory = (props) => {
  return <div className="w-6/12 bg-gray-50 mx-auto my-6 shadow-lg p-4 flex justify-between">
    <span className="font-bold text-lg">{props.category.title}({props.category.itemCards.length})</span>
    <span>🔽</span>
    </div>;
};
export default RestaurantCategory