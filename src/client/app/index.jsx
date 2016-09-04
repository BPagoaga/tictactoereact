import React from 'react';
import {render} from 'react-dom';
//import AwesomeComponent from './AwesomeComponent.jsx';
// The Board, containing all the cells
import Board from './Board.jsx';

(function(){

	class TicTacToe extends React.Component {
		constructor(props){
			super(props);

		// 	this.state = {
		// 		singlePlayer: true
		// 	};

		// 	this.isSingle = this.isSingle.bind(this);
		}

		// isSingle() {
		// 	this.setState({singlePlayer: true});
		// }

	  render () {
	    return(
	    	<Board />
	    );
	  }
	}


	render(<TicTacToe />, document.getElementById('app'));

})();





