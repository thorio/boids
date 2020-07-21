import * as PIXI from "pixi.js";

const app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
document.body.appendChild(app.view);

let graphics = new PIXI.Graphics();
graphics.beginFill(0x44FFFF);
graphics.drawCircle(8, 8, 8);
graphics.endFill();

app.stage.addChild(graphics);
