import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  // we can use componentDidMount() to focus the element but we are using function to do it this time
  // and this function will be called by the parent component
  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default Input;
