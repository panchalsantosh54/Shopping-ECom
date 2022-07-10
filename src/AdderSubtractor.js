import { useContext, useState } from "react";
import "./style2.css";
import { AppStateContext } from "./AppProvider";

export default function AdderSubtractor(param) {
  
  var {CartPlusHandler,CartMinusHandler,AddSubCountHandler,AddSubCountHandlerBill} = useContext(AppStateContext);
  var AddSubCount = param.item.count;


  function PlusHandler() {
    var temp = AddSubCount;
    temp = temp + 1;
    CartPlusHandler();
    AddSubCountHandler(temp, param.item.id);
    AddSubCountHandlerBill(temp, param.item.id);
  }

  function MinusHandler() {
    var temp = AddSubCount;
    if (temp == 0) {
      return;
    }
    temp--;
    AddSubCountHandler(temp, param.item.id);
    CartMinusHandler();
    AddSubCountHandlerBill(temp, param.item.id);
   
  }

  return (
    <div className="AddSub">
      <button onClick={PlusHandler}>+</button>
      <span> {AddSubCount} </span>
      <button onClick={MinusHandler}>-</button>
    </div>
  );
}
