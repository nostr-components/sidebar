import { html, render } from '../js/standalone.module.js'
import Sidebar from '../lib/index.js'

const links = [
  { '@id': '#', label: 'Sidebar' }
]

render(html`<${Sidebar} links="${links}" />`, document.body)
