import { Component } from "@angular/core";

@Component({
    selector: 'widget-three',
    template: `
        <h3>Top</h3>
        <ng-content select="[headers]"></ng-content>
        <ng-content select="h3"></ng-content>
        <ng-content select=".close-widget-three"></ng-content>
        <h3>Bottom</h3>
    `
})

export class WidgetThree {}