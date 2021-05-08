import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Visits",
            data: [5, 10, 103, 95, 203, 195],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Visits in the last 6 months",
                font: {
                  size: 20,
                },
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    );
  }
}
