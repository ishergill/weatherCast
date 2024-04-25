import { useContext } from "react";

// !api contest
import { WeatherContext } from "./context/WeatherContext";

// !3rd party
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import MiniCard from "./components/MiniCard";
import Loading from "./components/Loading";

function App() {
  const { isLoading, location, weather, values } = useContext(WeatherContext);

  return (
    <div className="w-full h-full md:h-[100vh] text-white  bg-black flex flex-col  items-center px-[8%]">
      <Navbar />
      {isLoading ? (
        <main className="w-full  h-full flex flex-wrap gap-8 py-4  items-center justify-center ">
          <Loading />
        </main>
      ) : (
        <main className="w-full  flex flex-wrap gap-8 py-4  items-center justify-center ">
          <WeatherCard
            place={location}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            iconString={weather.conditions}
            conditions={weather.conditions}
          />
          <div className=" flex justify-center gap-8 flex-wrap w-[100%] sm:w-[60%] ">
            {values?.slice(1, 7).map((curr) => {
              return (
                <MiniCard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              );
            })}
          </div>
        </main>
      )}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default App;
