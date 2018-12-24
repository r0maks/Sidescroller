var sketch = (p: p5) => {

    const robot = new Robot();

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
    }
}

var sketchP = new p5(sketch);