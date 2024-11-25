persons1 = [];
persons1.push(new Person(true, "recep1", 8, 6, 1));
persons1.push(new Person(true, "soldier", 5, 5));
persons1.push(new Person(true, "voter1", 5, 9, 3));
persons1.push(new Person(true, "voter1", 5, 10, 3));
persons1.push(new Person(true, "voter1", 5, 11, 3));
persons1.push(new Person(true, "voter1", 5, 12, 3));
// persons1.push(new Person(false, "voter1", 5, 5));

instructions1 = [];
instructions1.push(new Instructions("WONDER", persons1[1]));
instructions1.push(new Instructions("VOTER_R1_VS1", persons1[2]));


let game = new Game(getRoomGrid(), persons1, instructions1);

$(canvas).mousedown(function(e){
	game.mouseClick(e)
});

// const loadButton = $("#load-map-btn");
// const templateInput = $("#template-json-input");
// const reader = new FileReader();
// let fileLoaderEvent;


// function handleEvent(event) {
// 	console.log("IN HERE: ", event);
// 	const str = event.target.result.split(",");

// 	try {
// 		const data = JSON.parse(atob(str[str.length - 1]));
// 		console.log(data);
// 		// template = data;
// 		// console.log(template);
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