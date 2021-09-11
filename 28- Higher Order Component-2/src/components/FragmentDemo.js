import React from "react";

function FragmentDemo() {
  return (
    // <div>
    //   <h1>Fragment Demo</h1>
    //   <p>This describe the fragment Demo Component</p>
    // </div>

    //we can do better

    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>This describe the fragment Demo Component</p>
    </React.Fragment>
  );
}

export default FragmentDemo;
