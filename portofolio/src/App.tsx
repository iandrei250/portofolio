import { Outlet } from "react-router-dom";
import MenuBar from "./components/shared/MenuBar";

function App() {
  return (
    <div className="w-screen h-screen">
      <MenuBar />
      <Outlet />
    </div>
  );
}

export default App;
