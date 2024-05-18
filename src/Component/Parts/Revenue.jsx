import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Revenue = () => {
    const a = 14;
    const chartConfig = {
    series: [
      {
        name: "Amount",
        data: [500, 350, 300, 400, 500, 50, 40, 100, 320],
      },
      {
        name: "Amount",
        data: [200, 65, 200, 300, 80, 250, 360, 260, 150],
      },
    ],
    chart: {
      type: "line",
      height: 180,
      toolbar: {
        show: false,
      },
    },
    title: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    colors:["#000000","#9EC1D4"],
    legend:{
        show:false,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show:true,
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        `Feb ${a}`,
        `Feb ${a+1}`,
        `Feb ${a+2}`,
        `Feb ${a+3}`,
        `Feb ${a+4}`,
        `Feb ${a+5}`,
        `Feb ${a+6}`,
        `Feb ${a+7}`,
        `Feb ${a+8}`,
      ],
    },
    yaxis: {
      labels: {
        show:true,
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#A6B7BF",
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 20,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
    },
  };

  return (
    <div class="w-full h-full relative">
        <ReactApexChart options={chartConfig} series={chartConfig.series} type="line" height={180}/>
    </div>
  );
}

export default Revenue;