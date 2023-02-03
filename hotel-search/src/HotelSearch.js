import axios from "axios";
import { useState, useEffect } from "react";

export function HotelSearch() {
  const [dataHotel, setDataHotel] = useState(null);
  const [search, setSearch] = useState("");

  const fetchData = () => {
    const options = {
        method: 'GET',
        url: 'https://airbnb13.p.rapidapi.com/search-location',
        params: {
          location: 'Paris',
          checkin: '2023-05-16',
          checkout: '2023-05-17',
          adults: '1',
          children: '0',
          infants: '0',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': '4dd8c088ebmsh5db7b77bc21725dp147170jsn87bea40c359c',
          'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
      };
      

    axios.request(options).then(function (response) {
        console.log(response.data);
        setDataHotel(response.data)
    }).catch(function (error) {
        console.error(error);
    });
};

console.log(dataHotel)

useEffect(() => {
    fetchData();
}, []);

const HandleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    console.log(value);
};

const HandleAddInput = () => {};

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
      <button onSubmit={HandleAddInput} className="btn">
        Button
      </button>
      <label className="label"></label>
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