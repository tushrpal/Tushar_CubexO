import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './redux/store.js'
import {ApiProvider} from "@reduxjs/toolkit/query/react";
import {productApi} from "./features/slice/apiSlice.js"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <ApiProvider api={productApi}> */}
        <App />
      {/* </ApiProvider> */}
    </Provider>  
  </StrictMode>,
)
