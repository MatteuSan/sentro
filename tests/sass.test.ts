/*
 * Copyright (c) MatteuSan and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const sassTest = require('sass-true');
const filePath = path.join(__dirname, './main.test.scss');
const scss = require('sass');

sassTest.runSass({ describe, it }, filePath, {
  importers: [new scss.NodePackageImporter()],
  verbose: true
});