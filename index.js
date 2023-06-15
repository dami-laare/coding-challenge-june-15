import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const data = [
  {
    Month: "January",
    SalesAmount: 5000,
  },
  {
    Month: "February",
    SalesAmount: 7000,
  },
  {
    Month: "March",
    SalesAmount: 5500,
  },
  {
    Month: "April",
    SalesAmount: 9000,
  },
  {
    Month: "May",
    SalesAmount: 6500,
  },
  {
    Month: "June",
    SalesAmount: 8000,
  },
  {
    Month: "July",
    SalesAmount: 7500,
  },
  {
    Month: "August",
    SalesAmount: 6000,
  },
  {
    Month: "September",
    SalesAmount: 8500,
  },
  {
    Month: "October",
    SalesAmount: 9500,
  },
  {
    Month: "November",
    SalesAmount: 7000,
  },
  {
    Month: "December",
    SalesAmount: 8500,
  },
];

const w = 1200;
const h = 600;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

const padding = h / data.length;
const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d.SalesAmount)])
  .range([h, padding]);

// const yScale = d3
//   .scaleLinear()
//   .domain([0, d3.max(data, (d) => d[1].SalesAmount)])
//   .range([h - padding, padding]);

const yAxis = d3.axisLeft(yScale);

svg
  .selectAll("rect")
  .data(data.map((item) => item.SalesAmount))
  .enter()
  .append("rect")
  .attr("y", (item) => h - (item / 10000) * h)
  .attr("width", 30)
  .attr("height", (item, index) => {
    return (item / d3.max(data, (d) => d.SalesAmount)) * h - 3;
  })
  .attr("x", (item, index) => {
    return index * 90 + 100;
  });

svg
  .selectAll("text")
  .data(data.map((data) => data.Month))
  .enter()
  .append("text")
  .text((item) => item)
  .attr("y", (item, index) => {
    return h - 6 - (data[index].SalesAmount / 10000) * h;
  })
  .attr("x", (item, index) => {
    return index * 90 + 100;
  });

svg.append("g").attr("transform", `translate(70, 0)`).call(yAxis);
