import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-splash',
	templateUrl: './splash.page.html',
	styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

	public status: ProgressStatus = {
		progress: 0,
		message: "Carregando..."
	};

	private itemsToLoad: LoadingItem[] = [
		{
			name: "Carregando...",
			time: 2000
		},
		{
			name: "item1 (3,5s)",
			time: 3500
		},
		{
			name: "item2 (1,5s)",
			time: 1500
		},
		{
			name: "item3 (3s)",
			time: 3000
		},
	]

	constructor(
		private navController: NavController
	) {}

	ngOnInit() {
		this.loadItems(this.itemsToLoad).then(() => {
			// Go to next page using navigateRoot because we don't want to return to this page and reload all data unnecessarily.
			this.navController.navigateRoot("home", {animated: true, animationDirection: "forward"});
		});
	}

	/**
	 * "Load" an item and return after it has been loaded
	 */
	private loadItem(item: LoadingItem): Promise<void> {
		return new Promise(resolve => {
			setTimeout(() => {
				console.log("Item " + item.name + " finished was loaded");
				resolve();
			}, item.time);
		});
	}

	private async loadItems(items: LoadingItem[]): Promise<void> {
		let itemsToLoad: number = this.itemsToLoad.length;
		let pos: number = 1;

		for (const i of items) {
			this.status.message = i.name;
			await this.loadItem(i);
			this.status.progress = (pos / itemsToLoad);
			console.log("this.status.progress: ", this.status.progress);
			pos++;
		}
	}
}

interface ProgressStatus {
	progress: number
	message: string
}

/**
 * @param name Item's name
 * @param time How long it will take to load in ms
 */
interface LoadingItem {
	time: number
	name: string
}