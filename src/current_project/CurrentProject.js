
import React, { Component } from 'react';
//
import { PanelResizer, Panel } from '../panel_resizer';

class CurrentProject extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderLeftPanel()
    {

    }

    renderRightPanel()
    {

    }

    render() {
        return (
            <div>
                <PanelResizer>
                    <Panel>
                        Left
                    </Panel>
                    <Panel>
                        Right
                    </Panel>
                </PanelResizer>
            </div>
        );
    }
}

export default CurrentProject;
