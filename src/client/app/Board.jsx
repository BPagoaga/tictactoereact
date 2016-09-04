import React from 'react';
// The cell component
import Cell from './Cell.jsx';
// The menu
import Menu from './Menu.jsx';
// The Modal
import Modal from './Modal.jsx';
// component called when there is a winner
import Winner from './Winner.jsx';


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
      winner: props.initialWinner
    };

    this.cellClick = this.cellClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.testWin = this.testWin.bind(this);
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

    return condition1 || condition2 || condition3 || condition4;

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
    let cells = this.state.cells;
    //If the selected position is already filled, return to prevent it being replaced.
    if ( (cells[position] === 'x' || cells[position] === 'o' || this.state.winner) ) return;
    cells[position] = player;
    this.setState({cells: cells, turn: player === 'o' ? 'x' : 'o'});

    if(this.testWin(this.state.cells, this.state.turn)){
      this.hasWinner();
    }
  }

  hasWinner(){
    this.setState({winner: true});
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
        <Menu resetGame={this.resetGame} turn={this.state.turn} win={this.state.winner} />
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
