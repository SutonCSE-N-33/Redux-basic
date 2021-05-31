const redux = require('redux');

//state

const initState = {
    num:0
}

//Reducer
const Reducer = (state = initState, action) =>{
    if(action.type === 'INC_NUM'){
        return {
            ...state,
            num: state.num + 1
        }
    }

    if(action.type === 'ADD_NUM'){

        return {
            ...state,
            num: state.num + action.a
        }
    }


   return state;
}




//store
const myStore = redux.createStore(Reducer);

console.log(myStore.getState());


//dispatch

myStore.dispatch({
    type: "INC_NUM"
});

myStore.dispatch({
    type: 'ADD_NUM',
    a:5
});


console.log(myStore.getState());
