import React from "react";

// functional simple function component

// function Greet() {
//     return <h1>Hello SHIVA</h1>
// }

// using ES6 syntax for the same


const Greet =(props) => {   // destructureing in functional component
    const {name, heroName} = props;     // we can destructure in the arguments// Greet({name, heroName}) or either this way
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}



export default Greet;