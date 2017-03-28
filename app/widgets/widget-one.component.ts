import { Component } from "@angular/core";

@Component({
    selector: 'widget-one',
    template: `
        <div *ngIf="selected">This is widget number one</div>
    `
})

export class WidgetOne {
    selected = true;
}