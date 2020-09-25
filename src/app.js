import inventoryStore from './components/inventoryStore.js';
import * as qstr from './components/qstr.js';

new Vue({
	el: "#app",
	components: {
		Flashcard
	},
	data: {
		message: `The score is ${inventoryStore.getData().score}, appid=${qstr.capitalizeFirstLetter('okokok')}.`
	},
	template: `
		<div>
			<div>The message is: {{message}}</div>
			<div><flashcard/></div>
			<div><flashcard/></div>
		</div>
	`
});