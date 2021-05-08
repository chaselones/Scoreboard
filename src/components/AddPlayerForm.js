import React, { Component } from 'react';

class AddPlayerForm extends Component {

    //Controlled components have internal state, and have to use methods/functions to update state
    //Easier to modify or validate/filter based on input
    //They call render on every keystroke

    //Refs only call render on submit
    //Refs are not limited to class components
    //With functions you need 

    playerInput = React.createRef();

    //We no longer need this because we are using a Ref

    // handleValueChange = (e) => {
    //     this.setState({
    //         value: e.target.value
    //     })
    // }
    //Previous function with destructured argument FOR THE LELS
    // handleValueChange = ({target}) => {
    //     this.setState({
    //         value: target.value
    //     })
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        // this.setState({value: ''}) We no longer need this as we are now using a Ref
        e.currentTarget.reset()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    //Ref:
                    // This puts a reference to the input on the AddPlayerForm class
                    //When the input is rendered to the page, it returns the reference which you can reference with 
                    // this.playerInput
                    ref={this.playerInput}
                    //End ref

                    type="text"
                    placeholder="Enter a new name: "

                //No longer needed because Ref
                // value={this.state.value}
                // onChange={this.handleValueChange}
                />

                <input
                    type="submit"
                    value="Add Player"
                />
            </form>
        )
    }
}

export default AddPlayerForm;