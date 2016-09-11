import React from 'react';

class SelectPlayer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      checked: this.props.checked
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    this.setState({checked: this.state.checked === true ? false : true}, function(){
      this.props.selected(this.state.checked);
    });
  }

  render(){
    var display = this.props.display,
        displayClass;

    displayClass = display ? 'show' : 'hide';
    return(
      <div className={displayClass} id="selectplayer">
        <h2>Choose your side !</h2>
        <form>
          <div className="form-group">
            <label className="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="x" checked={!this.props.checked} onChange={this.handleChange} /> X
            </label>
          </div>
          <div className="form-group">
            <label className="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="o" checked={this.props.checked} onChange={this.handleChange} /> O
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SelectPlayer;