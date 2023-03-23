document.addEventListener('DOMContentLoaded', () => {
  // code goes here
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const width = 10
  console.log(squares);
  const ScoreDisplay = document.querySelector('#score')
  const strtBtn = document.querySelector('start-button')   
  //The Tetrominoes
  const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  let currPos = 4
  let currRot = 0
  // select a tetramino randomly
  let random = Math.floor(Math.random()*theTetrominoes.length)
  let current = theTetrominoes[random][currRot]
  console.log(theTetrominoes);

  function draw() {
    squares[currPos].classList.add('curr')
    current.forEach(index => {
        squares[currPos + index].classList.add('tetramino')
    })
  }

  // undraw the tetramino
  function undraw() {
    current.forEach(index => {
        squares[currPos + index].classList.remove('tetramino')
    })
  }

  timerId = setInterval(moveDown,500)
  function moveDown(params) {
    // console.log(`${current.forEach(index => console.log(currPos+index))}  ` + current.some(index => squares[currPos + index + width].classList.contains('taken')));
    undraw()
    currPos += width
    draw()
    freeze()
  }

  function freeze() {
    if(current.some(index => squares[currPos + index + width].classList.contains('taken'))){
        // console.log(current.forEach(index => {return currPos + index + width}));
        console.log(currPos);
        console.log(current);
        current.forEach(index => squares[currPos+index]).classList.add('taken')
        random = Math.floor(Math.random() * theTetrominoes.length)
        current = theTetrominoes[random][currRot]
        currPos = 4
        draw()
    }
  }
  draw()
//   undraw()
})