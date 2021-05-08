import React from 'react';
import PropTypes from 'prop-types'

//prop types:
/*
PropTypes.array
PropTypes.bool
PropTypes.func
PropTypes.number
PropTypes.object
PropTypes.string
PropTypes.symbol
*/

//Desctructuring props like a god
//This way we use variable names directly instead of props.property
const Counter = ({ index, changeScore, score }) => {

    return (
        <div className="counter">
            {/* When we attach our functions to the JSX onClick method, we DO NOT invoke them with () */}
            {/* If we type () at the end of the method name, they will run when they are mounted */}
            <button
                className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
            <span className="counter-score">{score}</span>
            <button className="counter-action increment" onClick={() => changeScore(index, +1)}> + </button>
        </div>
    )
}

Counter.propTypes = {
    index: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
}

export default Counter;