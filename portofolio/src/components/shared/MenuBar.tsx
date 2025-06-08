import windowsIcon from "../../assets/windows.svg";
import Searchbar from "./Searchbar";

const MenuBar = () => {
  return (
    <div>
      <nav className="border-gray-200 bg-black fixed bottom-0 left-0 w-full z-50 h-[50px]">
        <div className="max-w-screen-xl flex flex-wrap items-center">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={windowsIcon}
              className="h-8  mx-[20px]"
              alt="Flowbite Logo"
            />
          </div>
          <Searchbar />
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
