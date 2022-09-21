import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './main/App'

ReactDOM.render(<App />, document.getElementById('app'))