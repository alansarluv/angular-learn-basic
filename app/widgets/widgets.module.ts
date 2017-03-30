import { NgModule } from '@angular/core'
import { WidgetOne } from "./widget-one.component";
import { CommonModule } from "@angular/common";
import { WidgetTwo } from "./widget-two.component";
import { WidgetThree } from "./widget-three.component";
import { WidgetFour } from "./widget-four.component";

@NgModule({
    imports: [CommonModule],
    declarations: [WidgetOne, WidgetTwo, WidgetThree, WidgetFour],
    exports: [WidgetOne, WidgetTwo, WidgetThree, WidgetFour, CommonModule]
})

export class WidgetModule {}