import { addData, addListItem } from '../utils/utils';
import { Observable } from 'rxjs';

const ex041 = () => {
  const ex = '041';
  addListItem(ex);

  var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      addData(ex, 'timeout');
      resolve(123);
    }, 1000);
    addData(ex, 'promise started');
  });

  promise.then(x => addData(ex, 'resolved: ' + x));

  // TODO: Create an RxJS Observable `observable` with
  // the same behavior as the promise above.
  const observable = Observable.create(observer => {
    setTimeout(() => {
      addData(ex, 'observer timeout');
      observer.next(123);
    }, 1000);
    addData(ex, 'observer created');
  });

  observable.subscribe(x => addData(ex, 'next: ' + x));
};

const ex042 = () => {
  const ex = '042';
  addListItem(ex);
  // TODO: Create an RxJS Observable `observable` with
  // the same behavior as the promise above, but also
  // clear the timeout when the Observable is disposed.
  const observable = Observable.create(observer => {
    const timer = setTimeout(() => {
      addData(ex, 'observer2 timeout');
      observer.next(123);
    }, 1000);
    addData(ex, 'observer2 created');
    return () => {
      addData(ex, 'Observer 2 unsubscribed!');
      clearTimeout(timer);
    };
  });

  const subscription = observable.subscribe(x => addData(ex, 'next 2: ' + x));

  // TODO: After 500ms, dispose the subscription.
  setTimeout(() => {
    subscription.unsubscribe();
  }, 500);
};

export { ex041, ex042 };
