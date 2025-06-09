import windowsIcon from "../../assets/windows.svg";
import Searchbar from "./Searchbar";

const MenuBar = () => {
  return (
    <div>
      <nav className="border-gray-200 bg-gray-800 fixed bottom-0 left-0 w-full h-[50px]">
        <div className="max-w-screen-xl flex items-center p-2">
          <div className="flex items-center">
            <img src={windowsIcon} className="h-8" alt="Windows Logo" />
          </div>
          <Searchbar />
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
