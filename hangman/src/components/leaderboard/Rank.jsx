import React, { Component } from "react";

class Rank extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch(
      "https://my-json-server.typicode.com/divyanshurawat90/leaderboard/players"
    )
      .then((response) => response.json())
      .then((booksList) => {
        this.setState({ data: booksList });
      });
  }

  render() {
    return (
        <div class="leaderboard">
      <div class="outerboxRank">
          <div className="leaderboardtitle">PLAYERS</div>
        {this.state.data.map((r) => (
          <div class="stats">
            <span>{r.id}</span>
            <span>{r.name}</span>
            <span>{r.points}<span><i class="fa fa-trophy"></i></span></span>
          </div>
        ))}
      </div>
      </div>
    );
  }
}

export default Rank;
