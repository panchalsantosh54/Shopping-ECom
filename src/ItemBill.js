import { useContext } from "react";
import { AppStateContext } from "./AppProvider";

export default function ItemBill() {
  var {AppChosenItems} =useContext(AppStateContext);

  var SelectedItems = [];
  var sum = 0;

  for (var i = 0; i < AppChosenItems.length; i++) {
    if(AppChosenItems[i].count!==0)
    {
      SelectedItems.push(
        <tr>
          <td>{AppChosenItems[i].title}</td>
          <td>{AppChosenItems[i].count}</td>
          <td>{AppChosenItems[i].price}</td>
          <td>{AppChosenItems[i].price * AppChosenItems[i].count}</td>
        </tr>
      );
    }
    
  }

  function Add() {
    for (var i = 0; i < AppChosenItems.length; i++) {
      sum = sum + AppChosenItems[i].price * AppChosenItems[i].count;

    }
    var finalSum= sum.toFixed(2);
    return finalSum;
  }

  return (
    <div className="MainBill">
      <table>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>TotalPrice</th>
        </tr>
        {SelectedItems}
        <tr>
          <th>GrandTotal</th>
          <td>Rs. {Add()}</td>
         
        </tr>
      </table>
    </div>
  );
}
