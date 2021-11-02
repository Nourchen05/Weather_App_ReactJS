import React, { useState, useEffect } from "react";

const SearchWeather = () => {
  const [search, setSearch] = useState("london");
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  let componentMounted = true;
  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e7b443f137f09856182c6f61442c5aeb`
      );
      if (componentMounted) {
        setData(await response.json());
        console.log(data);
      }
      return () => {
        componentMounted = false;
      };
    };
    fetchWeather();
  }, []);
  let temp = (data.main.temp - 273.15).toFixed(2);
  let temp_min = (data.main.temp_min - 273.15).toFixed(2);
  let temp_max = (data.main.temp_max - 273.15).toFixed(2);
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div class="card text-white text-center border-0">
              <img
                src="https://source.unsplash.com/600x900/?nature,water
"
                class="card-img"
                alt="..."
              />
              <div class="card-img-overlay">
                <form>
                  <div class="input-group mb-4 w-75 mx-auto">
                    <input
                      type="search"
                      class="form-control"
                      placeholder="Search city"
                      aria-label="Search city"
                      aria-describedby="basic-addon2"
                    />
                    <button
                      type="submit"
                      class="input-group-text"
                      id="basic-addon2"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </form>
                <div className="bg-dark bg-opacity-50 py-3">
                  <h2 class="card-title">{data.name}</h2>
                  <p class="card-text lead">Thursdat, October 14, 2021</p>
                  <hr />
                  <i className="fas fa-cloud fa-4x"></i>
                  <h1 className="fw-bolder mb-5">{temp}</h1>
                  <p className="lead fw-border mb-0">Cloud</p>
                  <p className="lead">
                    {temp_min}&deg;C | {temp_max}&deg;C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;
