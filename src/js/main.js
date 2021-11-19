import * as PIXI from "pixi.js";
import Vector from "victor";
import Boid from "./Boid";

const app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight, antialias: true });
window.app = app;
document.body.appendChild(app.view);

let graphics = new PIXI.Graphics()
	.beginFill(0x44FFFF)
	.moveTo(5, 0)
	.lineTo(10, 15)
	.lineTo(0, 15)
	.lineTo(5, 0)
	.endFill();
window.tex = app.renderer.generateTexture(graphics);

let boids = Array(200).fill().map(() => {
	let position = randomVector().multiply(new Vector(window.innerWidth, window.innerHeight));
	let rotation = Math.random() * Math.PI * 2;
	return new Boid(position, rotation).addTo(app.stage);
});

function randomVector() {
	return new Vector(Math.random(), Math.random());
}
