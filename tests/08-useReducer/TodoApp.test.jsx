import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo.js");

describe("test en <TodoApp />", () => {
    useTodo.mockReturnValue({
        todos: [
                    { id: 1,
                    description: "todo 1",
                    done: false  
                    },
                    { id: 2,
                    description: "todo 2",
                    done: false  
                    }
                ],
        handleNewTodo: jest.fn(),
        handleRemoveTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todosCount: 2,
        pendingTodosCount: 1 
    });

    test("Debe de mostrar render con pendientes", () => {

        render( <TodoApp /> );
        expect(screen.getByText( "todo 1" )).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();
    })
})