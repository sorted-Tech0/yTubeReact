import React from 'react';


// function Greet(){
//     return <h1>Hello World!</h1>
// }

const Greet = ({name, heroname}) => {
    // const {name, heroname} = props;      if props is passed in the function argument
    return(
        <div>
            <h1>Hello, {name} a.k.a {heroname}</h1>
        </div>
    )
}

export default Greet;