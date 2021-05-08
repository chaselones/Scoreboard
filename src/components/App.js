import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: []
  }

  // Player ID counter
  prevPlayerID = 1;

  handleScoreChange = (i, delta) => {
    //Because we are updating state relative to a previous state, we will use the callback method approach
    //In this case, we set the new state property to the value of the old state (prevState) property + 1
    this.setState(prevState => ({ score: prevState.players[i].score += delta }))
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players:
          [
            ...prevState.players,
            {
              name,
              score: 0,
              id: this.prevPlayerID += 1
            }
          ]
      }
    })
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        // Because we are setting state based on previous state, we use the callback method
        players: prevState.players.filter(player => player.id !== id)
      }
    })
  }

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  }

  render() {

    const highScore = this.getHighScore()

    return (
      <div className="scoreboard" >
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Player List */}
        {/* Map takes an additional optional SECOND arguement which represents the index of the current element in the array */}
        { this.state.players.map((player, i) =>
          <Player
            // This is passing in arguements and populating our function/method params for the player function (component)
            key={player.id}
            index={i}
            id={player.id}
            name={player.name}
            score={player.score}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div >
    )
  }
}

export default App;