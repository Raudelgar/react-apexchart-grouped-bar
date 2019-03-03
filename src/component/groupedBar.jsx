import React, { Component } from "react";
import Chart from "react-apexcharts";

class GroupedBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "#f4f4f4",
          foreColor: "#333"
        },
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: "top"
            }
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"]
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"]
        },
        xaxis: {
          categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
        },
        yaxis: {
          show: true,
          title: {
            text: "Y Label",
            offsetX: 0,
            offsetY: 0
          }
        },
        title: {
          text: "React Grouped Chart Example",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px"
          }
        }
      },
      series: [
        {
          name: "DATA1",
          data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
          name: "DATA2",
          data: [53, 32, 33, 52, 13, 44, 32]
        }
      ]
    };
  }
  handleChange = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal
          }
        }
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="450"
          width="100%"
        />
        <button onClick={this.handleChange}>Change</button>
      </React.Fragment>
    );
  }
}

export default GroupedBar;
