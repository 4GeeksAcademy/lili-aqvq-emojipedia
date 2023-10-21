import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

//1. Create Emoji Component
//2. Create props to replace hardcoded data.
//3. Map through the emojipedia array and render Emoji components. Import emojipedia const.

function createEntry(emojiTerm) {
	return (<Emoji
		key={emojiTerm.id}
		emoji={emojiTerm.emoji}
		name={emojiTerm.name}
		description={emojiTerm.meaning}
	/>
	);
}

function Home() {
	return (
		<div>
			<h1>
				<span>emojipedia</span>
			</h1>

			<dl className="dictionary">
				{emojipedia.map(createEntry)}
			</dl>
		</div>
	);
}

export default Home;
