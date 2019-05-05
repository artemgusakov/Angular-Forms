import { Component, OnInit } from '@angular/core';
import {UserSettings} from '../data/user-settings';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  private _originalUserSetting: UserSettings = {
    name: 'Test',
    emailOffers: true,
    interfaceStyle: 'medium',
    subscriptionType: 'Monthly'
  };

  public userSettings: UserSettings = _.clone(this._originalUserSetting);

  constructor() { }

  ngOnInit() {
  }

  cancelClick() {
    this.userSettings = _.clone(this._originalUserSetting);
  }
}
