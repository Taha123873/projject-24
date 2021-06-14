const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, stone, iron, rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    stone = new Stone(100, 100, 45, 20);
    iron = new Iron(50, 100, 40, 40);
    rubber = new Rubber(110, 100);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

var options={
    restitution:0.3,
    friction:5,
    density:1
}
var options={
    'resttitution':0.8,
    'friction':0.9,
    'density':12
}
var options={
    'resttitution':0.8,
    'friction':3,
    'density':30
}
    plane.display();
    hammer.display();

    stone.display();
    iron.display();
    rubber.display();
}