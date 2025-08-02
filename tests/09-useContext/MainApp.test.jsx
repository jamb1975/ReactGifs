import { render, screen} from "@testing-library/react"
import { MainApp } from '../../src/09-useContext/MainApp'
import { MemoryRouter } from "react-router-dom"
describe("Test <MainApp />", () => {
    test('Debe de mostra MainApp', () => {

        render(<MemoryRouter>
                    <MainApp />
                </MemoryRouter> 
        )
        expect( screen.getByText( 'HomePage' ) ).toBeTruthy();
    });

     test('Debe de mostra LognPage', () => {

        render(<MemoryRouter initialEntries={ ['/loginPage']} >
                    <MainApp />
                </MemoryRouter> 
        )
        expect( screen.getByText( 'LoginPage' ) ).toBeTruthy();
    });
});