import { useContext } from "react";
import { AppStateContext } from "./AppProvider";
import { FilterStateContext } from "./FilterProvider";

export default function Sidebar(){

    const {PriceRangeHandler,LowtoHighHandler,HightoLowHandler,HighRateHandler,
        MidRateHandler,LowRateHandler,CategoryHandler,ClearBtnHandler,FilterState}=useContext(FilterStateContext);

    return(
        <form className="main-Sidebar flex-container">
          
            <div className="Filter-1 Horizontal-wrapper flex-col">
                <div className="Filter-header">
                     <p>Filter</p>
                    <p><button onClick={ClearBtnHandler}>Clear All</button></p>
                 </div>
                <div className="PriceSlider-container ">
                    <p>Price</p>
                    <p>
                        <input type="range" min="1" max="1000"  step="1" value={FilterState.highestValue} className="Price-slider" onChange={(event)=>{PriceRangeHandler(event.target.value)}}></input>
                        <label for="Price-slider">PriceRange</label>
                    </p>
                </div>
            </div>
            <div className="Horizontal-wrapper flex-col">
                <div className="Filter-sort">
                    <p>Sort By </p>
                    <p>Price</p>
                </div>
                <div>
                    <ul className="PriceList flex-col">
                        <li className="flex-row">
                            <input type="radio" name="price" checked={FilterState.sortway=='lowtohigh' ? true : false} onChange={LowtoHighHandler}></input>low to high
                        </li>
                        <li className="flex-row">
                            <input type="radio" name="price"  checked={FilterState.sortway=='hightolow' ? true : false} onChange={HightoLowHandler}></input>high to low
                        </li>
                    </ul>
                </div>

            </div>
            <div className="Horizontal-wrapper flex-col">
                <div className=" Filter-sort ">
                    <p>Sort By </p>
                    <p>Ratings</p>
                </div>
                <div>
                    <ul className="PriceList flex-col">
                        <li className="flex-row">
                            <input type="radio" name="rates" checked={FilterState.rate=='high' ? true : false} onChange={HighRateHandler}></input>4* and above
                        </li>
                        <li className="flex-row">
                            <input type="radio" name="rates" checked={FilterState.rate=='mid' ? true : false} onChange={MidRateHandler}></input>3* to 4*
                        </li>
                        <li className="flex-row">
                            <input type="radio" name="rates" checked={FilterState.rate=='low' ? true : false} onChange={LowRateHandler}></input>3* and below
                        </li>
                    </ul>
                </div>

            </div>
            <div className="Horizontal-wrapper flex-col">
                <div className=" Filter-sort ">
                    <p>Sort By </p>
                    <p>Category</p>
                </div>
                <div>
                    <form>
                    <ul className="PriceList flex-col">
                        <li className="flex-row">
                            <input type="checkbox" name='Category' checked={FilterState.categoryValue.includes("men's clothing") ? true : false} value="men's clothing" onChange={(e)=>{CategoryHandler(e)}}></input> Men's clothing
                        </li>
                        <li className="flex-row">
                            <input type="checkbox" name='Category' checked={FilterState.categoryValue.includes("jewelery") ? true : false} value="jewelery" onChange={(e)=>{CategoryHandler(e)}}></input> Jewelery
                        </li>
                        <li className="flex-row">
                            <input type="checkbox" name='Category' checked={FilterState.categoryValue.includes("electronics") ? true : false} value="electronics" onChange={(e)=>{CategoryHandler(e)}}></input> Electronics
                        </li>
                        <li className="flex-row">
                            <input type="checkbox" name='Category' checked={FilterState.categoryValue.includes("women's clothing") ? true : false} value="women's clothing" onChange={(e)=>{CategoryHandler(e)}}></input> Women's clothing
                        </li>
                    </ul>
                    </form>
                </div>
            </div>
        </form>
    );
}