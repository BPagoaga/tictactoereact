import React from 'react';
import {render} from 'react-dom';
//import AwesomeComponent from './AwesomeComponent.jsx';
// The Board, containing all the cells
import Board from './Board.jsx';

(function(){

	class TicTacToe extends React.Component {

		constructor(props){
			super(props);
		}

	  render () {
	    return(
	      <div className="row">
	        <Board />
	      </div>
	    );
	  }
	}


	render(<TicTacToe />, document.getElementById('app'));

})();





