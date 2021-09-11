import React from "react";

const Hello = () => {
    // return (
    //     <div className="hello">
    //         <h1>Hello JSX</h1>
    //     </div>
    // )

    // without JSX

    //                       div   no id/class=>creating element => h1  no id/class => value
    return React.createElement('div', {id:"hello",}, React.createElement('h1', null, "Hello JSX"));
}

export default Hello;