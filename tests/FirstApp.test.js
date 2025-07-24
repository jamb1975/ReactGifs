import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    test('Debe hacer match con el snapshot', () => {
        const titulo = 'Yo soy Jav';
        const   { container} = render( <FirstApp titulo = { titulo } />);
     expect( container ).toMatchSnapshot();

    });

    test('Debe mostrar el titulo en h1', () => {
        const titulo = 'Yo soy Jav';
     const   { container, getByText, getByTestId } = render( <FirstApp titulo = { titulo } />);
     //expect( getByText( titulo ) ).toBeTruthy();
    /* const h1 = container.querySelector('h1');
     console.log(h1.innerHTML);
     expect(h1.innerHTML).toContain( titulo );*/
     expect(getByTestId('text-title').innerHTML).toBe(titulo);

    });

    test('Debe mostrar el titulo en h1', () => {
     const titulo = 'Yo soy Jav';
     const   { container, getByText, getByTestId } = render( <FirstApp titulo = { titulo } />);
     //expect( getByText( titulo ) ).toBeTruthy();
    /* const h1 = container.querySelector('h1');
     console.log(h1.innerHTML);
     expect(h1.innerHTML).toContain( titulo );*/
     expect(getByTestId('text-title').innerHTML).toBe(titulo);

    });

     test('Debe mostrar el SUBtitulo en h1', () => {
        const titulo = 'Yo soy Jav';
        const subTitulo = 'Learn react is wom';
        const value = 100;
        const   { getAllByText} = render( <FirstApp titulo = { titulo } subtitulo={subTitulo} />);
     //expect( getByText( titulo ) ).toBeTruthy();
    /* const h1 = container.querySelector('h1');
     console.log(h1.innerHTML);
     expect(h1.innerHTML).toContain( titulo );*/
     expect(getAllByText(subTitulo).length).toBe(2);

    });
   
});