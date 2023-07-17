import ChatBot from "./components/ChatBot";
import { Params } from "./types/Params";

function App() {

	// Serves as an example flow used during the development phase - covers all possible attributes in a block.
	// also covers various use cases/types
	const flow = {
		start: {
			message: "Hello! What is your name?",
			path: "ask_age_group",
		},
		ask_age_group: {
			message: (params: Params) => `Hey ${params.userInput}! Nice to meet you, what is your age group?`,
			options: ["child", "teen", "adult"],
			chatDisabled: true,
			path: () => "ask_math_question",
		},
		ask_math_question: {
			message: (params: Params) => {
				if (params.prevPath == "incorrect_answer") {
					return;
				}
				return `I see you're a ${params.userInput}. Let's do a quick test! What is 1 + 1?`
			},
			path: (params: Params) => {
				if (params.userInput != "2") {
					return "incorrect_answer"
				} else {
					return "ask_favourite_color";
				}
			},
		},
		ask_favourite_color: {
			message: "Great Job! What is your favourite color?",
			path: "ask_favourite_pet"
		},
		ask_favourite_pet: {
			message: "Interesting! Pick any 2 pets below.",
			checkBoxes: {items: ["Dog", "Cat", "Rabbit"], max: 1},
			function: (params: Params) => alert(`You picked: ${JSON.stringify(params.userInput)}!`),
			path: "ask_height",
		},
		ask_height: {
			message: "What is your height (cm)?",
			path: (params: Params) => {
				if (isNaN(Number(params.userInput))) {
					params.injectMessage("Height needs to be a number!");
					return;
				}
				return "ask_weather";
			}
		},
		ask_weather: {
			message: "What's my favourite color? Click the button below to find out my answer!",
			render: (
				<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
					<button 
						onClick={() => alert("Black!")}>
						Click me!
					</button>
				</div>
			),
			function: (params: Params) => params.openChat(false),
			path: (params: Params) => {
				if (params.userInput.toLowerCase() != "black") {
					return "incorrect_answer"
				} else {
					return "close_chat";
				}
			},
		},
		close_chat: {
			message: "I went into hiding but you found me! Ok tell me, what's your favourite food?",
			path: "end"
		},
		end: {
			message: (params: Params) => `${params.userInput}? Interesting. Thank you for sharing! See you again!`,
			path: "loop"
		},
		loop: {
			message: "You have reached the end of the conversation!",
			path: "loop"
		},
		incorrect_answer: {
			message: "Your answer is incorrect, try again!",
			transition: 0,
			path: (params: Params) => params.prevPath
		},
	}

	return (
		<div className="App">
			<header className="App-header">
				<div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: `calc(20vh)`}}>
					<ChatBot
						flow={flow}
						options={{
							audio: {disabled: false},
							chatInput: {botDelay: 1000},
							userBubble: {showAvatar: true},
							botBubble: {showAvatar: true},
							voice: {disabled: false}
						}}
					></ChatBot>
				</div>
			</header>
		</div>
	);
}

export default App;
