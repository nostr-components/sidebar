import { html } from '../js/standalone.module.js'

const sidebarStyle = {
  position: 'fixed',
  width: '200px',
  height: '100%',
  backgroundColor: '#2043b6',
  overflow: 'auto',
  paddingTop: '20px'
}

const sidebarLinkStyle = {
  display: 'block',
  color: '#f2f2f2',
  padding: '10px',
  textDecoration: 'none'
}

const sidebarLinkHoverStyle = {
  backgroundColor: '#ddd',
  color: 'black'
}

const Sidebar = () => {
  return html`
    <div style=${sidebarStyle}>
      <a href="#home" style=${sidebarLinkStyle} onMouseOver=${sidebarLinkHoverStyle}>Home</a>
      <a href="#about" style=${sidebarLinkStyle} onMouseOver=${sidebarLinkHoverStyle}>About</a>
      <a href="#contact" style=${sidebarLinkStyle} onMouseOver=${sidebarLinkHoverStyle}>Nostr</a>
    </div>
  `
}

export default Sidebar
