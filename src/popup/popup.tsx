import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

const test = <p> Hello World!</p>
const container = document.createElement('div')
document.body.appendChild(container)

//ReactDOM.render(test, container)

const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(test)