import { Component } from "@angular/core";

@Component({
    selector: 'widget-three',
    template: `
        <h3>Top</h3>
        <ng-content></ng-content>
        <h3>Bottom</h3>
    `
})

export class WidgetThree {}