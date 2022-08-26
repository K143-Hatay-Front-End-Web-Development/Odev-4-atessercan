import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import "./styles/global.scss";

function App() {

  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="detail:characterId" element={<Detail />} />
        </Routes>
    </div>
  );
}

export default App;
