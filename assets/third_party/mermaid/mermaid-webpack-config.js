/**
 * Copyright 2023 The Tour of WGSL Authors
 *
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file or at
 * https://developers.google.com/open-source/licenses/bsd
 */

// Create a JS bundle out of the mermaid distribution.
// Put it in the 'dist' subdirectory.
//
// A later step (the layout/partials/mermaid.html) will
// copy it out to the static site.

import webpack from 'webpack';
import path from 'path';

const config = {
  entry: 'mermaid/dist/mermaid.esm.min.mjs',
  experiments: {
    outputModule: true
  },
  output: {
    library: {
      type: 'module',
    },
    path: path.resolve('assets/third_party/mermaid/dist'),
  },
  mode: 'production',
};

webpack(config, (err,stats) => {
  if (err || stats.hasErrors()) {
    console.log(err || stats);
  }
});
