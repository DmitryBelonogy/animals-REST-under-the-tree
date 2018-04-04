import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Animal.css';

class Animal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.animal.id,
      name: this.props.animal.name,
      discription: this.props.animal.discription
    };
  }

  // change = (id) => {
  //   let form = document.querySelector('.form');
  //   let name = document.querySelector('.form input');
  //   let discription = document.querySelector('.form textarea');
  //   name.value = this.props.animal.name;
  //   discription.value = this.props.animal.discription;
  //   form.classList.toggle('show');    
  //   if(form.className.indexOf('show') < 0 && name.value && discription.value){
  //     this.setState({
  //       name: name.value,
  //       discription: discription.value
  //     });
  //     let data = this.state;
  //     console.log(data);
  //   }
  // }

  del_item = (id) => {
    this.props.onDelAnimal(id);
  }

  render() {
    let id = this.props.animal.id;
    return(
      <div className='animal'>
        <span className='name'>{this.props.animal.name}</span>
        <span className='discription'>{this.props.animal.discription}</span>
        <div className='delite' onClick={() => this.del_item(id)}>X</div>
        <div className='change_btn' onClick={() => this.props.change(id, this.props.animal.name, this.props.animal.discription)}>Change</div>
      </div>
    )
  }
}

export default connect(	
	state => ({
		store: state.animals
  }),
  dispatch => ({
		onDelAnimal: (id) => {
			dispatch({type: 'DEL_DATA', payload: id})
    }
	})
)(Animal);