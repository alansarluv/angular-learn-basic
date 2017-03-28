import { Component, Input } from "@angular/core";

@Component({
    selector: 'widget-one',
    template: `
        <div *ngIf="selected">This is widget number one</div>
        <div>{{messageService}}</div>
        <br> <hr>
    `
})

export class WidgetOne {
    selected = true;
    @Input() messageService;
}