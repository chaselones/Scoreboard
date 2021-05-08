import React from 'react'
import PropTypes from 'prop-types';

//DESCTRUCTURE!!!
const Stats = ({ players }) => {

    //Reduce is used when you need to return something other than an array from an array
    //totalPoints is being re-defined every time the dom re-renders
    //Here, we are using total and setting it to 0, and adding the current player score to the total for each player
    const totalPoints = players.reduce((total, player) => {
        return total + player.score;
    }, 0)

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{players.length}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    )
}

Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    }))
}

export default Stats;