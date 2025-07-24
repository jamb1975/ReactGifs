import { render, screen, fireEvent } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas 2 en <FirstApp />', () => {

    const titulo = "Yo soy Javi";
    const subtitulo = "Learn react"
    const value = "100";
    const initialValue = 10;
    test('Debe hacer match snapshot', () =>{
        const { container } = render(<FirstApp  tittitulole = {titulo} />);
        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar el mensaje hola soy javi', () => {
       render(<FirstApp  titulo = {titulo} />); 
       //screen.debug();
       expect(screen.getByText(titulo)).toBeTruthy();
    })

    test("Debe de mostrar el titulo en n h1", () => {
        
        render(<FirstApp  titulo = {titulo} />);
        expect( screen.getByRole('heading', { level: 1}).innerHTML).toContain(titulo);

    });

    test('Debe mostrar el subtitulo enviado por props', () =>{
       render(<FirstApp  titulo = {titulo} subtitulo={subtitulo}/>);
       expect(screen.getAllByText(subtitulo).length).toBe(2);
    });

     test(' Debe validar el valor incial a 100', () =>{
         render(<FirstApp  titulo = {titulo} subtitulo={subtitulo} value={value}/>);
         expect(screen.container).toMatchSnapshot();
    });
     test(' Debe validar el valor incial a 100', () =>{
         render(<FirstApp  titulo = {titulo} subtitulo={subtitulo} value={100}/>);
         expect(screen.getByText(100)).toBeTruthy();
         expect(screen.getByText(value).innerHTML).toBe(value);
    });

     test("Debe de mostrar el titulo en element p", () => {
        
        render(<FirstApp  titulo = {titulo} subtitulo={subtitulo} value={value}/>);
        expect( screen.getAllByRole('paragraph')[3].innerHTML).toBe(value);

    });

    test('Debe incrementar con el bboton +1', () => {
       render(<FirstApp  titulo = {titulo} subtitulo={subtitulo} value={ initialValue }/>);
       fireEvent.click( screen.getByText('+1') )
       expect(screen.getByText('11')).toBeTruthy();

    });

     test('Debe decrementar con el boton -1', () => {
       render(<FirstApp  titulo = {titulo} subtitulo={subtitulo} value={ initialValue }/>);
       fireEvent.click( screen.getByText('-1') )
       expect(screen.getByText('9')).toBeTruthy();

    });

     test('Debe funcionar con el boton reset', () => {
       render(<FirstApp  titulo = {titulo} subtitulo={subtitulo} value={ 355 }/>);
       fireEvent.click( screen.getByText('+1') )
       fireEvent.click( screen.getByText('+1') )
       fireEvent.click( screen.getByText('+1') )
       //fireEvent.click( screen.getByText('Reset') )
       fireEvent.click( screen.getByRole( 'button', { name: 'btn-reset' } ) );
       expect(screen.getByText(355)).toBeTruthy();

    });
    
});