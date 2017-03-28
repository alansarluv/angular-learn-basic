import { Component } from '@angular/core';
import { SimpleService } from "../services/services.module";

@Component({
	selector: 'home',
	templateUrl: './app/home/home.component.html'
})
export class HomeComponent {
	constructor( 
		private simpleService:SimpleService	
		) {}
}
