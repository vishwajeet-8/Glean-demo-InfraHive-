import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const HighchartComponent = () => {
  const options = {
    title: {
      text: "summary",
    },
    chart: {
      type: "column",
    },
    xAxis: {
      categories: ["2019", "2020", "2021"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Percent",
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true,
    },
    plotOptions: {
      column: {
        stacking: "percent",
        dataLabels: {
          enabled: true,
          format: "{point.percentage:.0f}%",
        },
      },
    },
    series: [
      {
        name: "Justworks",
        data: [178, 290, 307],
      },
      {
        name: "Riviera Partners",
        data: [272, 123, 156],
      },
      {
        name: "Informa Connect",
        data: [139, 78, 18],
      },
      {
        name: "AWS",
        data: [55, 33, 401],
      },
      {
        name: "Other",
        data: [55, 352, 41],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighchartComponent;
