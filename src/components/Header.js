import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats'
import Stopwatch from './Stopwatch';


//Destructuring props from the props object by name
const Header = ({ players, title }) => {
    return (
        <header>
            <Stats players={players} />
            <h1>{title}</h1>
            <Stopwatch />
        </header>
    )
}

Header.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
}

//Default props will make sure the Header component has a default property of title with the value Scoreboard
Header.defaultProps = {
    title: 'Scoreboard'
}

export default Header;