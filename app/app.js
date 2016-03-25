import React from 'react';
import {render} from 'react-dom';
import Hello from './hello';
import Nameslist from './nameslist';


render(
  <div>
    <Hello name="Sumanth"/>
    <Nameslist />
  </div>,
  document.getElementById('container')
);
