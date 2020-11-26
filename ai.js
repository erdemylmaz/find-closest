document.querySelector('body').style.backgroundColor = "#131313";

const HEIGHT = 500;
const WIDTH = 750;
let squareScale = 50;

carsPositionY = Math.random() * (HEIGHT - squareScale);
carsPositionX = Math.random() * (WIDTH - squareScale);
carsPosition = (carsPositionY - 25) + carsPositionX;

let list = [{
    name: "0",
    positionX: Math.random() * (WIDTH - squareScale),
    positionY: Math.random() * (HEIGHT - squareScale)
},
{
    name: "1",
    positionX: Math.random() * (WIDTH - squareScale),
    positionY: Math.random() * (HEIGHT - squareScale)
},
{
    name: "2",
    positionX: Math.random() * (WIDTH - squareScale),
    positionY: Math.random() * (HEIGHT - squareScale)
},
{
    name: "3",
    positionX: Math.random() * (WIDTH - squareScale),
    positionY: Math.random() * (HEIGHT - squareScale)
},
{
    name: "4",
    positionX: Math.random() * (WIDTH - squareScale),
    positionY: Math.random() * (HEIGHT - squareScale)
}
];

var canvas = document.querySelector("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;

var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#fff";
ctx.strokeRect(0, 0, WIDTH, HEIGHT);
ctx.fillStyle = "#fff";

// find closest

let positions = [];

list.forEach(element => {
    positions.push({id: element.name,posX: Math.floor(Math.abs(element.positionX - carsPositionX)), posY: Math.floor(Math.abs(element.positionY - carsPositionY))});
});

let karesi = [];

positions.forEach(poss => {
    karesi.push({id: poss.id, kareX: poss.posX * poss.posX, kareY: poss.posY * poss.posY});
})

let hipotenus = [];

karesi.forEach(kare  => {
    hipotenus.push({id: kare.id, hipo: Math.sqrt(kare.kareX + kare.kareY)});
})

let closest;

for(let x = 0; x < hipotenus.length; x++) {
    if(hipotenus[x].hipo == Math.min(hipotenus[0].hipo, hipotenus[1].hipo, hipotenus[2].hipo, hipotenus[3].hipo, hipotenus[4].hipo)) {
        closest = x;
    }
}

console.log(closest);

for (let x = 0; x < list.length; x++){
    ctx.fillStyle = "#999999";
    ctx.fillRect(list[x].positionX, list[x].positionY, squareScale, squareScale);
    ctx.textAlign = "center";
    ctx.fillText(`${x}`, list[x].positionX, list[x].positionY);
};

ctx.strokeRect(carsPositionX, carsPositionY, 25, 25);
