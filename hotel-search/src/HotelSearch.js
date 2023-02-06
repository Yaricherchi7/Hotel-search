import axios from "axios";
import { useState, useEffect } from "react";

export function HotelSearch() {
  const [dataHotel, setDataHotel] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = () => {
    const options = {
      method: "GET",
      url: "https://airbnb13.p.rapidapi.com/search-location",
      params: {
        location: "Paris",
        checkin: "2023-05-16",
        checkout: "2023-05-17",
        adults: "1",
        children: "0",
        infants: "0",
        page: "1",
      },
      headers: {
        "X-RapidAPI-Key": "b6de9d9e30msheedc35cc03d9010p1a4231jsn98b444c294af",
        "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      },
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        setDataHotel(response.data.results)
      }).catch(function (error) {
        console.error(error);
      });
  };

  //console.log(dataHotel);

  useEffect(() => {
    fetchData();
  }, []);

  const HandleAddInput = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const HandleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    //console.log(value);
  };

  return (
    <div>
      <form onSubmit={HandleAddInput}>
        <label className="label">
          <span className="label-text">in che città vuoi andare?</span>
          <span className="label-text-alt">città</span>
        </label>
        <input
          name="search"
          value={search}
          onChange={HandleChange}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn">
          Button
        </button>
        <label className="label"></label>
      </form>
      <div>
        {dataHotel.map((hotel) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={hotel.images[0]} alt="Hotel" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">NomeHotel</h2>
                <p>descrizione hotel</p>
                <div className=" flex justify-between">
                  <span>Stanze: 1</span>
                  <span>letti: 2</span>
                  <span>Bagni: 2</span>
                </div>
                <div className=" py-5 card-actions  flex justify-between">
                  <h3 className="align-">Prezzo: 100€</h3>
                  <button className="btn btn-primary">visita ora</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* const getApi = async () => {
  try {
    const response = await fetch(options.url);
    const data = await response.json();
    setDataHotel(data);
    console.log(dataHotel);
  } catch (error) {
    console.log(error);
  }
}; */
