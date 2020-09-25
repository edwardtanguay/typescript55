import inventoryStore from './components/inventoryStore.js';

new Vue({
	el: "#app",
	components: {
		Flashcard
	},
	data: {
		message: `The score is ${inventoryStore.getData().score}.`
	},
	template: `
		<div>
			<div>The message is: {{message}}</div>
			<div><flashcard/></div>
			<div><flashcard/></div>
		</div>
	`
});