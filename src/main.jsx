// External imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

// Local imports
import App from './App'
import rootReducer from './slices/main'

// Styling
import './main.css'

const store = configureStore({ reducer: rootReducer })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
