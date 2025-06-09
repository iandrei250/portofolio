const Searchbar = () => {
  return (
    <div className="bg-white h-[full] mx-[20px] w-[300px] rounded-xl focus:outline-none">
      <input
        type="text"
        placeholder="Place your text here"
        className="w-full rounded-xl text-black p-0.5 px-4 flex items-center justify-center mx-auto focus:outline-none"
      />
    </div>
  );
};

export default Searchbar;
