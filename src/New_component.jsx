import React, {Component} from "react";
import Increment_button from "./Increment_button.jsx";

export default class New_component extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const groceries = [
            {item: "milk"},
            {item: "eggs"},
            {item: "carrots"},
            {item: "cheese"}
        ];

        return(
            groceries.map((item) =>
                <div>
                    <div>
                        <h6>{item.item}: </h6>
                        <Increment_button name={item.item}> </Increment_button>
                    </div>
                </div>
            )
        );
    }
}
