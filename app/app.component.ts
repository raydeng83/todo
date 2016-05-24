import { Component } from '@angular/core';
import {Home} from './components/home.component';
import {FORM_PROVIDERS} from '@angular/common';

@Component({
  selector: 'my-app',
  providers: [FORM_PROVIDERS],
  directives: [Home],
  template: `
    <home></home>
  `
})
export class AppComponent { }
