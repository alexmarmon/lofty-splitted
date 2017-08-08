import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Splitted class to lazy load modules
class Splitted extends Component {
  componentWillMount = () => {
    this.props.load.then((c) => { this.Comp = c; this.forceUpdate(); });
  };
  render = () => (
    this.Comp ? <this.Comp.default appState={this.props.appState} /> : null
  )
}

// Splitted props
Splitted.propTypes = {
  appState: PropTypes.object,
  load: PropTypes.object,
};

export default Splitted;
