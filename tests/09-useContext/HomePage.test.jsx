import { render,screen } from "@testing-library/react"
import { HomePage} from '../../src/09-useContext/HomePage'
import { UserContext } from "../../src/09-useContext/context/UserContext"
describe('test en <HomePage />', () => {

    const user = { id: 1, name: "Javi"}

    test('debe show el componente sin el usuario', () => {
        
        render( <UserContext.Provider value = { { user:  null } }>
                    <HomePage />
                </UserContext.Provider>
        )
        const preTag = screen.getByLabelText("pre");

        expect( preTag.innerHTML ).toBe( 'null' );
       
    });

     test('debe show el nombre del usuario', () => {
        
        render( <UserContext.Provider value = { { user:  user } }>
                    <HomePage />
                </UserContext.Provider>
        )
        const preTag = screen.getByLabelText("pre");

        expect( preTag.innerHTML ).toContain( 'Javi' );
        expect( preTag.innerHTML ).toContain( '1' );
       
    });
})