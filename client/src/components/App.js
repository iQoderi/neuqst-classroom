import React from 'react';
import { Button } from 'antd';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div>
        <Button>submit</Button>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
