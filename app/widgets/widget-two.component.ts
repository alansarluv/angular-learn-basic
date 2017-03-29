import { Component, Input } from "@angular/core";

@Component({
    selector: 'widget-two',
    template: `
        <div>This is widget number two</div>
        <div>{{testInput}}</div>
        <hr>
    `
})

export class WidgetTwo {
    @Input() testInput;
}