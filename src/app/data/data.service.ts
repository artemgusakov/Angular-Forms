import { Injectable } from '@angular/core';
import {UserSettings} from './user-settings';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class DataService {

  constructor() { }

  postUserSettingsForm(settings: UserSettings): Observable<UserSettings> {
    return of(settings);
  }

}
