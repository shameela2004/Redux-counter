const counterReducer=(state=0,action)=>{
    switch(action.type){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        default:
            return state        
    }
}


const store=Redux.createStore(counterReducer)


function render() {
  document.getElementById("count").innerText = store.getState();
}
store.subscribe(render);


document.getElementById("increment").addEventListener("click", () => {
  store.dispatch({ type: "increment" });
});

document.getElementById("decrement").addEventListener("click", () => {
  store.dispatch({ type: 'decrement' });
});

