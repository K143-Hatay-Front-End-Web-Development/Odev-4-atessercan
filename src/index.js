import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/use-data";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>
);
