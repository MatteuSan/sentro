/*
 * Copyright (c) MatteuSan and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  clearMocks: true,
  rootDir: './tests',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json'
    }
  },
  verbose: true,
};

module.exports = config;