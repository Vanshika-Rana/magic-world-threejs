/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Conrad Justin (https://sketchfab.com/ConradJustin)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/magical-help-73fcb7197ba441419c768105c7db5d17
Title: Magical Help
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import magicWorld from "../assets/3d/magical_help.glb";
import { a } from "@react-spring/three";

const Magic = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
	const { nodes, materials } = useGLTF(magicWorld);
	const magicRef = useRef();
	const { gl, viewport } = useThree();
	const lastX = useRef(0);
	const rotationSpeed = useRef(0);
	const dampingFactor = 0.95;

	const handlePointerDown = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setIsRotating(true);

		const clientX = e.touches ? e.touches[0].clientX : e.clientX;
		lastX.current = clientX;
	};
	const handlePointerUp = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setIsRotating(false);
	};
	const handlePointerMove = (e) => {
		e.stopPropagation();
		e.preventDefault();

		if (isRotating && magicRef.current) {
			const clientX = e.touches ? e.touches[0].clientX : e.clientX;
			const delta = (clientX - lastX.current) / viewport.width;
			magicRef.current.rotation.y += delta * 0.01 * Math.PI;
			lastX.current = clientX;
			rotationSpeed.current = delta * 0.01 * Math.PI;
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "ArrowLeft") {
			if (!isRotating) setIsRotating(true);
			magicRef.current.rotation.y += 0.005 * Math.PI;
			rotationSpeed.current = 0.007;
		} else if (e.key === "ArrowRight") {
			if (!isRotating) setIsRotating(true);
			magicRef.current.rotation.y -= 0.005 * Math.PI;
			rotationSpeed.current = -0.007;
		}
	};
	const handleKeyUp = (e) => {
		if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
			setIsRotating(false);
		}
	};
	useFrame(() => {
		if (!isRotating) {
			rotationSpeed.current *= dampingFactor;
			if (Math.abs(rotationSpeed.current) < 0.001) {
				rotationSpeed.current = 0;
			}
		} else if (magicRef.current) {
			const rotation = magicRef.current.rotation.y;
			/**
			 * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
			 * The goal is to ensure that the rotation value remains within a specific range to
			 * prevent potential issues with very large or negative rotation values.
			 *  Here's a step-by-step explanation of what this code does:
			 *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
			 *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
			 *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
			 *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
			 *     This is done to ensure that the value remains positive and within the range of
			 *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
			 *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
			 *     modulo operation to the value obtained in step 2. This step guarantees that the value
			 *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
			 *     circle in radians.
			 */
			const normalizedRotation =
				((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

			// Set the current stage based on the island's orientation
			switch (true) {
				case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
					setCurrentStage(4);
					break;
				case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
					setCurrentStage(3);
					break;
				case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
					setCurrentStage(2);
					break;
				case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
					setCurrentStage(1);
					break;
				default:
					setCurrentStage(null);
			}
		}
	});
	useEffect(() => {
		const canvas = gl.domElement;
		canvas.addEventListener("pointerdown", handlePointerDown);
		canvas.addEventListener("pointerup", handlePointerUp);
		canvas.addEventListener("pointermove", handlePointerMove);
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			canvas.removeEventListener("pointerdown", handlePointerDown);
			canvas.removeEventListener("pointerup", handlePointerUp);
			canvas.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);
	return (
		<a.group ref={magicRef} {...props}>
			<group rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.371}>
				<group rotation={[-Math.PI, 0, 0]} scale={0.01}>
					<group rotation={[0, 0, -Math.PI / 2]} scale={100}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.foliage_baked_flowers_0.geometry}
							material={materials.baked_flowers}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.foliage_baked_flowers_0_1.geometry}
							material={materials.baked_flowers}
						/>
					</group>
					<group rotation={[0, 0, -Math.PI / 2]} scale={100}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.ropes_baked_rope_0.geometry}
							material={materials.baked_rope}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.ropes_baked_rope_0_1.geometry}
							material={materials.baked_rope}
						/>
					</group>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.oreada_baked_oreada_0.geometry}
						material={materials.baked_oreada}
						rotation={[0, 0, -Math.PI / 2]}
						scale={100}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.tree_baked_tree_0.geometry}
						material={materials.baked_tree}
						rotation={[0, 0, -Math.PI / 2]}
						scale={100}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.rocks_baked_rocks_0.geometry}
						material={materials.baked_rocks}
						rotation={[0, 0, -Math.PI / 2]}
						scale={100}
					/>
				</group>
			</group>
		</a.group>
	);
};

export default Magic;
