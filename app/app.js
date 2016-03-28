import React from 'react';
import {render} from 'react-dom';
import Hello from './hello';
import Nameslist from './nameslist';
import Incrementor from './incrementor';

render(
  <div style={{color:'green'}}>
    <Incrementor />
    <Hello name="Sumanth"/>
    <Nameslist />
  </div>,
  document.getElementById('container')
);
