import React from 'react';

//The menu (blue)
class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

  clickHandler (){
    this.props.resetGame();
  }

  render() {
    return (
    	<nav id='menu' onClick={this.clickHandler} className="text-center"><a id="reset" className="btn btn-warning">Reset</a><br/><p>It's {this.props.turn.toUpperCase()}'s turn !</p></nav>
    	);
  }
}

export default Menu;
