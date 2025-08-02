import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Testt of <GifGrid />', () => {
    const category = "Genesis";
    test('debe de mostrar el loading inicialmente', () => {
       useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
       });  
       render( <GifGrid category={ category } /> );
       expect(screen.getByText( 'Cargando...' ) );
       expect(screen.getByText( category ) );
    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs ', () => {
        const gifs = [
            {
                id: 'abc',
                title: 'Genesis',
                url: 'http://www.google.com'
            },
             {
                id: 'abcd',
                title: 'Genesis2',
                url: 'http://www.msn.com'
            }
        ];
        
         useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
       }); 
        
        render( <GifGrid category={ category } /> );
       
       expect(screen.getAllByText( 'Genesis' ) );
       expect(screen.getAllByRole( 'img' ).length ).toBe(2);
    });
});