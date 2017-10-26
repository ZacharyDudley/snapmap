import React from 'react';
import Head from './Head';

const Root = ({ children }) => (
  <div>
    <Head />
    <div id="mainBox">
      { children }
    </div>
  </div>
);

export default Root;
