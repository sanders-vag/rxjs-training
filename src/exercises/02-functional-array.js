import { addListItem, addData } from '../utils/utils';

const ex = '02';

const ex02 = () => {
  addListItem(ex);
  var source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];
  // TODO: Create a var `result` that contains the sum
  // of all numbers in source. Use pure array functions
  // such as map, filter, reduce, reduceRight.

  const result = source
    .map(s => parseInt(s))
    .filter(s => !isNaN(s))
    .reduce((a, b) => a + b);

  addData(ex, result);
};

export default ex02;
