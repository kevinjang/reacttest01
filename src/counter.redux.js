
const counterReducer = (state=0,action)=>{
    switch(action.type){
        case "add":
        return state + 1;
        case "minus":
        return state - 1;
        default:
        return state;
    }
}

const add = () => ({ type: 'add' })
const minus = () => {
    return { type: 'minus' }
}
const addOneSecLate = () => dispatch1 => {
  // console.log(dispatch1)
  setTimeout(() => {
    dispatch1({ type: 'add' })
  }, 1000)
}


export {counterReducer,add,minus,addOneSecLate}