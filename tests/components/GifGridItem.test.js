import { render, screen, fireEvent } from "@testing-library/react";
import { GifGridItem } from '../../src/components/GifGridItem'

describe('Tests on <GifExpertApp />', () => {
  
  const title = "Genesis";
  const url = "https://media4.giphy.com/media/v1.Y2lkPTUwZTdiYzA0OG40amYyM3cyYXBha3hxY3BkdHo5c29iNzV5bWhwd203Zm5jbzh3diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/rhdscFKah6Rva/giphy.gif";  
 
  test('Verificar snapshot', () =>{
      const { container } = render(<GifGridItem  title = {title} url ={ url } />);
      expect( container ).toMatchSnapshot();
        
  });

  
  test('debe mostrar el url y title', () =>{
       render(<GifGridItem  title = {title} url ={ url } />);
       const { src, alt } = screen.getByRole('img');
       expect(src).toBe( url );
       expect(alt).toBe( title );
        
  });

  test('debe de tener el titulo', () =>{
       render(<GifGridItem  title = {title} url ={ url } />);
       expect(screen.getByText(title)).toBeTruthy();
  });

})