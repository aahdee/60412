let stitches = [];
let editorState = 'CHAIN';
let gridSize = 10;

let stateToStitchType = {
  'CHAIN': StitchType.Chain,
  'SINGLE': StitchType.Single,
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  grid();
  for(let s of stitches){
    if(s.type == StitchType.Chain){
      square(s.x,s.y,10);
    }
    else if(s.type == StitchType.Single){
      circle(s.x,s.y,10);

    }
    if (s.prev) line(s.x, s.y, s.prev.x,s.prev.y)
  }

  ui();
  
}
function snapToGrid(val, canvasSize) {
  let cellSize = canvasSize / gridSize;
  return round(val / cellSize) * cellSize;
}

function mouseClicked(){
  if (!(editorState == "FREEMODE")){
    let sx = snapToGrid(mouseX, width);
    let sy = snapToGrid(mouseY, height);
    if (stitches.length == 0){
      stitches.push(new Stitch(stateToStitchType[editorState], sx, sy, null, null));
    }
    else{
      stitches.push(new Stitch(stateToStitchType[editorState], sx, sy, stitches.at(-1), null));
      stitches.at(-2).next = stitches.at(-1);
    }
  }
}

function keyPressed(){
  if (key === 'z'){
    editorState = "CHAIN";
  }
  else if (key === 'x'){
    editorState = "SINGLE";
  }
  else if (key == 'f'){
    editorState = "FREEMODE";
  }

}

function ui(){
  text(editorState, 10,10);

  switch(editorState){
    case "CHAIN":
      circle(snapToGrid(mouseX, width), snapToGrid(mouseY, height), 20);
      break;
    case "SINGLE":
      circle(snapToGrid(mouseX, width), snapToGrid(mouseY, height), 20);
      break;
  }
}
function grid(){
  push();
    stroke(200);
    for (let i = 1; i < gridSize; i++ ){
      line(0,i/gridSize * width, height, i/gridSize* width)
    }
    for (let i = 1; i < gridSize; i++ ){
      line(i/gridSize * height,0,  i/gridSize* height, width)
    }
  pop();
}