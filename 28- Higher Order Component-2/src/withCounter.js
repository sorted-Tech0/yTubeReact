import React from "react";

const withCounter = (WrappedComponent) => {
  // function name should be same as component name
  class WithCounter extends React.Component {
    // component should be same as function name but in pascal coinvention
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increamentCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increamentCount={this.increamentCount}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
