/*
 * Copyright (c) MatteuSan and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { src, dest, series } = require('gulp');
const sassBase = require('sass');
const sass = require('gulp-sass')(sassBase);

function sassTaskWebsite() {
  return src('tests/build.test.scss', { sourcemaps: true })
    .pipe(sass({
      loadPath: ['node_modules'],
      importers: [sassBase.NodePackageImporter()],
      verbose: true,
    }).on('error', sass.logError))
    .pipe(dest('./tests', { sourcemaps: '.' }));
}

exports.default = series(
  sassTaskWebsite,
);