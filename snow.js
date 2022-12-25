export class Snow {
    constructor(x, y, radius, color, speedx) {
        this.x = x;
        this.y = y;
        this.speedx = speedx
        this.speedy = Math.random() * radius / 10 + 1;
        this.radius = radius;
        this.color = color;
    }

    calculateSpeedY() {
        if (this.stageWidth >= this.stageHeight) {
            this.speedy = (Math.random() * 2 + 1) * this.stageWidth / 1680;
        } else {
            this.speedy = (Math.random() * 2 + 1) * this.stageHeight / 1680;
        }
    }

    draw(ctx) {
        this.y += this.speedy;
        this.x += this.speedx;

        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = this.radius;
        ctx.moveTo(this.x, this.y);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

}