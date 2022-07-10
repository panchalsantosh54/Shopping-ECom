import "./style2.css";
import CartImage from "./Images/Cart-Image.png";
import { useContext } from "react";
import { AppStateContext } from "./AppProvider";

export default function Cart(param) {
  
  const {TotalCount, setTotalCount}=useContext(AppStateContext);

  return (
    <div className="Cart-div">
      <h2>{TotalCount}</h2>
      <div>
        <img src={CartImage} alt="cart"></img>
      </div>
    </div>
  );
}
