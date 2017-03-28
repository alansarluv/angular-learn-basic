import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {AppComponent}  from './app.component';
import {HomeModule} from './home/home.module';

@NgModule({
    imports:        [BrowserModule, CommonModule, HomeModule],
    declarations:   [AppComponent],
    bootstrap:      [AppComponent]
})

export class AppModule {}
