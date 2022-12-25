import {
    Snow
} from './snow.js';

export class SnowController {
    constructor() {
        this.items = [];
        this.color = ['#787878', '#787878', '#6f6f6f', '#2a2a2a'];
        this.cur = 0;
        this.speedx = (Math.random() * 2 - 1) / 10;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    calculateRadius() {
        let baseRadius = 0;

        if (this.stageWidth >= this.stageHeight) {
            baseRadius = this.stageWidth / 800;
        } else {
            baseRadius = this.stageHeight / 800;
        }

        this.radius = [baseRadius, baseRadius * 1.5, baseRadius * 2, baseRadius * 2.5, baseRadius * 3];
    }

    addSnow() {
        const randColor = Math.floor(Math.random() * this.color.length);
        const randRadius = Math.floor(Math.random() * this.radius.length);
        const randx = Math.random() * (this.stageWidth + 100) - 50;

        this.items.push(
            new Snow(randx, this.radius[randRadius], this.color[randColor], this.speedx)
        );
    }

    draw(ctx) {
        this.cur += 1;

        if (this.cur > 4) {
            this.cur = 0;
            this.calculateRadius();
            this.addSnow();
        }

        this.items.sort(function (a, b) {
            if (a.color < b.color) {
                return 1;
            }
            if (a.color > b.color) {
                return -1;
            }
            return 0;
        });

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