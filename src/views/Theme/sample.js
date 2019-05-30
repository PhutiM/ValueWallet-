import { render } from 'react-dom';
import * as React from 'react';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from './Colors/sample-base'

import * as data from './dataSource.json';
export class Default extends SampleBase {
    constructor() {
        super(...arguments);
        this.temp = 'sportsData';
        // define the JSON of data
        this.sportsData = data[this.temp];
        // maps the appropriate column to fields property
        this.fields = { text: 'Game', value: 'Id' };
        // set the value to select an item based on mapped value at initial rendering
        this.value = 'Game3';
    }
    render() {
        return (<div className='control-pane'>
        <div id="multisection" className='control-section'>
          <div id="multidefault">
            <div className="control-styles">
            </div>
            <div className="control-styles">
            <h4>Box Mode</h4>
            <div>
              <MultiSelectComponent id="boxelement" dataSource={this.sportsData} mode="Box" fields={this.fields} placeholder="Favorite Sports"/>
            </div>
            </div>
            </div>
        </div>
        
      </div>);
    }
}

render(<Default />, document.getElementById('sample'));