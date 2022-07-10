import {
    createContext,
    useState
} from "react";


export const AppStateContext = createContext();

export const AppProvider = (props) => {
    var [DataArray, setDataArray] = useState([]);
    var [TotalCount, setTotalCount] = useState(0);
    var [AppChosenItems, setAppChosenItems] = useState([]);
    var [WishlistArray, setWishlistArray] = useState([]);


    function AddSubCountHandler(temp, id) {
        let TempArray2 = JSON.parse(JSON.stringify(DataArray));
        for(var i=0;i<TempArray2.length;i++)
        {
            if(TempArray2[i].id==id)
            {
                TempArray2[i].count= temp;
                // WishlistArray[i].count= temp;
            }

        }
        setDataArray(TempArray2);
        return;
    }

    function CartPlusHandler() {
        var temp = TotalCount;
        temp = temp + 1;
        setTotalCount((prevcount) => temp);
    }

    function CartMinusHandler() {
        setTotalCount((prevTotalcount) => prevTotalcount - 1);
    }

    function AddSubCountHandlerBill(countValue, id) {
        console.log("App got singal to assign value" + countValue + " to index" + id);
        let TempArray = JSON.parse(JSON.stringify(AppChosenItems));
        for(var i=0;i<TempArray.length;i++)
        {
            if(TempArray[i].id==id)
            {
                TempArray[i].count = countValue;
              
            }
        }
        setAppChosenItems(TempArray);
        return;
    }

    function AddToWishlist(id) {
        let tempWishArray = DataArray;
        for(var i=0;i<tempWishArray.length;i++)
        {
            if(tempWishArray[i].id==id)
            {
                tempWishArray[i].AddTolist = 1;
            }
        }
        setDataArray(tempWishArray);
        console.log("Inside Wishlist Array" + JSON.stringify(DataArray));
    }


    return ( 
        <AppStateContext.Provider value = {{
            DataArray, setDataArray, TotalCount, setTotalCount,
                AppChosenItems, setAppChosenItems, WishlistArray, setWishlistArray, 
                AddSubCountHandler, CartPlusHandler, CartMinusHandler, AddSubCountHandlerBill, AddToWishlist
            }
        } 
        > 
        {props.children}  
        </AppStateContext.Provider>

    );
}