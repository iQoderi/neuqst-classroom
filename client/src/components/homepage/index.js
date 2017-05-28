"use strict";

import React, { Component } from 'react';
import TopBar from './topBar';
import NavBar from './navBar';
import './index.less';

class HomePage extends Component {

  render() {
    return(
      <div>
        <TopBar/>
        <NavBar/>
        homepage
      </div>
    )
  }
}

export default HomePage;
