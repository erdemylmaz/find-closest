document.querySelector("body").style.backgroundColor = "black";

const HEIGHT = 500;
const WIDTH = 750;
let squareScale = 50;

carsPositionY = Math.random() * (HEIGHT - squareScale);
carsPositionX = Math.random() * (WIDTH - squareScale);
carsPosition = carsPositionY - 25 + carsPositionX;

let boxs = [
  {
    name: "0",
    positionX: Math.random() * (WIDTH - squareScale),
    positionY: Math.random() * (HEIGHT - squareScale),
    squareX: "",
    squareY: "",
    distance: "",
  },
  {
    name: "1",
    positionX: Math.random() * (WIDTH - squareScale),
    positionY: Math.random() * (HEIGHT - squareScale),
    squareX: "",
    squareY: "",
    distance: "",
  },
  {
    name: "2",
    positionX: Math.random() * (WIDTH - squareScale),
    positionY: Math.random() * (HEIGHT - squareScale),
    squareX: "",
    squareY: "",
    distance: "",
  },
  {
    name: "3",
    positionX: Math.random() * (WIDTH - squareScale),
    positionY: Math.random() * (HEIGHT - squareScale),
    squareX: "",
    squareY: "",
    distance: "",
  },
  {
    name: "4",
    positionX: Math.random() * (WIDTH - squareScale),
    positionY: Math.random() * (HEIGHT - squareScale),
    distanceX: "",
    distanceY: "",
    distanceXSqrt: "",
    distanceYSqrt: "",
    distance: "",
  },
];

var canvas = document.querySelector("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;

var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#fff";
ctx.strokeRect(0, 0, WIDTH, HEIGHT);
ctx.fillStyle = "#fff";

// find closest

var closest = {
  distance: "",
  name: "",
};
var lastClosest = "";

check = () => {
  lastClosest = closest.$name;
  // fill blanks

  carsX = carsPositionX + 12.5;
  carsY = carsPositionY + 12.5;

  boxs.forEach((box) => {
    box.distanceX = Math.abs(carsX - box.positionX);
    box.distanceY = Math.abs(carsY - box.positionY);

    box.distanceXSqrt = box.distanceX * box.distanceX;
    box.distanceYSqrt = box.distanceY * box.distanceY;

    box.distance = Math.sqrt(box.distanceXSqrt + box.distanceYSqrt);
  });

  closest = {
    distance: Math.min(
      boxs[0].distance,
      boxs[1].distance,
      boxs[2].distance,
      boxs[3].distance,
      boxs[4].distance
    ),
    $name: "",
  };
  boxs.forEach((box) => {
    if (box.distance == closest.distance) {
      closest.$name = box.name;
    }
  });
};

check();

ctx.fillStyle = "yellow";
ctx.fillRect(carsPositionX, carsPositionY, 25, 25);

drawCar = () => {
  ctx.fillStyle = "yellow";
  ctx.clearRect(carsOldX - 3, carsOldY - 3, 30, 30);
  ctx.fillRect(carsPositionX, carsPositionY, 25, 25);
};

document.addEventListener("keypress", (e) => {
  // 100 D, 115 S, 97 A, 119 W,
  if (e.keyCode == 119) {
    // W
    carsOldX = carsPositionX;
    carsOldY = carsPositionY;

    carsPositionY -= 5;
    drawCar();
  } else if (e.keyCode == 97) {
    // A
    carsOldX = carsPositionX;
    carsOldY = carsPositionY;

    carsPositionX -= 5;
    drawCar();
  } else if (e.keyCode == 115) {
    // S
    carsOldX = carsPositionX;
    carsOldY = carsPositionY;

    carsPositionY += 5;
    drawCar();
  } else if (e.keyCode == 100) {
    // D
    carsOldX = carsPositionX;
    carsOldY = carsPositionY;

    carsPositionX += 5;
    drawCar();
  }

  check();
  draw();
});

for (let x = 0; x < boxs.length; x++) {
  if (boxs[x].name != closest.$name) {
    ctx.fillStyle = "#999999";
    ctx.fillRect(
      boxs[x].positionX,
      boxs[x].positionY,
      squareScale,
      squareScale
    );
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText(`${x}`, boxs[x].positionX, boxs[x].positionY);
  } else {
    ctx.fillStyle = "red";
    ctx.fillRect(
      boxs[x].positionX,
      boxs[x].positionY,
      squareScale,
      squareScale
    );
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText(`${x}`, boxs[x].positionX, boxs[x].positionY);
  }
}

draw = () => {
  if (lastClosest != closest.$name) {
    ctx.fillStyle = "#999999";
    ctx.fillRect(
      boxs[lastClosest].positionX - 4,
      boxs[lastClosest].positionY,
      squareScale + 4,
      squareScale + 4
    );

    (ctx.fillStyle = "red"),
      ctx.fillRect(
        boxs[closest.$name].positionX - 4,
        boxs[closest.$name].positionY,
        squareScale + 4,
        squareScale + 4
      );
  }
};

draw();
