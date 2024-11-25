let game = new Game(getRoomGrid());
// const loadButton = $("#load-map-btn");
// const templateInput = $("#template-json-input")
// const reader = new FileReader();
// let fileLoaderEvent;


// function handleEvent(event) {
// 	console.log("IN HERE: ", event)
// 	const str = event.target.result.split(",");

// 	try {
// 		const data = JSON.parse(atob(str[str.length - 1]));
// 		console.log(data);
// 		// template = data;
// 		// console.log(template)
// 		// buildGrid();
// 		// game = new Game(getRoomGrid());
// 		game = null;
// 	} catch (error) {
// 		console.error("Error parsing JSON:", error);
// 	}

// }

// reader.addEventListener("load", handleEvent);

// templateInput.change((e) => {
// 	fileLoaderEvent = e.target.files[0];
// })

// loadButton.click(async (e) => {
// 	e.preventDefault();
//     reader.readAsDataURL(fileLoaderEvent);
// })