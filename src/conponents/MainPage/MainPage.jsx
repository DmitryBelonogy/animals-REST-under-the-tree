import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MainPage.css';
import Animal from '../Animal/Animal';

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      discription: ''
    };
  }

  addNewAnimal = () => {
    let form = document.querySelector('.form');
    form.classList.toggle('show');
    if(form.className.indexOf('show') < 0 && this.state.name && this.state.discription && !this.state.id){
      let data = this.state;
      data.id = +new Date();
      this.props.onAddAnimal(data);
    }
    if(form.className.indexOf('show') < 0 && this.state.name && this.state.discription && this.state.id){
      this.props.onChangeAnimal(this.state);
    }
    this.setState({
      id: null,
      name: '',
      discription: ''
    });
    document.querySelector('.form input').value = '';
    document.querySelector('.form textarea').value = '';
  }

  showMenu = () => {
    let menu = document.querySelector('.log_out');
    menu.classList.toggle('show');
  }

  logOut =() => {
    alert('logout');
  }

  changeForm = () => {
    let name = document.querySelector('.form input').value;
    let discription = document.querySelector('.form textarea').value;
    this.setState({
      name,
      discription
    });
  }

  changeAnimal = (id, name, discription) => {
    let form = document.querySelector('.form');
    let nameInput = document.querySelector('.form input');
    let discriptionInput = document.querySelector('.form textarea');
    nameInput.value = name;
    discriptionInput.value = discription;
    this.setState({
      id
    });
    form.classList.toggle('show');
  }

  render() {
    return (
      <div className="main_page">
        <div className='logo' onClick={this.showMenu}>D</div>
        <div className='log_out' onClick={this.logOut}>{'<='}</div>
        <div className='animals_list'>
          {
            this.props.store.map(item => <Animal key={item.id} animal={item} change={this.changeAnimal}/>)
          }
        </div>
        <div className='add_btn' onClick={this.addNewAnimal}>+</div>
        <form className='form' onChange={this.changeForm}>
          <label>
            Animal's name
            <input type="text"/>
          </label>
          <label>
            Discription
            <textarea name="discription" className='discription' cols="30" rows="10"></textarea>
          </label>
        </form>
      </div>
    );
  }
}

export default connect(	
	state => ({
		store: state.animals
  }),
  dispatch => ({
		onAddAnimal: (data) => {
			dispatch({type: 'ADD_DATA', payload: data})
		},
    onChangeAnimal: (data) => {
			dispatch({type: 'CHANGE_DATA', payload: data})
    }
	})
)(MainPage);