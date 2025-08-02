import { todoReducer } from '../../src/08-useReducer/todoReducer'

describe("pruebas en ToDOreducer", () => {
    const initialState = [{
        id: 1,
        description: "Demo ToDo",
        done: false
    }]; 
    
    test('Debe regresar el estado inicial', () => {
        const newState = todoReducer(initialState, []);
        expect(newState).toBe(initialState);
    });

    test('Debe Add un todo', () => {
        const action = {
            type:'Add todo',
            payload: {
                id: 2,
                description: 'Todo 2',
                done : false            }
        }
        const newState = todoReducer(initialState, action) 
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

     test('Debe Delete un todo', () => {
        const action = {
            type:'Remove todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(0);
       
    });

    test('Debe Toggle un todo', () => {
        const action = {
            type:'Toggle todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action)
        expect(newState[0].done).toBeTruthy();
       
    });
})