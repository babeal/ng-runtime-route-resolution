module.exports = {
  name: "ng-runtime-routes",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/ng-runtime-routes/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
