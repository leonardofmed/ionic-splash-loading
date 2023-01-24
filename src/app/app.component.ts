import { Component } from '@angular/core';
import { SplashScreen } from "@capacitor/splash-screen";

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	constructor() {

		// Show the default splash for two seconds and then automatically hide it:
		SplashScreen.show({
			showDuration: 2000,
			autoHide: true,
		});
	}
}
