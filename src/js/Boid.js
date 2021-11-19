import * as PIXI from "pixi.js";
import RenderedObject from "./RenderedObject";
import Vector from "victor";

export default class Boid extends RenderedObject {

	/**
	 * @param {Vector} [position]
	 * @param {number} [rotation]
	 */
	constructor(position, rotation) {
		super(new PIXI.Sprite(window.tex), position, rotation);
	}

	update(closeBoids) {

	}

	/**
	 * @param {PIXI.Container} container
	 * @return {this}
	 */
	addTo(container) {
		container.addChild(this.container);
	}

}
