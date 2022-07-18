export default function FiveHundred ({ html, state }) {
  const { attrs } = state
  const { error } = attrs
  return html`
<el-header></el-header>
<section>
  <h1>Oops, something went wrong</h1>
  <p>${ error || 'system failure pleases try again' }</p>
</section>
<el-footer></el-footer>
`
}
