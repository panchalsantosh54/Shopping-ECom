import "./style2.css";
import AdderSubtractor from "./AdderSubtractor.js";
import { useContext } from "react";
import { AppStateContext } from "./AppProvider";
import { Link } from "react-router-dom";
import ItemDetailPage from "./ItemDetailPage";

export default function Item(param) {

  var {AddToWishlist} = useContext(AppStateContext);

  function WishlistHandler() {
    AddToWishlist(param.SingleItemData.id);
    console.log("Inside wishlist handler");
  }

  function RenderMoreIfNeeded() {
    if (!("disableaddbtn" in param) || param.disableaddbtn == false) {
      return (
        <div>
          <AdderSubtractor
            item={param.SingleItemData}
            index={param.index}
          />
          <br />
          <button id="WishlistBtn" onClick={WishlistHandler}>WishList</button>
        </div>
      );
    }
    else if (!("disableaddbtn" in param) || param.disableaddbtn == true) {
      return (
        <div>
          <AdderSubtractor
            item={param.SingleItemData}
            index={param.index}
          />
          <br />
        </div>
      );
    }
  }

  return (
    
    <div className="Item">
      <Link to={`/ItemDetailPage/${param.SingleItemData.id}`} >
      <div className="item-div1">
        <img src={param.SingleItemData.image} alt="book"></img>
      </div>
      <div className="item-div2">
        <h3>{param.SingleItemData.title}</h3>
      </div>
      <div className="item-div3">
        <h3>Rs.{param.SingleItemData.price}</h3>
      </div>
      </Link>
      {RenderMoreIfNeeded()}
    </div>
   
  );
}
