"use strict";

import LazyRoute from './lazyRoute';

const lazyLoad = module => props => <LazyRoute {...props} component={import(`./${module}`)}/>

export default lazyLoad;
