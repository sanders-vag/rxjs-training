import { fromEvent, merge, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

const ex07 = () => {
  // Get elements
  var weightSliderElem = document.querySelector('#weight-slider');
  var weightTextElem = document.querySelector('#weight-text');
  var heightSliderElem = document.querySelector('#height-slider');
  var heightEditTextElem = document.querySelector('#height-edit-text');
  var heightTextElem = document.querySelector('#height-text');
  var bmiTextElem = document.querySelector('#bmi-text');

  // Observables
  var weight = fromEvent(weightSliderElem, 'input').pipe(
    map(ev => ev.target.value),
    startWith(weightSliderElem.value)
  );

  var height1 = fromEvent(heightSliderElem, 'input').pipe(
    map(ev => ev.target.value),
    startWith(heightSliderElem.value)
  );

  var height2 = fromEvent(heightEditTextElem, 'input').pipe(
    map(ev => parseInt(ev.target.value)),
    startWith(heightEditTextElem.value)
  );

  const height = merge(height1, height2);

  // TODO: create the Observable `bmi` which depends on
  // Observables `weight` AND [`height1` OR `height2`].
  const bmi = combineLatest(weight, height, (w, h) => w / (h * h));

  // Subscriptions
  weight.subscribe(x => (weightTextElem.innerHTML = x));
  height1.subscribe(x => (heightTextElem.innerHTML = x));
  bmi.subscribe(x => (bmiTextElem.innerHTML = x));
};

export default ex07;
