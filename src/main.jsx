import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './GifExpertApp.css';
import {FirstApp} from './FirstApp';
import { GifExpertApp } from './GifExpertApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp/>
  </StrictMode>,
)
