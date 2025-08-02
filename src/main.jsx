import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { Layout } from './05-useLayoutEffect/Layout';
import { MainApp } from './09-useContext/mainApp';
import {  BrowserRouter } from "react-router-dom";
//import { Padre } from './07-tarea-memo/Padre';
//import  './08-useReducer/intro_reducer'
//import { TodoApp } from './08-useReducer/TodoApp';
//import { CallBackHook } from './06-memos/CallBackHook';
//import { MemorizeHook } from './06-memos/MemorizeHook';
//import { Memorize } from './06-memos/Memorize';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { MultipleCustomHooks } from './03-examples/MultiplesCustomHooks';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustonHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import {FirstApp} from './FirstApp';
//import { GifExpertApp } from './GifExpertApp'
////import { HooksApp } from './HooksApp';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  {/*<StrictMode>*/}
    <MainApp />
 {/* </StrictMode>*/}
 </BrowserRouter>
)
