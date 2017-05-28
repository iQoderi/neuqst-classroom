"use strict";

import React, { Component } from  'react';
import { Link } from 'react-router-dom';
import './index.less';

class TopBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="topBarWrapper">
        <div className="login-bar">
          <Link to="/home/register">注册</Link>
          <Link to="/home/login">登录</Link>
        </div>
      </div>
    )
  }
}

export default TopBar;
