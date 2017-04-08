require('es6-promise').polyfill();
require('isomorphic-fetch');
require('three');

var context = require.context('../../src', true, /.test\.tsx?$/);
context.keys().forEach(context);
