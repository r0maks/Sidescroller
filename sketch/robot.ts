class Robot {
    public color = [69, 174, 180];
    public center = new Point(500, 300);
    public static GAP = 60;
    draw(p: p5): void {
        p.fill(this.color);
        p.stroke(this.color);

        // legs
        p.rect(this.center.x, this.center.y, 40, 100);
        p.rect(this.center.x + Robot.GAP, this.center.y, 40, 100);

        // torso
        p.rect(this.center.x, this.center.y - 60 - Robot.GAP, 100, 100);

        // head
        p.rect(this.center.x + 30, this.center.y - 120 - Robot.GAP, 40, 40);

    }
}