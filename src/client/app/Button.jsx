import React from 'react';

class Button extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      selectPlayer: true
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    this.props.buttonClick();
    this.setState({selectPlayer: this.selectPlayer===true ? false : true});
  }

  render(){
    return(
      <section title=".slideThree">
        <div className="slideThree">
          <input type="checkbox" id="slideThree" name="check" onClick={this.clickHandler} />
          <label htmlFor="slideThree"></label>
        </div>
      </section>
    );
  }
}

export default Button;

// <div className="checkbox">
//         <label>
//           <input type="checkbox" value={this.props.checked} onClick={this.clickHandler} />
//           Single Player
//         </label>
//       </div>