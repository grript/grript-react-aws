import React from 'react';
import { connect } from "react-redux";
import { toggleMenu } from "../redux/actions/index";

const mapStateToProps = state => {
  return {
    menuToggleIsClicked: state.menuToggleIsClicked
  };
};

const mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return {
    toggleMenu: () => {
      dispatch(toggleMenu())
    }
  };
};


class MenuToggleClass extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.toggleMenu();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Toggle menu ( {this.props.menuToggleIsClicked.toString()} ) </button>
      </div>
    )
  }
}

const MenuToggle = connect(mapStateToProps, mapDispatchToProps)(MenuToggleClass);

export default MenuToggle; 
