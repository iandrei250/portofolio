import windowsIcon from "../../assets/windows.svg";

const MenuBar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed bottom-0 left-0 w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={windowsIcon} className="h-8" alt="Flowbite Logo" />
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
          ></div>
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
