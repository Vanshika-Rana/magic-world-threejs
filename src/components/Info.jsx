import React from "react";

const renderContent = {
	1: (
		<div class='max-w-md mx-auto bg-purple-300 bg-opacity-75 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center text-center'>
			<h2 class='text-3xl font-semibold mb-4'>
				The Whispering Grove 🌳✨
			</h2>
			<p class='text-gray-900 leading-relaxed'>
				Embark on a journey to the mystical Whispering Grove, where
				ancient trees weave tales with the wind. Legends speak of
				secrets whispered by the leaves—listen closely, and you may
				uncover the enchanting stories hidden within the rustle of
				foliage.
			</p>
		</div>
	),
	2: (
		<div class='max-w-md mx-auto bg-purple-300 bg-opacity-75 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center text-center'>
			<h2 class='text-3xl font-semibold mb-4'>
				Skyborne Lanterns Festival 🏮🎉
			</h2>
			<p class='text-gray-900 leading-relaxed'>
				Join the annual Skyborne Lanterns Festival, where the night sky
				is adorned with a myriad of glowing lanterns. Each lantern
				carries the hopes and dreams of the inhabitants, creating a
				dazzling spectacle.
			</p>
		</div>
	),
	3: (
		<div class='max-w-md mx-auto bg-purple-300 bg-opacity-75 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center text-center'>
			<h2 class='text-3xl font-semibold mb-4'>
				Timeless Library of Arcane Knowledge 📚🕰️
			</h2>
			<p class='text-gray-900 leading-relaxed'>
				Journey to the Timeless Library, where ancient tomes and magical
				scrolls reveal the secrets of forgotten spells and the history
				of the magical realm. Beware of mischievous book imps!
			</p>
		</div>
	),
	4: (
		<div class='max-w-md mx-auto bg-purple-300 bg-opacity-75 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center text-center'>
			<h2 class='text-3xl font-semibold mb-4'>
				Pegasus Parade in the Celestial Meadows 🦄🌈
			</h2>
			<p class='text-gray-900 leading-relaxed'>
				Witness the breathtaking Pegasus Parade in the Celestial
				Meadows, where majestic winged creatures prance through fields
				of vibrant flowers. Each Pegasus dons a unique coat of colors,
				creating a mesmerizing spectacle.
			</p>
		</div>
	),
};
const Info = ({ currentStage }) => {
	return renderContent[currentStage] || null;
};

export default Info;
