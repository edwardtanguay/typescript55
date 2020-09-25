
const flashcardComponent = {
	data: function () {
		return {
			front: 'house',
			back: 'Haus'
		}
	},
	template: '<div><div>{{front}} / {{back}}</div></div>'
};

new Vue({
	el: "#app",
	components: {
		'flashcard-component': flashcardComponent
	},
	data: {
		message: "hello"
	},
	template: `
		<div>
			<div>The message is: {{message}}</div>
			<div><flashcard-component></flashcard-component></div>
			<div><flashcard-component></flashcard-component></div>
		</div>
	`
});