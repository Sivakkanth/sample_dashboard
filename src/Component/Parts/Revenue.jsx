import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Revenue = () => {
    const a = 14;
    const chartConfig = {
    series: [
      {
        name: "Amount",
        data: [16, 13, 12, 19, 18, 16.5, 15],
      },
      {
        name: "Amount",
        data: [14.5, 16, 17, 17.5, 20, 19, 18],
      },
    ],
    chart: {
      type: "line",
      height: "100%",
      maxWidth: "100%",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      y: {
        show: false,
      },
      theme: "dark",
    },
    title: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
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
          fontWeight: 300,
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
      ],
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: 'text-xs font-normal'
      },
      labels: {
        show: true,
        formatter: function(value) {
          return value + 'K';
        },
      },
      min: 0,
    },
    grid: {
      show: true,
      borderColor: "#A6B7BF",
      strokeDashAarray: 4,
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: -26,
        right: 2,
        left: 2,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div class="w-full h-full relative">
        <ReactApexChart options={chartConfig} series={chartConfig.series} type="line" height={180}/>
    </div>
  );
}

export default Revenue;