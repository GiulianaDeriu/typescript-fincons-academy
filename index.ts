// Import stylesheets
import { from, fromEvent, interval, map } from 'rxjs';
import './style.css';
import { Typehead } from './typehead';

const inputReference = document.getElementById('field') as HTMLInputElement;
const theTypehead = new Typehead(inputReference);

theTypehead.startCapturing();

/*OBSERVABLES
userInput$.subscribe({
  next: (event) => {
    console.log(event);
  },
  error: (error) => {
    console.log(error);
  },
  complete: () => {
    console.log('completed');
  },
});*/

/*FETCH
from(
  fetch(`https://api.github.com/search/repositories?q=microsoft`)
).subscribe();
*/

const innerClock$ = interval(5000);
innerClock$.subscribe((n) => {
  if (counter < 3) {

  }
})

let counter = 0;
while(counter < 3) {
  counter +=1
}

