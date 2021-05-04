import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PublicObservable {
  private finish = new BehaviorSubject<boolean>(false);
  public finish$ = this.finish.asObservable();

  private error = new BehaviorSubject<Error>(null);
  public currentError = this.error.asObservable();

  constructor() {}

  updateError(error: Error) {
    this.error.next(error);
  }
}
