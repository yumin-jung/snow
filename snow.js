export class Snow {
    constructor(x, y, radius, color, speedx) {
        this.x = x;
        this.y = y;
        this.speedx = speedx
        this.speedy = Math.random() * 2 + 1;
        this.radius = radius;
        this.color = color;
    }

    draw(ctx) {
        this.y += this.speedy;
        this.x += this.speedx;

        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = this.radius * 1.5;
        ctx.moveTo(this.x, this.y);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

}