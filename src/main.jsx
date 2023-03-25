import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import { configureStore } from './store/store'

const storeContainer =configureStore().store
ReactDOM.createRoot(document.getElementById('root')).render(
    
    <Provider store={storeContainer}>
    <App />
    </Provider>
  
)
