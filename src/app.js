new Vue({
	el: "#app",
	components: {
		Flashcard
	},
	data: {
		message: "hello"
	},
	template: `
		<div>
			<div>The message is: {{message}}</div>
			<div><flashcard/></div>
			<div><flashcard/></div>
		</div>
	`
});