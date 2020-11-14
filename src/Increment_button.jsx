import React, {Component} from "react";
import {Button} from "@material-ui/core";
import ReactDOM from "react-dom"; /*not sure i wil need to use this*/

export default class Increment_button extends Component {
    constructor(props){
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState({count: this.state.count +1})
    }

    render() {
        return(
            // <Button color="yellow" onClick={this.handleClick}> {this.state} </Button>
            // <div> <Button color="yellow" onClick={this.handleClick}> {this.state} </Button>
            // </div>
            <div> <Button variant="primary" onClick={this.handleClick}> {this.state.count} </Button>{' '}
            </div>
        );
    }
}
