
let mic;
let startMic;
let stopMic;
let volHistory = [];


function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  startMic = createButton('Start');
  startMic.mousePressed( () => {
      mic.start()
    })

  stopMic = createButton('Stop')
  stopMic.mousePressed( () => {
    mic.stop()
  })
}
preload = () => console.log('load')
function draw() {
  background(0)
  vol = mic.getLevel()
  volHistory.push(vol)
  stroke(100, 0, 230);
  strokeWeight(2)
  noFill()
  beginShape();
  for(let i = 0; i < volHistory.length; i++){
    let y = map(volHistory[i], 0, 1, height / 2, 0);
    vertex(i,y)
  }
  endShape();

  if(volHistory.length > width - 50){
    volHistory.splice(0,1)
  }

  stroke(255, 0, 0)
  line(volHistory.length, 0, volHistory.length, width)
}
