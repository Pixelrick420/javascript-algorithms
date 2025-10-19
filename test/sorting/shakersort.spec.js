var sortTestCase = require('./sort.testcase.js');
var shakerSort =
      require('../../src/sorting/shakersort.js').shakerSort;

sortTestCase(shakerSort, 'Shaker sort');
