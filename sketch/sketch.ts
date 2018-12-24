var sketch = (p: p5) => {

    const robot = new Robot(new Point(100, 300));
    const robot2 = new Robot(new Point(300, 600));

    p.preload = () => {

    }
    
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    }
    
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
    
    p.draw = () => {
        p.background(100);
        robot.draw(p);
        robot2.draw(p);
    }
}

var sketchP = new p5(sketch);