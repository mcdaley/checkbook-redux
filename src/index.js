//-----------------------------------------------------------------------------
// src/index.js
//-----------------------------------------------------------------------------
import React                  from 'react'
import ReactDOM               from 'react-dom'
//** import 'bootstrap'
//** import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import App                    from './App'
import registerServiceWorker  from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker();
