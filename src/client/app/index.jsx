import React from 'react';
import {render} from 'react-dom';
//import AwesomeComponent from './AwesomeComponent.jsx';

// class App extends React.Component {
//   render () {
//     return(
//     	<div>
//         <p> Hello React!</p>
//         <AwesomeComponent />
//       </div>
//     );
//   }
// }

//render(<App/>, document.getElementById('app'));


(function(){
// create the board
var Board = React.createClass({
  getInitialState: function() {
    return {
      //Initial state of the game board.
      cells:  [
        '', '', '',
        '', '', '',
        '', '', ''
      ],
      //O always have the first go.
      turn: "o"
    };
  },
  //choosing X or O

  turn : $('#setPlayerModal button').click(function(){
      return $(this).val();
    }),

  resetGame: function(){
    this.setState(this.getInitialState());
  },
  //Cell click method to modify the state of the tiles array
  cellClick: function(position, player) {
    var cells = this.state.cells;
    //If the selected position is already filled, return to prevent it being replaced.
    if ( (cells[position] === 'x' || cells[position] === 'o') ) return;
    cells[position] = player;
    this.setState({cells: cells, turn: player === 'o' ? 'x' : 'o'});
  },
  render: function() {
    return <div id="game" className="container"><div className="row">
      {this.state.cells.map(function(cell,pos){
                    return (
                        <Cell status={cell} keyy={pos} turn={this.state.turn} cellClick={this.cellClick} />
                );},this)}
                </div>
      <div className="row">
        <Menu resetGame={this.resetGame} turn={this.state.turn} />
      </div>
    </div>;

  }//end render
});//end Board

//The cell component (green)
var Cell = React.createClass({
  //The method to handle when a user clicks on the cell, calls the cellClick method on the parent component that is referenced in the props object.

  clickHandler: function() {
    this.props.cellClick(this.props.keyy, this.props.turn);
  },
  render: function() {
    return <div className={this.props.status === '' ? 'col-xs-4 cell' : 'col-xs-4 cell status-' + this.props.status} onClick={this.clickHandler}>{this.props.status}</div>;
  }
});//end cell

//The menu (blue)
var Menu = React.createClass({
  clickHandler: function(){
    this.props.resetGame();
  },
  render: function() {
    return <nav id='menu' onClick={this.clickHandler} className="text-center"><a id="reset" className="btn btn-warning">Reset</a><br/><p>It's {this.props.turn.toUpperCase()}'s turn !</p></nav>;
  }
});// end menu


// ReactDOM.render(
//   <Board />,
//   document.getElementById('app')
// );
render(<Board/>, document.getElementById('app'));
})();





