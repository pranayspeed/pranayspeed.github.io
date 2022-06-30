
function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  function random_matrix(no_rows, no_cols, no_obs) {
  
    var arr = new Array(no_rows * no_cols);
    for (var i = 0; i < no_rows * no_cols; i++) {
      if (i < no_obs) {
        arr[i] = 1;
      } else {
        arr[i] = 0;
      }
    }
    shuffleArray(arr);
    var start_position = {
      'x': 0,
      'y': 0
    };
    //var rand_pos = Math.random(0, (no_rows * no_cols - no_obs) - 1);
    var rand_pos = Math.floor(Math.random() * (no_rows * no_cols - no_obs));
    var matrix = new Array(no_rows);
    var count = 0;
  
    for (var i = 0; i < no_rows; i++) {
      matrix[i] = new Array(no_cols);
      for (var j = 0; j < no_cols; j++) {
        matrix[i][j] = arr[i * no_cols + j];
        if (arr[j] == 0) {
          if (count == rand_pos) {
            start_position = {
              'x': j,
              'y': i
            };
          }
          count++;
        }
      }
    }
    return [matrix, start_position];
  }
  
  
  let matrix;
  let start_position;
  let w;
  let no_rows, no_cols, no_obs;
  let isFinished, isStarted;
  let robot;
  let cleaner;
  
  function setup() {
    createCanvas(400, 400);
    noStroke();
    background(204);
    w = 20;
    no_rows = 10;
    no_cols = 10;
    no_obs = 15;
    start_direction = Math.floor(Math.random() * 4);
    [matrix, start_position] = random_matrix(no_rows, no_cols, no_obs);
    isFinished = false;
    isStarted = false;
    robot = new Robot(matrix, start_position, start_direction);
    cleaner = new Cleaner(robot);
    cleaner.loggable = false;
    console.log('Initializing to start');
    
    matrix[start_position['x']][start_position['y']] = 1;

    // Inputs
    inputrow = createInputBox(270, 'Input row num:',no_rows);
    inputcol = createInputBox(290, 'Input col num:',no_cols);
    inputobst = createInputBox(310, 'Input obst num:',no_cols);

    button = createButton('submit');
    button.position(inputobst.x, 350);
    button.mousePressed(startRun);

    textAlign(CENTER);
    textSize(50);

  }
  
  function draw() {
    background(255);    
     if(cleaner.move()==false)
     {
      cleaner.fill_observed_map ();
     }
  }


  function createInputBox(stPixel, text, value)
  {
    input = createInput();
    input.position(150, stPixel+10);
    input.value(value);
    tmplbl = createElement('p', text);
    tmplbl.position(20, stPixel);
    return input;
  }

  function startRun() {

    w = 20;
    no_rows = int(inputrow.value());
    no_cols = int(inputcol.value());
    no_obs = int(inputobst.value());
    start_direction = Math.floor(Math.random() * 4);
    [matrix, start_position] = random_matrix(no_rows, no_cols, no_obs);

    robot = new Robot(matrix, start_position, start_direction);
    cleaner = new Cleaner(robot);
    cleaner.loggable = false;
    console.log('Initializing to start');
    
    matrix[start_position['x']][start_position['y']] = 1;

    isStarted=true;

  }
  