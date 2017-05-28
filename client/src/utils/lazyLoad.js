"use strict";

import React from 'react';
import LazyRoute from './lazyRoute';

const lazyLoad = module => props => { return (<LazyRoute { ...props } component={ import(`./${module}`) }/>) };

export default lazyLoad;
