import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserContextProvider } from './Components/Context/user-profile-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <UserContextProvider>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </UserContextProvider>
  </Router>,
)
