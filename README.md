

<div align="center">  
  <h1>sidebar</h1>
</div>

<div align="center">  
<i>sidebar</i>
</div>

---

<div align="center">
<h4>Documentation</h4>
</div>

---

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nostr-components/sidebar/blob/gh-pages/LICENSE)
[![npm](https://img.shields.io/npm/v/nostr-components-sidebar)](https://npmjs.com/package/nostr-components-sidebar)
[![npm](https://img.shields.io/npm/dw/nostr-components-sidebar.svg)](https://npmjs.com/package/nostr-components-sidebar)
[![Github Stars](https://img.shields.io/github/stars/nostr-components/sidebar.svg)](https://github.com/nostr-components/sidebar/)

# Nostr Sidebar Component

This is a left-hand sidebar component for the Nostr project. It's built using Preact and HTM, providing a clean and efficient way to create user interface components with JavaScript.

## Features

The Sidebar component includes the following features:

- Fixed positioning on the left side of the screen.
- Full screen height.
- Vertically stacked links.
- Hover effects for the links.

## Usage

Here is a basic usage example of the Sidebar component:

```javascript
import Sidebar from './Sidebar.js'

const App = () => {
  return html`
    <${Sidebar} />
  `
}

render(html`<${App} />`, document.body)
```

## Component Props

The Sidebar component does not currently accept any props.

## Styles

The styles of the Sidebar component are defined within the component itself. Here are the key elements of the component's style:

- The sidebar itself has a fixed width of 200px, a height of 100%, and a background color of #333.
- The links within the sidebar are displayed as blocks, have a color of #f2f2f2, a padding of 10px, and no text decoration.
- On mouse hover, the links change their background color to #ddd and their color to black.

## Contributing

If you want to contribute to the Sidebar component, please follow the Nostr project's contribution guidelines. We welcome any kind of contributions and feedback.

## License

The Sidebar component is [MIT licensed](./LICENSE).

