import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

const DetailCrypto = (props) => {
  const [dataChart, setDataChart] = useState({});

  useEffect(() => {
    let dataArr = [];
    let result = 0;
    props.price.map((item, index) => {
      if ((index + 1) % 24 === 0) {
        result = result / 24;
        dataArr.push(result);
        result = 0;
      } else {
        result += item;
      }
    });

    setDataChart({
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      datasets: [
        {
          label: `${props.name}`,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
          data: dataArr,
        },
      ],
    });
  }, [props.name]);

  return (
    <>
      {props.changeGraphic ? (
        <Line data={dataChart} />
      ) : (
        <Bar data={dataChart} />
      )}
    </>
  );
};

export default DetailCrypto;
