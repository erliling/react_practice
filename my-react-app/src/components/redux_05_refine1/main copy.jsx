import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App.jsx'
import store from './redux/store'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />

    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
// store.subscribe(()=>{
  
//   root.render(
//     <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     </StrictMode>,
//   )
// })
