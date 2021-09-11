import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoogedIn: true
        }
    }
    

    render() {

        // fourth way by short circuit operator

        return this.state.isLoogedIn && <div>Hello Shiva</div>

        // third way most used often

        // return (
        //     this.state.isLoogedIn ? 
        //         <div>Hello Shiva</div> :
        //         <div>Welcome Guest</div>
        // )

        // second way

        // let message;
        // if(this.state.isLoogedIn){
        //     message = <div>Hello Shiva</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        
        // return (
        //     <div>{message}</div>
        // )

        // if(this.state.isLoogedIn){
        //     return(
        //         <div>
        //             Hello shivu
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }


    }
}

export default UserGreeting
