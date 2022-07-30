export default function Footer ({ html, state }) {
  return html`
<footer>
  <p>Footer ${ state.attrs.message || state.store.message || 'default' }</p>
  <pre>${ JSON.stringify(state, null, 2) }</pre>
</footer>`
}
