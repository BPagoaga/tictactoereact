import React from 'react';
// The cell component
import Cell from './Cell.jsx';
// The menu
import Menu from './Menu.jsx';


// create the board
class Board extends React.Component {
  //getInitialState:
  constructor (props) {
    super(props); // ?

    this.state = {
      //Initial state of the game board.
      cells:  props.initialCells,
      //O always have the first go.
      turn: props.initialTurn,
      singlePlayer: false,
      winner: props.initialWinner
    };

    this.cellClick = this.cellClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.testWin = this.testWin.bind(this);
    this.moveAi = this.moveAi.bind(this);
    this.setSingle = this.setSingle.bind(this);
  }

  //choosing X or O

  // turn () {$('#setPlayerModal button')
  //   this.setState();
  //   return $(this).val();
  // })
  //
  testWin(arr, turn){

    let boardWidth = Math.sqrt(arr.length), // Board width
        newArr = [];

    newArr = addDim(arr, boardWidth);

    // test horizontally
    var condition1 = testAlignItems(newArr, turn);

    // test diagonal 1
    var condition3 = testDiagonalItems(newArr, turn);

    // permute items
    let permutedArr = permutation(newArr);
    let switchedArr = switched(newArr);

    // test vertically
    var condition2 = testAlignItems(permutedArr, turn);

    // test diagonal 2
    var condition4 = testDiagonalItems(switchedArr, turn);

    if(condition1 || condition2 || condition3 || condition4) {
      this.setState({winner: true});
      setTimeout(
        function(){
          this.resetGame();
        }.bind(this),
        2000
      );
    }
  }

  resetGame (){
    this.setState({
      cells : ['','','','','','','','',''],
      turn : 'o',
      winner: false
    });
  }

  //Cell click method to modify the state of the tiles array
  cellClick (position, player) {
    var cells = this.state.cells;

    //If the selected position is already filled, return to prevent it being replaced.
    if( (cells[position] === 'x' || cells[position] === 'o' || this.state.winner) ){
      return;
    }else{
      // else we can play
      cells[position] = player;

      this.setState({cells: cells});

      // setState does not mutate this.state immediately !!!
      this.testWin(this.state.cells, this.state.turn);

      this.setState({turn: this.state.turn === 'o' ? 'x' : 'o'}, function(){
        if(this.state.singlePlayer){
          // if the mode single player is activated, we need to call the AI for the next move
          this.moveAi(cells);

        }
      });
    }
  }

  setSingle(){
    this.setState({singlePlayer: this.state.singlePlayer === true ? false : true});
    this.resetGame();
  }

  hasWinner(){
    this.setState({winner: true});
  }

  isATie(arr){
    var result = [];
    result = arr.map(isEmpty).filter(isDefined);

    if(result.length === 0){
      setTimeout(
        function(){
          this.resetGame();
        }.bind(this),
        2000
      );
    }
    return !result.length;
  }

  moveAi(arr){
    var result = [];

    // create an array of emtpy cells
    result = arr.map(isEmpty).filter(isDefined);

    // pick a random number in that array
    arr[result[Math.floor(Math.random()*result.length)]] = this.state.turn;

    this.setState({cells: arr}, function(){
      this.testWin(this.state.cells, this.state.turn);

      if(!this.state.winner){

        this.setState({turn: this.state.turn === 'o' ? 'x' : 'o'});
      }
    });
  }


  render () {
    return (
      <div id="game" className="container"><div className="row">
      {this.state.cells.map(function(cell,pos){
          return (
              <Cell status={cell} keyy={pos} turn={this.state.turn} cellClick={this.cellClick} />
        );
      },this)}
      </div>
      <div className="row">
        <Menu resetGame={this.resetGame} turn={this.state.turn} win={this.state.winner} tie={this.isATie(this.state.cells)} setSingle={this.setSingle} />
      </div>
    </div>
    );
  }//end render

}

Board.defaultProps = {
  initialCells: ['','','','','','','','',''],
  initialTurn: 'o',
  initialWinner: false
};

export default Board;
