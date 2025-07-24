import {getSaludo, getUser, getUserUnique, retornaArreglo, getHeroeById, get_heroes_by_own, getHeroeByIdAsync, getImagen} from '../src/pruebas.js';

describe('Test in <InvoiceElectronica/>', () =>{
    test('Prueba use state', () => {
    //init
    const message1 = "Nombre Javi";
    const name = 'Javi'
    const message2 = getSaludo(name);
    expect( message1 ).toBe( message2);
    //Estimulo
    //Assert

    });
}); 

describe('Test in <pRUEBAS/>', () =>{
    test('PruebaS GETuSER', () => {
    //init
    const message1 = {
            uid: "ABC123",
            username: "JAMB"
    };
   
    const message2 = getUser();
    expect( message1 ).toStrictEqual( message2);
    //Estimulo
    //Assert

    });
}); 

describe('Test in <pRUEBAS/>', () =>{
    test('PruebaS Get user unique', () => {

    //init
    const name = "Javi";
    const message1 = {
            uid: "ABC123",
            username: name
    };
   
    const message2 = getUserUnique(name);
    expect( message1 ).toStrictEqual( message2);
    //Estimulo
    //Assert

    });
});

describe('Test in <pRUEBAS/>', () =>{
    test('Prueba ARRGLO DEESTRUCURACIO', () => {

    const [letters, numbers] = retornaArreglo()
    expect( letters ).toBe( 'ABC');
    expect( numbers ).toBe( 123 );
    expect( typeof(letters)).toBe( "string" );
    expect( typeof(numbers) ).toBe("number" );
    expect( typeof( letters )).toEqual( expect.any( String ) )
    

    });
}); 

describe('Test in <pRUEBAS/>', () =>{
    test('Prueba heroe by id', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        expect( heroe ).toEqual( {id: 1, name: 'Batman', owner: 'DC' } )

    });

     test('Prueba heroe by id retorna undefined', () => {

        const id = 11;
        const heroe = getHeroeById(id);
      
        expect( heroe ).toBeFalsy

    });

    test('Prueba heroe by id retorna array DC', () => {

        const owner = 'DC';
        const heroes = get_heroes_by_own(owner);
        const heroes_dc = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    }
];
        expect( heroes.length ).toBe(3)
        expect ( heroes ).toEqual( heroes_dc);

    });

 test('Prueba heroe by id retorna array Marvel', () => {

        const owner = 'Marvel';
        const heroes = get_heroes_by_own(owner);
        const heroes_dc = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
             {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
        ];


        expect( heroes.length ).toBe(2)
        expect ( heroes ).toEqual( heroes_dc);

    });

     test('Prueba heroe by id Async', (done) => {

        const id = 1;
       getHeroeByIdAsync(id).then( heroe =>{
         expect( heroe ).toEqual( {id: 1, name: 'Batman', owner: 'DC' } );
         done();
       });
      
    });

     test('Prueba heroe by id Async debe obtener un error', (done) => {

        const id = 100;
       getHeroeByIdAsync(id).catch( error =>{
        expect(error).toBe('No se pudo encontrar el heroe 100')
        done();
       });
       
        
       });

        test('Prueba test getImage url', async() => {

            const url = await getImagen();
            expect( typeof url).toBe('string')

     
       });

        test('Prueba test getImage url error', async() => {

            const url = await getImagen(false);
            expect( url).toBe('No se encontro la imagen');
        });
}); 
