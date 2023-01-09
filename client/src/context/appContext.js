import React, { useReducer, useContext } from 'react';

const testState = {
    number: 0,
    array: [5,9,2,4,7],
    object: {name: 'McCray', stats: [6.2, 180, 'fine']}
}

const AppContext = React.createContext;

const ADD_TO_ARRAY ='ADD_TO_ARRAY';

const reducer = (state,action)=>{
    if(action.type === ADD_TO_ARRAY){
        return{
            ...state,
            array: state.array.concat(action.payload),
        }
    }
}

