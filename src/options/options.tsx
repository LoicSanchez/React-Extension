import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './options.css'

const test = <img src="icon.png" />
const container = document.createElement('div')
document.body.appendChild(container)

//ReactDOM.render(test, container)

const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(test)
