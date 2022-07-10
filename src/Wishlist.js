import Item from "./Item";
import { useContext } from "react";
import { AppStateContext } from "./AppProvider";

export default function Wishlist() {
  var {DataArray}=useContext(AppStateContext);

  var WishArray = [];

  for (var i = 0; i < DataArray.length; i++) {
    if (DataArray[i].AddTolist === 1) {
      WishArray.push(
        <Item
          SingleItemData={DataArray[i]}
          disableaddbtn={true}
          index={i}
        />
      );
    }
  }

  return (
    <div className="Wishlits-main">
      <h1>Inside wishlist</h1>
      <ul>
        <li>{WishArray}</li>
      </ul>
    </div>
  );
}
