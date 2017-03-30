import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <h1>I'm the app component</h1>
        <hr>
        <p>================ start the home component ==============</p>
        <home></home>
        <p>================ end the home component ==============</p>
        <hr>
    `
})
export class AppComponent {}
