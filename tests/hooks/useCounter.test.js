import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks"
import { act } from "react";

describe('Tests to Hook useCounter', () => {
    
    test('Debe de retorna las pruebas por defecto', ()=> {

     const { result } =  renderHook(() => useCounter());
     console.log(result);
     const {counter, increment, decrement, reset} = result.current;
     expect(counter).toBe(10);
     expect(decrement).toEqual(expect.any( Function));
     expect(increment).toEqual(expect.any( Function));
     expect(reset).toEqual(expect.any( Function));

    });

    test('Counter Debe generar el valor 100', () => {
       const { result } =  renderHook(() => useCounter(100)); 
        const { counter } = result.current;
       expect(counter).toBe(100);
    });

     test(' Debe incrementar ', () => {
       const { result } =  renderHook(() => useCounter(10)); 
        const { increment, counter } = result.current;
       
        act(() => {
            increment();
             increment(3);
        })
       expect(result.current.counter).toBe(14);
    });
    
    test(' Debe decrementar ', () => {
       const { result } =  renderHook(() => useCounter(10)); 
        const { decrement } = result.current;
       
        act(() => {
            decrement();
            decrement(2);
        })
       expect(result.current.counter).toBe(7);
    })

    test(' Reset ', () => {
       const { result } =  renderHook(() => useCounter(10)); 
        const { reset, decrement } = result.current;
        act(() => {
            decrement();
            decrement(2);
             reset();
        })
      
       expect(result.current.counter).toBe(10);
    })
})