import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Icon from './Icon';


//User Pure component when you're having performance issues and need things to be more efficient
class Player extends PureComponent {
    //Static PropTypes
    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number,
        index: PropTypes.number,
        isHighScore: PropTypes.bool
    }

    //Pure components only call render if state or prop values have changed
    render() {
        //To destructure from this.props in a class components, you do a variable assignment
        const { name, id, score, changeScore, removePlayer, index, isHighScore } = this.props;
        //This is why we use purecomponent
        console.log(name + " rendered")
        return (
            <div className="player">
                <span className="player-name">
                    {/* Child components can use methods of parent components using callback functions */}

                    <button className="remove-player" onClick={
                        () => removePlayer(id)
                        // button text below
                    }>
                        ✖
                </button>
                    <Icon isHighScore={isHighScore} />
                    {name}
                </span>
                <Counter
                    score={score}
                    changeScore={changeScore}
                    index={index}
                />
            </div>
        )
    }
}

export default Player;