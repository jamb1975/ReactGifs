import { render,screen, container } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"
import { useState } from "react";

describe('Test on <GifExpertApp />', () => {
    const title = "GifExpertApp";
    const category = "Genesis"
    test('Verificar snapshot0 y que no agregue a categoria si existe', () =>{
      
       const onNewCategory = jest.fn();
       const { container } = render(<GifExpertApp />)
       expect(onNewCategory).toHaveBeenCalled();
       expect( container ).toMatchSnapshot();
       expect(screen.getByText( title )).toBeTruthy();

     
    })
})