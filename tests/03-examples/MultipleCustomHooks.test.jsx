import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultiplesCustomHooks"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas <MultipleCustomHooks />', () => {
    const onNewCategory = jest.fn();
     useCounter.mockReturnValue(
        {
            counter: 1, 
            increment: jest.fn(), 
            decrement: jest.fn()
        }
    );
    test('Debe mostrar el componente por defecto',() => {
        useFetch.mockReturnValue({
          data: null,
          isLoading:true,
          hasError: null  
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Información de Caricatura'))
        const nextButton= screen.getByRole('button', { name: 'Siguiente'});
        expect(nextButton.disabled).toBeFalsy;
    });

    test('Debe mostrar un invoice',() => {
         useFetch.mockReturnValue({
            data: { id: 777, 
            name: "Javi",  
            sprites: { 
                        front_default: 'http:www.google.com',
                        front_shiny: 'http:www.google.com',
                        back_default: 'http:www.google.com',
                        back_shiny: 'http:www.google.com',
                        
                    },
          isLoading:false,
          hasError: null  
        }
    });
    
    const mockIncrement= jest.fn();
    useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement
        });

    render(<MultipleCustomHooks />);
    screen.debug();
    expect(screen.getByText('Javi')).toBeTruthy();
    expect(screen.getAllByText('#777 - Javi')).toBeTruthy();
    const nextButton= screen.getByRole('button', { name: 'Siguiente'});
    
    fireEvent.click(nextButton );
    
    expect( mockIncrement ).toHaveBeenCalled();
        
    });
})