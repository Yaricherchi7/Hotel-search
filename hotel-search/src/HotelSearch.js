import axios from "axios";
import { useState } from "react";

export function HotelSearch() {
  const [dataHotel, setDataHotel] = useState([]);
  const [search, setSearch] = useState("");

  const options = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/locations/v3/search",
    params: {
      q: "new york",
      locale: "en_US",
      langid: "1033",
      siteid: "300000001",
    },
    headers: {
      "X-RapidAPI-Key": "4dd8c088ebmsh5db7b77bc21725dp147170jsn87bea40c359c",
      "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
    },
  };

  const getApi = async () => {
    try {
      const response = await fetch(options.url);
      const data = await response.json();
      setDataHotel(data);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    console.log(value);
  };

  const HandleAddInput = ()=> {
    
  }

  return (
    <div className="form-control w-full max-w-xs">
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
      <button
      onSubmit={HandleAddInput}
      className="btn">Button</button>
      <label className="label"></label>
    </div>
  );
}
