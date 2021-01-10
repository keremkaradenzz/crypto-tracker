import React, { useEffect, useState } from "react";
import DetailCrypto from "./DetailCrypto";

const ListCrypto = ({ data }) => {


  const [cryptoName, setCryptoName] = useState("");
  const [change,setChange] = useState(true);



  // NUMBER TO MONEY
  const numberToMoney = (money) => {
    return money.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <>
    <div className="table-responsive">
      <table className="table text-white">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Rank</th>
            <th scope="col">Name </th>
            <th scope="col">Price</th>
            <th scope="col">High 24h</th>
            <th scope="col">Low 24h</th>
            <th scope="col">Price Change 24h</th>
            <th scope="col">Price Change % 24h</th>
            <th scope="col">MarketCap</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <>
                <tr>
                  <td className="p-2 bd-highlight">
                    <img className="img-icon " src={item.image}></img>
                  </td>
                  <td className="p-2 bd-highlight">{item.market_cap_rank}</td>
                  <td className="p-2 bd-highlight">{item.name}</td>
                  <td className="p-2 bd-highlight">
                    {numberToMoney(item.current_price)}
                  </td>
                  <td className="p-2 bd-highlight">
                    {numberToMoney(item.high_24h)}
                  </td>
                  <td className="p-2 bd-highlight">
                    {numberToMoney(item.low_24h)}
                  </td>
                  <td className="p-2 bd-highlight">
                    {item.price_change_24h > 0 ? (
                      <td className="p-2 bd-highlight text-success">
                        +{numberToMoney(item.price_change_24h)}
                      </td>
                    ) : (
                      <td className="p-2 bd-highlight text-danger">
                        {numberToMoney(item.price_change_24h)}
                      </td>
                    )}
                  </td>
                  {item.price_change_percentage_24h > 0 ? (
                    <td className="p-2 bd-highlight text-success">
                      % +{item.price_change_percentage_24h.toFixed(2)}
                    </td>
                  ) : (
                    <td className="p-2 bd-highlight text-danger">
                      % {item.price_change_percentage_24h.toFixed(2)}
                    </td>
                  )}
                  <td className="p-2 bd-highlight">
                    {numberToMoney(item.market_cap)}
                  </td>
                  <th scope="col">
                    {" "}
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-toggle="modal"
                      name={item.name}
                      data-bs-target={`#exampleModal${index}`}
                      onClick={(e) => setCryptoName(e.target.name)}
                    >
                      Details
                    </button>
                  </th>
                </tr>
                <tr>
                  <div
                    className="modal fade"
                    id={`exampleModal${index}`}
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content">
                        <div className="modal-header ">
                          <h5
                            className="modal-title text-dark me-5 "
                            id="exampleModalLabel"
                          >
                            Crypto Average Last 7days Graphic
                          </h5>
                          <div className="form-check form-switch ms-5 text-dark">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                              onClick={e => setChange((!change))}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckDefault"
                            >
                              Change Graphic
                            </label>
                          </div>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <DetailCrypto
                            price={item.sparkline_in_7d.price}
                            name={cryptoName}
                            changeGraphic = {change}
                          ></DetailCrypto>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default ListCrypto;
