import React, {Component} from 'react';
import { Button } from 'antd';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { LazyRoute } from '../utils';
import './app.less';

const lazyLoad = moduleName => _ =>
  import(`./${moduleName}`)
    .then(module => module.default)
    .catch(err => console.error(err));


class AppComponent extends Component {

  render() {
    return (
      <Router>
       <div>
         <ul>
           <li>
             <Link to='/admin'>admin</Link>
           </li>
           <li>
             <Link to='/'>home</Link>
           </li>
         </ul>
         <Route exact path='/'
                render={(props) => <LazyRoute {...props} component={import('./homepage')}/>}
         />
         <Route path='/admin'
                render={(props) => <LazyRoute {...props} component={import('./admin')}/>}
         />
       </div>
      </Router>
    );
  }
}


export default AppComponent;
