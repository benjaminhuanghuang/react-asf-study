
import React, { Component } from 'react';
import './PanelResizer.css';

import Panel from './Panel';

class PanelResizer extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
       <Panel/>
      </div>
    );
  }
}

export default PanelResizer;
