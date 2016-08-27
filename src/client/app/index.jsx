import React from 'react';
import {render} from 'react-dom';
//import AwesomeComponent from './AwesomeComponent.jsx';
// The Board, containing all the cells
import Board from './Board.jsx';

(function(){

	// class App extends React.Component {
	//   render () {
	//     return(
	//     	<Board />
	//     );
	//   }
	// }


	render(<Board/>, document.getElementById('app'));

})();





