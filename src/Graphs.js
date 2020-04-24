import React from "react";
import data from "./data/csvjson.json";
import { Dropdown, Button } from "react-bootstrap";
import Example from "./Bar1";

class Graph extends React.Component {
  state = {
    state_name: "Please select a State",
    date: "Please select a date",
    deaths: 0,
    recovered: 0,
    loading: false,
  };

  handleChange1 = (event) => {
    console.log(event.target.name);
    this.setState({
      state_name: event.target.name,
    });
  };

  handleChange2 = (event) => {
    console.log(event.target.name);
    this.setState({
      date: event.target.name,
    });
  };

  renderGraph = () => {
    let death = 0;
    let recover = 0;
    data.map((data) => {
      if (
        data.State === this.state.state_name &&
        data.Date === this.state.date
      ) {
        if (data.Patient_Status === "Recovered") {
          recover += 1;
        } else {
          death += 1;
        }
      }
    });

    const obj = {
      deaths: death,
      recovered: recover,
    };

    this.setState({
      deaths: obj.deaths,
      recovered: obj.recovered,
      loading: true,
    });
  };

  render() {
    const loading = this.state.loading;
    return (
      <div>
        <h1>Graphs</h1>
        <div>
          <div class="inline">
            <Dropdown className="dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.state.state_name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={this.handleChange1} name="Delhi">
                  Delhi
                </Dropdown.Item>
                <Dropdown.Item onClick={this.handleChange1} name="Tamil Nadu">
                  Tamil Nadu
                </Dropdown.Item>
                <Dropdown.Item onClick={this.handleChange1} name="Karnataka">
                  Karnataka
                </Dropdown.Item>
                <Dropdown.Item onClick={this.handleChange1} name="Kerela">
                  Kerela
                </Dropdown.Item>
                <Dropdown.Item onClick={this.handleChange1} name="Maharashtra">
                  Maharashtra
                </Dropdown.Item>
                <Dropdown.Item onClick={this.handleChange1} name="Gujarat">
                  Gujarat
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class="inline">
            <Dropdown className="dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.state.date}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={this.handleChange2} name="15/04/2020">
                  15/04/2020
                </Dropdown.Item>
                <Dropdown.Item onClick={this.handleChange2} name="14/04/2020">
                  14/04/2020
                </Dropdown.Item>
                <Dropdown.Item onClick={this.handleChange2} name="13/04/2020">
                  13/04/2020
                </Dropdown.Item>
                <Dropdown.Item onClick={this.handleChange2} name="12/04/2020">
                  12/04/2020
                </Dropdown.Item>
                <Dropdown.Item onClick={this.handleChange2} name="11/04/2020">
                  11/04/2020
                </Dropdown.Item>
                <Dropdown.Item onClick={this.handleChange2} name="10/04/2020">
                  10/04/2020
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class="inline">
            <Button variant="primary" onClick={this.renderGraph}>
              Render
            </Button>{" "}
          </div>
        </div>
        {loading ? (
          <Example data={this.state} class="bar-graph" />
        ) : (
          <h6>Select the fields</h6>
        )}
      </div>
    );
  }
}

export default Graph;
