export default function FourOFour ({ html, state }) {
  const { attrs } = state
  const { error } = attrs
  return html`
<el-header></el-header>
<section>
  <h1>Oops, something went wrong</h1>
  <p>${ error || 'page not found' }</p>
</section>
<el-footer></el-footer>
`
}
