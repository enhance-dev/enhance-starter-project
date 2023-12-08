import { getStyles } from '@enhance/arc-plugin-styles'

const { linkTag } = getStyles

export default function Head(state) {
  const { store = {} } = state
  const { pageTitle = 'Enhance Starter Project' } = store
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${pageTitle}</title>
      ${linkTag()}
      <link rel="icon" href="/_public/favicon.svg">
      <meta name="description" content="The HTML first full stack web framework.">
    </head>
`
}
