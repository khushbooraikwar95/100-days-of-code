const redux = require('redux') 
const createStore = redux.createStore

const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger  = reduxLogger.createLogger()


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
return {
    type: BUY_CAKE,
    info :'first redux action'
}
} 

function buyIceCream(){
    return {
        type: BUY_ICECREAM
        
    }
    } 

// const initialState ={
//     numOfCakes: 10,
//     numOfIceCreams= 20
// }

const initialCakeState ={
    numOfCakes: 10,
    
}

const initialIceCreamState ={
  
    numOfIceCreams: 20
}
const cakeReducer = (state = initialCakeState, action)=>{
switch(action.type){
    case BUY_CAKE : return{
        ...state,
        numOfCakes : state.numOfCakes-1
    }
     default : return state
}
}

const iceCreameReducer = (state = initialIceCreamState, action)=>{
    switch(action.type){
        
        case BUY_ICECREAM : return{
            ...state,
            numOfIceCreams : state.numOfIceCreams-1
        }
    
         default : return state
    }
    }

const rootDecuder = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreameReducer
})
const store = createStore(rootDecuder, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake()) 
store.dispatch(buyCake()) 
store.dispatch(buyCake()) 
store.dispatch(buyIceCream()) 
store.dispatch(buyIceCream());
unsubscribe()