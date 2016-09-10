import React from 'react';
import Button from './Button.jsx';
//The menu (blue)
class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
	}

  clickHandler (){
    this.props.resetGame();
  }

  buttonClick(){
    this.props.setSingle();
  }

  render() {
    var winner = (this.props.turn === 'o' ? 'x' : 'o').toUpperCase();

    return (
    	<nav id='menu' onClick={this.clickHandler} className="text-center"><a id="reset" className="btn btn-warning">Reset</a><br/>
         {(() => {
          if (this.props.win) {
            return (
              <p>{winner} won the game ! </p>
            );
          }else if(this.props.tie){
            return(
              <p>It's a tie !</p>
            );
          }else{
            return (
              <p>It's {this.props.turn.toUpperCase()}'s turn !</p>
            );
          }
        })()
        }

        <Button buttonClick={this.buttonClick} />
      </nav>
    );
  }
}

export default Menu;
