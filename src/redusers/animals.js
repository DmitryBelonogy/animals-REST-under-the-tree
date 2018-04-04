const initialState = [
  {
    id: 1,
    name: 'dog',
    discription: '4 legs, 1 head'
  },
  {
    id: 2,
    name: 'dog',
    discription: '4 legs, 1 head'
  },
  {
    id: 3,
    name: 'dog',
    discription: '4 legs, 1 head'
  }
];

export default function animals(state = initialState, action) {
	if (action.type === 'ADD_DATA') {
    let newState = state;
    newState.unshift(action.payload);
		return newState;
	}
	if (action.type === 'DEL_DATA') {
    return state.filter((item) => item.id !== action.payload );    
  }
  if (action.type === 'CHANGE_DATA') {
    let newState = state;
    for(let i = 0; i < newState.length; i++){
      if(newState[i].id === action.payload.id) {
        newState[i] = action.payload
      }
    }
    return newState;  
  }
	return state;
}