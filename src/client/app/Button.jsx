import React from 'react';

class Button extends React.Component {

  constructor(props){
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    this.props.buttonClick();
  }

  render(){
    return(
      <div className="checkbox">
        <label>
          <input type="checkbox" value={this.props.checked} onClick={this.clickHandler} />
          Single Player
        </label>
      </div>
    );
  }
}

export default Button;