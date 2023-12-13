import { Canvas } from "@react-three/fiber";
import Magic from "../models/Magic";
import Bg from "../models/Bg";
import { useState } from "react";

const Home = () => {
	const [isRotating, setIsRotating] = useState(false);
	const modelScreenSize = () => {
		let screenScale = null;
		let screenPosition = [0, 0, -1.3];
		let screenRotation = [0, 5.7, 0];

		if (window.innerWidth < 768) {
			screenScale = [0.9, 0.9, 0.9];
		} else {
			screenScale = [1, 1, 1];
		}
		return [screenScale, screenPosition, screenRotation];
	};
	const [modelScale, modelPosition, modelRotation] = modelScreenSize();
	return (
		<section className='w-full h-screen '>
			<Canvas
				className={`w-full h-screen bg-transparent ${
					isRotating ? "cursor-grabbing" : "cursor-grab"
				}`}
				camera={{ near: 0.1, far: 1000 }}>
				<directionalLight position={[1, 1, 1]} intensity={2} />
				<ambientLight intensity={0.3} />
				<hemisphereLight
					skyColor='#b432fe'
					groundColor='#000000'
					intensity={1}
				/>
				<Bg />
				<Magic
					scale={modelScale}
					position={modelPosition}
					rotation={modelRotation}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
				/>
			</Canvas>
		</section>
	);
};

export default Home;
