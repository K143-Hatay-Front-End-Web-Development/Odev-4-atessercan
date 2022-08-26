import { createContext, useContext, useReducer } from "react";

export const DataContext = createContext({});
export const DataDispatchContext = createContext(null);
export const useData = () => {
  return useContext(DataContext);
};
export const useDataDispatch = () => {
  return useContext(DataDispatchContext);
};
export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(dataReducer, initialData);

  return (
    <DataContext.Provider value={data}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
};

const initialData = {
  loading: true,
  error: "",
  characters: [],
};

let charArr=[];
const dataReducer = (state, action) => {
  charArr = [...state.characters, ...action.payload.data.results]
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        characters: charArr,
        error: "",
      };
      case "ERROR":
      return {
        loading: false,
        characters: [],
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};
