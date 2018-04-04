import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Animal.css';

class Animal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.animal.id,
      name: this.props.animal.name,
      description: this.props.animal.description
    };
  }

  deliteItem = (id) => {
    this.props.onDelAnimal(id);
  }

  render() {
    const {id, name, description} = this.props.animal;
    return(
      <div className='animal'>
        <span className='name'>{name}</span>
        <span className='description'>{description}</span>
        <div className='delite' onClick={() => this.deliteItem(id)}>X</div>
        <div className='change-btn' onClick={() => this.props.change(id, name, description)}>Change</div>
      </div>
    )
  }
}

export default connect(	
	state => ({}),
  dispatch => ({
		onDelAnimal: (id) => {
			dispatch({type: 'DEL_DATA', payload: id})
    }
	})
)(Animal);