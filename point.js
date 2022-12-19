export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 0.1;
        this.color = "#ffffff";
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
    }
}