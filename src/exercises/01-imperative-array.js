import { addData, addListItem } from '../utils/utils';

const ex = '01';

const ex01 = () => {
  addListItem(ex);
  var source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];
  let result = 0;
  // TODO: Create a var `result` that contains the sum
  // of all numbers in source. Use a traditional for loop
  // for this exercise.
  for (let i = 0; i < source.length; i++) {
    const parsed = parseInt(source[i]);
    if (!isNaN(parsed)) result += parsed;
  }

  addData(ex, result); // should print the number `33` only
};

export default ex01;
