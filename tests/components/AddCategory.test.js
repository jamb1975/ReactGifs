import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Test on  <AddCategory />', () =>{
    test('debe cambiar el cuadro de textto', () =>{
        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Genesis' } } );
        expect( input.value ).toBe('Genesis')
      

    });

     test('debe llamr on newCategory si input tiene valor', () =>{
        const inputValue = 'Genesis';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory = { onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
         fireEvent.input( input, { target: { value: inputValue  } } );
         fireEvent.submit( form );
         expect( input.value).toBe('');
         expect(onNewCategory).toHaveBeenCalled();
         expect(onNewCategory).toHaveBeenCalledTimes(1);
         expect(onNewCategory).toHaveBeenCalledWith( inputValue    );
    });

    test('no debe llamr on newCategory si input esta vacìo', () =>{
        const inputValue = '';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory = { onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target: { value: inputValue  } } );
        fireEvent.submit( form );
        expect( input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    });
})