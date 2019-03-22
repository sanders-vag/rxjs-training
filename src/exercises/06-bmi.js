import { fromEvent, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

const ex06 = () => {
  // Get elements
  var weightSliderElem = document.querySelector('#weight-slider');
  var weightTextElem = document.querySelector('#weight-text');
  var heightSliderElem = document.querySelector('#height-slider');
  var heightTextElem = document.querySelector('#height-text');
  var bmiTextElem = document.querySelector('#bmi-text');

  // Observables
  var weight = fromEvent(weightSliderElem, 'input').pipe(
    map(ev => ev.target.value),
    startWith(weightSliderElem.value)
  );
  var height = fromEvent(heightSliderElem, 'input').pipe(
    map(ev => ev.target.value),
    startWith(heightSliderElem.value)
  );

  // TODO: create the Observable `bmi` which depends on
  // Observables `weight` and `height` and is calculated
  // as BMI = w / h*h, where w is the weight in kilograms,
  // and h is the height in meters.
  const bmi = combineLatest(weight, height, (w, h) => w / (h * h));

  // Subscriptions
  weight.subscribe(x => (weightTextElem.innerHTML = x));
  height.subscribe(x => (heightTextElem.innerHTML = x));
  bmi.subscribe(x => (bmiTextElem.innerHTML = x));
};

export default ex06;
