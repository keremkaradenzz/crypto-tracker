import React, { useEffect, useState } from "react";
import axios from "axios";
import ListCrypto from "./components/ListCrypto";

const API =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=true&price_change_percentage=24h ";


//application/json
function App() {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: API,
      headers: { "Content-type": "application/json" },
    })
      .then(function (response) {

        setGetData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center mt-5 mb-5">24h Crypto Tracker</h2>
       
        <div className="col-sm-12">
          <ListCrypto data={getData}></ListCrypto>
        </div>

      </div>
    </div>
  );
}

export default App;
