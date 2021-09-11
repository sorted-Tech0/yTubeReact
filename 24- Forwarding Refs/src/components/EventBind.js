import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }

        // third approach of binding

        // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Good Bye"
    //     })
    // }

    // fourth approach using arrow function

    clickHandler = () => {
        this.setState({
            message : "Good Bye!"
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* one way binding in render method */}
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}

                {/* using arrow function */}
                {/* <button onClick={() => this.clickHandler()}>click</button> */}

                {/* using third approach */}
                {/* <button onClick={this.clickHandler}>click</button> */}

                {/* using fourth approach with arrow function */}
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default EventBind
