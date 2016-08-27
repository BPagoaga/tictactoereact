import React from 'react';

//The cell component (green)
class Cell extends React.Component {

	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}
  //The method to handle when a user clicks on the cell, calls the cellClick method on the parent component that is referenced in the props object.

  clickHandler () {
    this.props.cellClick(this.props.keyy, this.props.turn);
  }

  render () {
    return (
    	<div className={this.props.status === '' ? 'col-xs-4 cell' : 'col-xs-4 cell status-' + this.props.status} onClick={this.clickHandler}>{this.props.status}</div>
    	);
  }
}

export default Cell;
