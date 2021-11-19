import Vector from "victor";

export default class RenderedObject {

	/**
	 * @param {PIXI.Container} container
	 * @param {Vector} position
	 * @param {number} rotation
	 */
	constructor(container, position, rotation) {
		this.container = container;
		this.position = position || new Vector(0, 0);
		this.container.rotation = rotation || 0;
	}

	/** @type {PIXI.Container} */
	container;

	get position() {
		return Vector.fromObject(this.container.position);
	}
	set position(vector) {
		this.container.position = vector.subtract(this.size.divideScalar(2)).toObject();
	}

	get rotation() {
		return this.container.rotation;
	}
	set rotation(number) {
		this.container.rotation = number;
	}

	get scale() {
		return Vector.fromObject(this.container.scale);
	}
	set scale(vector) {
		this.container.scale = vector.toObject();
	}

	get size() {
		return new Vector(this.container.width, this.container.height);
	}
	set size(vector) {
		this.container.width = vector.x;
		this.container.height = vector.y;
	}
}
