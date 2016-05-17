Package.describe({
  name: 'react-meteor-data',
  summary: 'React mixin for reactively tracking Meteor data',
  version: '0.2.9',
  documentation: 'README.md',
  git: 'https://github.com/meteor/react-packages',
});

Package.onUse(function (api) {
  api.versionsFrom('1.3');
  api.use('tracker');
  api.use('ecmascript');
  api.use('tmeasday:check-npm-versions@0.2.0');

  api.export(['ReactMeteorData']);

  api.mainModule('react-meteor-data.jsx');
});

Package.onTest(function(api) {
  api.use([
    'underscore',
    'reactive-var',
    'tinytest',
    'test-helpers',
    'tracker',
    'mongo',
    'ecmascript',
    'react-meteor-data'
  ]);
  api.mainModule('react-meteor-data.tests.jsx');
});
