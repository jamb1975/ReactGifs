import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { useContext } from "react";

    
describe('test en <LoginPage />', () => {

    const userMock = { id: 777, name: "Javi", email: "javi@gmail.com"}

    const setUserMock = jest.fn();

    /*useContext.mockReturnValue({
        user: userMock,
        setUser: setUserMock
    })*/
   
    test('debe show el componente sin el usuario', () => {
        
        render( <UserContext.Provider value = { { user:  null } }>
                    <LoginPage />
                </UserContext.Provider>
        )
        const preTag = screen.getByLabelText("pre");

        expect( preTag.innerHTML ).toBe( 'null' );
       
    });

     test('debe llammar el setUser con un usuario', () => {
        
        render( <UserContext.Provider value = { { user:  userMock, setUser: setUserMock } }>
                    <LoginPage />
                </UserContext.Provider>
        )
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);
        expect(setUserMock).toHaveBeenLastCalledWith({ id: 777, name: "Javi", email: "javi@gmail.com"})
      
       
    });
})