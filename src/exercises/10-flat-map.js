import { interval, from } from 'rxjs';
import { take, first, flatMap, map } from 'rxjs/operators';
import { addData, addListItem } from '../utils/utils';

const ex = '10';
const ex10 = () => {
  addListItem(ex);
  var clock = interval(100).pipe(take(10));

  function delay(source, millis) {
    // TODO: implement this function using flatMap().
    // You should return an Observable.
    //source observable
    //interval millis
    return source.pipe(
      flatMap(x =>
        interval(millis).pipe(
          first(),
          map(() => x)
        )
      )
    );
  }

  delay(clock, 2000).subscribe(x => addData(ex, x));
};

export default ex10;
