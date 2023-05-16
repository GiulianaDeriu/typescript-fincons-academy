import { fromEvent, map } from 'rxjs';

export class Typehead {
  constructor(private inputReference: HTMLInputElement) {}

  startCapturing() {
    const userInput$ = fromEvent(this.inputReference, 'input')
      .pipe(map((x) => (x.target as HTMLInputElement).value))
      .subscribe((event) => {
        console.log(event);
      });
  }
}
