import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {AppProvider} from "./AppProvider";
import {FilterProvider} from "./FilterProvider";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <FilterProvider>
          <App />
      </FilterProvider>
    </AppProvider> 
  </StrictMode>,
  rootElement
);
