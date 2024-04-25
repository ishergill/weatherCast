import { useContext, useState } from "react";
import search from "../assets/icons/search.svg";
import { WeatherContext } from "../context/WeatherContext";

function Navbar() {
  const [input, setInput] = useState("");
  const { setPlace } = useContext(WeatherContext);

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <nav className="w-full py-8 flex justify-between items-center ">
      <div className="flex gap-2 items-center">
      <img src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png" height={32} width={32} />
      <h1 className="font-bold tracking-wide  text-xl hidden sm:block  italic ">
        weatherCast
      </h1>
      <h1 className="font-bold tracking-wide  text-lg block sm:hidden ">wc</h1>

      </div>
      
      <div className="bg-white w-fit overflow-hidden shadow-2xl rounded flex items-center  px-2 py-1 gap-2 ">
        <img src={search} alt="search" className="w-5 h-5 " />
        <input
          type="text"
          placeholder="Seach City"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              //submit the form
              submitCity();
            }
          }}
          className="focus:outline-none  w-[80%] text-[#212121] text-md "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
