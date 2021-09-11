import React from "react";

const withCounter = (WrappedComponent, increamentNumber) => {
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
        return { count: prevState.count + increamentNumber };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increamentCount={this.increamentCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
