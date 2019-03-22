import { addData, addListItem } from '../utils/utils';
import { interval } from 'rxjs';
import { take, map, filter, reduce } from 'rxjs/operators';

const ex = '03';

const ex03 = () => {
  addListItem(ex);
  var source = interval(400).pipe(
    take(9),
    map(i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i])
  );

  // TODO: Create an Observable `result` that emits the
  // sum of all numbers in source. Use pure functions
  // such as map, filter, reduce, scan, merge, delay,
  // concat, take, etc.
  const result = source.pipe(
    map(s => parseInt(s)),
    filter(s => !isNaN(s)),
    reduce((a, b) => a + b)
  );

  result.subscribe(x => addData(ex, x));
};

export default ex03;
