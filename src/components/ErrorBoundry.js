import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(err, info) {
    this.setState({ hasError: true });
  }
  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Oops, Quelques chose ne va pas ! </h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundry;
