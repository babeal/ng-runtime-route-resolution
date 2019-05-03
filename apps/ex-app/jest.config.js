module.exports = {
  name: 'ex-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ex-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
