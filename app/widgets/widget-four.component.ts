import { Component, ViewChild, Renderer } from "@angular/core";

@Component({
    selector: 'widget-four',
    template: `
        <p>This is input widget four</p>
        <input #inputWidget type="text">
    `
})

export class WidgetFour {
    @ViewChild('inputWidget') inputz;

    constructor(private renderer:Renderer){}
    ngAfterViewInit(){
        this.renderer.invokeElementMethod(
            this.inputz.nativeElement,
            'focus',
            []
        )
    }
}