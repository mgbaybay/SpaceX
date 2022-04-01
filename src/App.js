import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      launches: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/launches")
      .then((response) => response.json())
      .then((launches) => this.setState({ launches: launches }));
  }

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value })
  }

  render() {
    // For state change during searching
    // const { launches, searchInput } = this.state;
    // const filteredRocket = launches.filter((launch) => 
    //   launches.name = searchInput
    // );
    return (
      <div className="container p-5">
        <div className="input-group p-3">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        {this.state.launches.map((launch) => (
          <div className="card m-3" key={launch.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={launch.links.flickr.original[0]}
                  className="img-fluid rounded-start"
                  alt="Rocket"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {launch.flight_number}: {launch.name} ({launch.date_utc})
                  </h5>
                  <p className="card-text">{launch.details}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
