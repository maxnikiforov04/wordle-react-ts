import "./index.css";
import { Routes, Route } from "react-router-dom";
import Game from "./pages/Game/Game";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Game />}></Route>
    </Routes>
  );
}

export default App;
