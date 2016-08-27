import React from 'react';
// The cell component
import Cell from './Cell.jsx';
// The menu
import Menu from './Menu.jsx';
// The Modal
import Modal from './Modal.jsx';


// create the board
class Board extends React.Component {

  //getInitialState:
  constructor (props) {
    super(props); // ?

    this.state = {
      //Initial state of the game board.
      cells:  props.initialCells,
      //O always have the first go.
      turn: props.initialTurn
    };

    this.cellClick = this.cellClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  //choosing X or O

  // turn () {$('#setPlayerModal button')
  //   this.setState();
  //   return $(this).val();
  // })
  //

  resetGame (){
    this.setState({
      cells : ['','','','','','','','',''],
      turn : 'o'
    });
  }

  //Cell click method to modify the state of the tiles array
  cellClick (position, player) {
    let cells = this.state.cells;
    //If the selected position is already filled, return to prevent it being replaced.
    if ( (cells[position] === 'x' || cells[position] === 'o') ) return;
    cells[position] = player;
    this.setState({cells: cells, turn: player === 'o' ? 'x' : 'o'});
  }

  render () {
    return (
      <div id="game" className="container"><div className="row">
      {this.state.cells.map(function(cell,pos){
          return (
              <Cell status={cell} keyy={pos} turn={this.state.turn} cellClick={this.cellClick} />
      );},this)}
      </div>
      <div className="row">
        <Menu resetGame={this.resetGame} turn={this.state.turn} />
      </div>
    </div>
    );
  }//end render

}

Board.defaultProps = {
  initialCells: ['','','','','','','','',''],
  initialTurn: 'o'
};

export default Board;
