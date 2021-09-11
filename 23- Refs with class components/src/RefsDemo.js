import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    // Method-2:  callback ref created-step1 and set it to new element: step2
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // using callback ref: step-4

    if (this.cbRef) {
      this.cbRef.focus();
    }
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />

        {/* attaching the callback ref on input: step 3 */}
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>CLick</button>
      </div>
    );
  }
}

export default RefsDemo;

/*

fist step: first we create Refs at line 7
second step: secondly we use Refs at which we want to focus on by using inbuilt property "ref" at line 17
thirs step: lastly we are using focus on the element at line 11

Now whenever you refresh the page after rendering all the component the focus will be on input field.


*/
