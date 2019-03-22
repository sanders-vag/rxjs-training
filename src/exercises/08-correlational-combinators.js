import { interval, combineLatest, merge } from 'rxjs';
import { map, take, withLatestFrom } from 'rxjs/operators';
import { addData, addListItem } from '../utils/utils';

const ex = '08';

const ex08 = () => {
  addListItem(ex);
  var connectionFailures = interval(800).pipe(
    take(2),
    map(i => ['Connection pooped', 'Refresh Epic Fail'][i])
  );

  var renderFailures = interval(700).pipe(
    take(3),
    map(i => ['Render failed: 309', 'Render failed: 17', 'Nothing rendered'][i])
  );

  var userActions = interval(300).pipe(
    take(6),
    map(
      i =>
        ['Clicked', 'Scrolled', 'Clicked', 'Typed', 'Zoomed in', 'Scrolled'][i]
    )
  );

  // Use these for debugging
  //connectionFailures.subscribe(x => console.log(x));
  //renderFailures.subscribe(x => console.log(x));
  //userActions.subscribe(x => console.log(x));

  // TODO: Create an Observable `messages` which emits the string
  // "System failed because of ${failure} after the user ${action}"
  // with ${failure} and ${action} appropriately replaced, based on
  // `connectionFailures`, `renderFailures`, and `userActions`.

  const failures = merge(connectionFailures, renderFailures);
  const messages = failures.pipe(
    withLatestFrom(
      userActions,
      (failure, action) =>
        `System failed because of ${failure} after the user ${action}`
    )
  );

  messages.subscribe(x => addData(ex, x));
};

export default ex08;
