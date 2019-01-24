export function createStore(reducer,enhancer){
    let currentState = {}
    // 监听器
    let currentListener = []

    function getState(){
        return currentState
    }

    function subscribe(listener){
        currentListener.push(listener)
    }

    function dispatch(action){
        currentState = reducer(currentState,action)
        currentListener.forEach(v=>v())
        return action
    }

    return {getState,subscribe,dispatch}
}