import { addData, addListItem } from '../utils/utils';
import { interval } from 'rxjs';
import { take, map, share } from 'rxjs/operators';

const ex = '09';
const ex09 = () => {
  addListItem(ex);

  var clock = interval(1000).pipe(
    take(10),
    map(x => x + 1),
    share()
  );

  setTimeout(() => {
    clock.subscribe(x => addData(ex, `b: ${x}`));
  }, 4500);

  clock.subscribe(x => addData(ex, `a: ${x}`));

  // TODO: Fix this code so that both subscribers log
  // the same events at the same time.
};

export default ex09;
