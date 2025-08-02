const initialState = [
    {
        id: 1,
        todo: 'Recolectar almas',
        done: false
    }
];

const todoReduce = (state = initialState, action= {}) => {

    if(action.type == '[TODO] add todo'){
        return [...state, action.payload]

    }

    return state;

}

let todos = todoReduce();
const newTodo = [
    {
        id: 2,
        todo: 'Recolectar almas',
        done: false
    }
];
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}
todos = todoReduce(todos, addTodoAction);
console.log(todos);