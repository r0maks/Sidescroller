class Robot {
    public color = [69, 174, 180];
    public position = new Point(500, 300);
    public static GAP = 60;

    constructor(start: Point) {
        if (start) {
            this.position = start;
        }
    }
    // TODO: track robot leg positions or mode?
    draw(p: p5): void {
        p.fill(this.color);
        p.stroke(this.color);

        // legs l,r
        p.rect(this.position.x, this.position.y, 40, 100);
        p.rect(this.position.x + Robot.GAP, this.position.y, 40, 100);

        // torso
        p.rect(this.position.x, this.position.y - (Robot.GAP * 2), 100, 100);

        // head
        p.rect(this.position.x + (Robot.GAP / 2), this.position.y - (Robot.GAP * 3), 40, 40);
    }

    walkRight(): void {
        this.position.x = this.position.x + 20;
    }
}