import {
    createContext,
    useState
} from "react";
import { useContext } from "react";
import { AppStateContext } from "./AppProvider";


export const FilterStateContext = createContext();

export const FilterProvider = (props) =>
{

    var {DataArray,PriceHandler} = useContext(AppStateContext);
    var ShowingDataArray =[];
    var [PriceVal, setPriceVal] = useState();
    var [FilterState, setfilterState] =useState({highestValue:0 ,sortway: '',rate: '',categoryValue:[]});
    //above usestate variable is used to store the user inputs & according to the change it will update. By checking these inputs further functions will work.
    
    function ClearBtnHandler(){

      setfilterState((prevstate) => {return {...prevstate, priceFilter:"", highestValue:"" ,sortfilter:"",
       sortway: '',ratefilter:"", rate: '',categoryValue: [] }} );
    
    }
   
    function PriceRangeHandler(value) {

      setfilterState((prevstate) => {return {...prevstate, priceFilter:true, highestValue: value }} );
      
  
    }

    function LowtoHighHandler(){

      setfilterState((prevstate) => {return {...prevstate, sortfilter:true, sortway: 'lowtohigh' }} );
       
    }
      
    function HightoLowHandler(){

      setfilterState((prevstate) => {return {...prevstate, sortfilter:true, sortway: 'hightolow' }} );
     
    }

    function HighRateHandler(){

      setfilterState((prevstate) => {return {...prevstate, ratefilter:true, rate: 'high' }} );

    }

    function MidRateHandler(){

      setfilterState((prevstate) => {return {...prevstate, ratefilter:true, rate: 'mid' }} );

    }

    function LowRateHandler(){

      setfilterState((prevstate) => {return {...prevstate, ratefilter:true, rate: 'low' }} );

    }

    function CategoryHandler(event){

      if(event.target.checked)
      {
        setfilterState((prevstate) => {
          return {...prevstate, sortbycategory:true, categoryValue: [...prevstate.categoryValue, event.target.value] }} 
          );
      }
     
      else
      {
        setfilterState((prevstate) => {
          return {...prevstate, sortbycategory:true, categoryValue: prevstate.categoryValue.filter((item) => item !== event.target.value) }} 
          );
      }
    
    }  
      
     
  

    function getDataAfterPriceFilter(datalist)
    {
      if('priceFilter' in FilterState &&  FilterState.priceFilter == true)
      {

        let temp = FilterState.highestValue;
        var indents = [];
              for (var i = 0; i < datalist.length; i++) 
              {
                if (datalist[i].price <= temp) {
                  indents.push(
                    datalist[i]
                  );
                }
              }
              return indents;
      }
       
      else
      {
        return datalist;
      }
       
    }

    function getDataAfterSortPriceFilter(datalist)
    {
       if('sortfilter' in FilterState && FilterState.sortfilter == true && FilterState.sortway == 'lowtohigh')
      {
        
          var indents = [...datalist];
          indents.sort((first,second) => first.price - second.price);
          return indents;
      }
      else if('sortfilter' in FilterState && FilterState.sortfilter == true && FilterState.sortway == 'hightolow')
      {
          var indents = [...datalist];
          indents.sort((first,second) => second.price - first.price);
          return indents;

      }
      else
      {
        return datalist;
      }
       
    }

    function getDataAfterRateFilter(datalist)
    {
      if('ratefilter' in FilterState && FilterState.ratefilter == true && FilterState.rate == 'high')
      {
          var indents = [];
          for (var i = 0; i < datalist.length; i++) 
          {
            if (datalist[i].rating.rate >= 4 ) 
            {
              indents.push(
              datalist[i]
                );
            }
          }
      return indents;
      }
      else if('ratefilter' in FilterState && FilterState.ratefilter == true && FilterState.rate == 'mid')
      {
        var indents = [];
        for (var i = 0; i < datalist.length; i++) 
        {
          if (datalist[i].rating.rate <= 4&&datalist[i].rating.rate >= 3  ) {
            indents.push(
              datalist[i]
            );
          }
        }
        return indents;
      }
      else if('ratefilter' in FilterState && FilterState.ratefilter == true && FilterState.rate == 'low')
      {

        var indents = [];
        for (var i = 0; i < datalist.length; i++) 
        {
          if (datalist[i].rating.rate <= 3) {
            indents.push(
              datalist[i]
            );
          }
        }
        return indents;
      }

      return datalist;
      
    }

    function getDataAfterCategoryFilter(datalist)
    {
       if('sortbycategory' in FilterState && FilterState.sortbycategory == true && FilterState.categoryValue.length!==0)
      {

        var indents = [];
        for (var i = 0; i < datalist.length; i++) 
        {
          if (FilterState.categoryValue.includes(datalist[i].category))
          {
             indents.push(
               datalist[i]
            );
          }
        }
  
        return indents;
      }

      return datalist;
    
    }

    function CreateShowingDataArray()
    {

      let data1 = getDataAfterPriceFilter(DataArray);

      let data2 = getDataAfterSortPriceFilter(data1);

      let data3 = getDataAfterRateFilter(data2);

      let data4 = getDataAfterCategoryFilter(data3);

      return data4;
    }


    ShowingDataArray = CreateShowingDataArray();

    return(

        <FilterStateContext.Provider value={{PriceRangeHandler,ClearBtnHandler,ShowingDataArray, 
          PriceVal, setPriceVal,PriceHandler,LowtoHighHandler,HightoLowHandler,HighRateHandler,MidRateHandler,
          LowRateHandler,CategoryHandler,FilterState}}>
            {props.children} 
        </FilterStateContext.Provider>
    );

}