import { createStore } from 'redux';




//Redux
const reducer = (state = {title: 'Testing 1 2 3'}, action) => {
  switch(action.type){
    
    default:
       return state;
  }
};
const store = createStore(reducer);





export default store;