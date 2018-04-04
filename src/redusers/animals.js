const initialState = [
  {
    id: 1,
    name: 'dog',
    description: '4 legs, 1 head'
  },
  {
    id: 2,
    name: 'dog',
    description: '4 legs, 1 head'
  },
  {
    id: 3,
    name: 'dog',
    description: '4 legs, 1 head'
  }
];

export default function animals(state = initialState, action) {
    let newState = state;
  switch (action.type) {
    case 'ADD_DATA':      
      newState.unshift(action.payload);
      return newState;
    case 'DEL_DATA':
      return state.filter((item) => item.id !== action.payload );
    case 'CHANGE_DATA':
      newState = state;
      for(let i = 0; i < newState.length; i++){
        if(newState[i].id === action.payload.id) {
          newState[i] = action.payload;
        }
      }
      return newState;
    default:
      return state;
  }
}