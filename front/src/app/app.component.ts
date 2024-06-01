import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from './model/joke.model';
import { JokesService } from './services/jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public joke$: Observable<Joke | null> = this.jokesService.joke$();

  constructor(private jokesService: JokesService) {}

  public ngOnInit(): void {
    this.getRandomJoke();
  }

  public getRandomJoke(): void {
    this.jokesService.getRandomJoke();
  }

  public add(a: number, b: number): number {
    return a + b;
  }

  public factorial(n: number): number {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
    return result;
  }
  public celsiusToFahrenheit(celsius: number): number {
    const fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
  }

  public isEven(n: number): boolean {
    return n % 2 === 0;
  }
}
