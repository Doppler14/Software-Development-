import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "David Ugwu",
        bio: "A passionate software developer",
        imgSrc: "https://www.pinterest.com/pin/369717450631460325/",
        profession: "Software Engineer",
      },
      shows: false,
      mountedTime: 0,
    };
    this.intervalId = null; // To store the interval ID
  }

  componentDidMount() {
    // Start the timer
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the timer
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt="Profile" />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}
        <div className="timer">
          <h4>Time since mounted: {mountedTime} seconds</h4>
        </div>
      </div>
    );
  }
}

export default App;
