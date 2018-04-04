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
      description: ''
    };
    this.myForm = React.createRef();
    this.myInput = React.createRef();
    this.myTextarea = React.createRef();
    this.Menu = React.createRef();
  }

  addNewAnimal = () => {
    let form = this.myForm;    
    form.classList.toggle('show');
    if(form.className.indexOf('show') < 0 && this.state.name && this.state.description && !this.state.id){
      let data = this.state;
      data.id = +new Date();
      this.props.onAddAnimal(data);
    }
    if(form.className.indexOf('show') < 0 && this.state.name && this.state.description && this.state.id){
      this.props.onChangeAnimal(this.state);
    }
    this.setState({
      id: null,
      name: '',
      description: ''
    });
    this.myInput.value = '';
    this.myTextarea.value = '';
  }

  showMenu = () => {
    this.Menu.classList.toggle('show');
  }

  logOut =() => {
    alert('logout');
  }

  changeForm = () => {
    let name = this.myInput.value;
    let description = this.myTextarea.value;
    this.setState({
      name,
      description
    });
  }

  changeAnimal = (id, name, description) => {
    this.myInput.value = name;
    this.myTextarea.value = description;
    this.setState({
      id
    });
    this.myForm.classList.toggle('show');
  }

  render() {    
    return (
      <div className="main-page">
        <div className='logo' onClick={this.showMenu} >D</div>
        <div className='log-out' onClick={this.logOut} ref={element => this.Menu = element} >{'<='}</div>
        <div className='animals-list'>
          {
            this.props.animals.map(item => <Animal key={item.id} animal={item} change={this.changeAnimal}/>)
          }
        </div>
        <div className='add-btn' onClick={this.addNewAnimal}>+</div>
        <form className='form' onChange={this.changeForm} ref={(element) => this.myForm = element} >
          <label>
            Animal's name
            <input type="text" ref={(element) => this.myInput = element} />
          </label>
          <label>
            Description
            <textarea name="description" className='description' cols="30" rows="10" ref={(element) => this.myTextarea = element}></textarea>
          </label>
        </form>
      </div>
    );
  }
}

export default connect(	
	state => ({
    animals: state.animals,
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