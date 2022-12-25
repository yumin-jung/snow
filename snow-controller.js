import {
    Snow
} from './snow.js';

export class SnowController {
    constructor() {
        this.items = [];
        this.color = ['#787878', '#787878', '#6f6f6f', '#2a2a2a'];
        this.radius = [4, 8, 8, 12, 12];
        this.cur = 0;
        this.speedx = (Math.random() * 2 - 1) / 10;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    loaded() {
        this.isLoaded = true;
        this.addSheep();
    }

    addSnow() {
        if (this.items.length <= 30) {
            const randColor = Math.floor(Math.random() * 4);
            const randRadius = Math.floor(Math.random() * 5);
            const randx = Math.floor(Math.random() * this.stageWidth);

            this.items.push(
                new Snow(randx, 0, this.radius[randRadius], this.color[randColor], this.speedx)
            );
        }
    }

    draw(ctx) {
        this.cur += 1;
        if (this.cur > 16) {
            this.cur = 0;
            this.addSnow();
        }

        for (let i = this.items.length - 1; i >= 0; i--) {
            const item = this.items[i];
            if (item.y > this.stageHeight) {
                this.items.splice(i, 1);
            } else {
                item.draw(ctx);
            }
        }
    }
}