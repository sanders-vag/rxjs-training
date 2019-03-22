import { addData, addListItem } from '../utils/utils';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const ex05 = () => {
  // Get elements
  var weightSliderElem = document.querySelector('#weight-slider');
  var weightTextElem = document.querySelector('#weight-text');

  // TODO: create an Observable `weight` which emits the
  // (current and ongoing) value of weightSliderElem.
  const weight = fromEvent(weightSliderElem, 'change').pipe(
    map(e => e.target.value)
  );

  // TODO: subscribe to `weight` and set the innerHTML
  // of weightTextElem.
  weight.subscribe(w => {
    weightTextElem.innerHTML = w;
  });
};

export default ex05;
