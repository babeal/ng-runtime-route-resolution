module.exports = {
  name: 'todo-pages',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/todo-pages',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
