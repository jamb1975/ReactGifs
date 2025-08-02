import { fireEvent, render, screen} from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Test <ToDO />', () => {
    const todo = {
        id: 1,
        description: 'Perdon',
        done: false
    };
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();
    test('Debe de mostrar el ToDo pendiente', () => {

        render ( 
                    <TodoItem 
                        todo = { todo } 
                        onRemoveTodo = { onDeleteTodoMock } 
                        onToggleTodo = { onToggleTodoMock } 
                    />
                )

        const liElement = screen.getByRole('listitem');
        expect(liElement.innerHTML).toContain('span');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
       
        todo.done = true;
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center ');
        
    });

    test('Debe de mostrar el ToDo complete', () => {

        render ( 
                    <TodoItem 
                        todo = { todo } 
                        onRemoveTodo = { onDeleteTodoMock } 
                        onToggleTodo = { onToggleTodoMock } 
                    />
                )
       
        todo.done = true;
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
        
    });

    test('Debe de mostrar el ToDo complelte cunado hacemps click en description', () => {

        render ( 
                    <TodoItem 
                        todo = { todo } 
                        onRemoveTodo = { onDeleteTodoMock } 
                        onToggleTodo = { onToggleTodoMock } 
                    />
                )
       
        todo.done = true;
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement)
        expect( onToggleTodoMock ).toHaveBeenCalledWith(todo.id);
        
    });

    test('Debe eliminar el ToDo ', () => {

        render ( 
                    <TodoItem 
                        todo = { todo } 
                        onRemoveTodo = { onDeleteTodoMock } 
                        onToggleTodo = { onToggleTodoMock } 
                    />
                )
       
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement)
        expect( onDeleteTodoMock ).toHaveBeenCalledWith(todo.id);
        
    })
})