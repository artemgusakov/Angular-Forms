import { Component, OnInit } from '@angular/core';
import {UserSettings} from '../data/user-settings';
import * as _ from 'lodash';
import {NgForm} from '@angular/forms';
import {DataService} from '../data/data.service';

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

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  cancelClick() {
    this.userSettings = _.clone(this._originalUserSetting);
  }

  onSubmit(form: NgForm) {
    this._dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log(result),
      error => console.log('Error: ', error)
    );
  }
}
